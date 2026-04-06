import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useMobile() {
   const navigate = useNavigate();
    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 599) {
            navigate("/");
        }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [navigate]);
}

