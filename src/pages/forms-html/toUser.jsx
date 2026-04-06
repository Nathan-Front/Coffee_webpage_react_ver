import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useMobile } from "../../hooks/useIsMobile";
import { uploadProfile } from "../../assets/js/toUser";
function ToUser({ loggedUser, setLoggedUser }) {
  const navigate = useNavigate();
  const signOut = () => {
    setLoggedUser(null);
    localStorage.removeItem("userLogged");
    navigate(-1);
    alert("Signed out");
  };

  const profileRef = useRef(null);
  const handleProfileUpload = () => {
    profileRef.current.click();
  };
  const handleUploadChange = (e) => {
    //Pass the event
    uploadProfile(e);
  };
  const profileSource = () => {
    if (!loggedUser) return;
    const userRegistry =
      JSON.parse(localStorage.getItem("registeredUser")) || [];
    const currentUser = userRegistry.find(
      (u) => u.registryId === loggedUser.registryId,
    );
    if (currentUser?.profile) {
      return currentUser.profile;
    }
  };
  useMobile();

  return (
    <>
      <main>
        <div className="logged-user-container">
          <span
            className="close-input-field-mobile"
            onClick={() => navigate(-1) || navigate("/")}
          >
            X
          </span>
          <h1>Welcome</h1>
          <div className="user-icon-mobile-container">
            <img
              src={profileSource()}
              alt="User Icon"
              className="user-icon-mobile"
              id="user-profile-pic"
            />
            <input
              type="file"
              id="profile-pic-upload"
              accept="image/*"
              ref={profileRef}
              onChange={handleUploadChange}
              hidden
            />
            <img
              src={
                "./images/mobileLogo/addCamera/camera-add-photo-svgrepo-com.svg"
              }
              alt="Upload Image"
              className="upload-image-button"
              onClick={handleProfileUpload}
            />
          </div>
          <h2>{loggedUser?.userName}</h2>
          <button id="logout-button-mobile" onClick={signOut}>
            Sign out
          </button>
        </div>
      </main>
    </>
  );
}

export default ToUser;
