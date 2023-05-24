import { Navigate } from "react-router-dom";
import { useUserStore } from "../hooks/userStore";

export default function RequireAuth({ children }) {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);

    return isLoggedIn === true ? children : <Navigate to="/login" replace />
}