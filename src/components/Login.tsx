import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../hooks/userStore";

const Login = () => {
    const [user, setUser] = useState({});
    const { login } = useUserStore((state) => state);
    const navigate = useNavigate()

    const handleChange = (e: any) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div className="form-control">
                    <label className="input-group">
                        <span className="w-1/4">Email</span>
                        <input className="w-full"type="text" name="email" id="email" placeholder="Email Address" onChange={handleChange} />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group">
                        <span className="w-1/4">Password</span>
                        <input className="w-full" type="password" name="password" id="password" onChange={handleChange} />
                    </label>
                </div>
                
                
                <input className="btn-primary p-4 rounded-xl" type="submit" value="Sign In" />
            </form>
        </div>
    )
}

export default Login;