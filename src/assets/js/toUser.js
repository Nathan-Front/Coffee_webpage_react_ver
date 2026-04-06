

export function uploadProfile(e) {
    const file = e.target.files[0]; 
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Select only an image file");
      e.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        const imageUrl = reader.result;
        const loggedUser = JSON.parse(localStorage.getItem("userLogged"));
        const users = JSON.parse(localStorage.getItem("registeredUser")) || [];
        if(!loggedUser || !users) return
        const findUser = users.findIndex(user => user.registryId === loggedUser.registryId && user.userName === loggedUser.userName);
        if(findUser === -1) return;
        users[findUser].profile = imageUrl;
        localStorage.setItem("registeredUser", JSON.stringify(users));
    }
    reader.readAsDataURL(file);
    return {image: file}
}