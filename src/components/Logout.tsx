import { Navigate } from "react-router-dom";
import { useUserStore } from "../hooks/userStore";

export default function Logout() {
    const logout = useUserStore((state) => state.logout);
    logout()
    return <Navigate to="/login" replace />
}