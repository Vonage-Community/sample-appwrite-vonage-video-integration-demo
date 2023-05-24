import { NavLink, Outlet } from "react-router-dom";
import { useUserStore } from "../hooks/userStore";

const Root = () => {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);

    return (
        <>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Vonage Video / Appwrite</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        { isLoggedIn && <NavLink to="logout">Log Out</NavLink> }
                        { !isLoggedIn && <NavLink to="login">Log In</NavLink> }
                    </li>
                </ul>
            </div>
            </div>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root