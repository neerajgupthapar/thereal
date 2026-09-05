import { useState } from "react";
import "./Login.css";

function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    console.log(username)
    const [password , setPassword] = useState("");
    console.log(password)

    const[usernameerror,setUsernameError]=useState("");
    const[passworderror,setPasswordError]=useState("");

    const [loading,setLoading]= useState(false);


function handleSubmit(event) {
    event.preventDefault();

    setUsernameError("");
    setPasswordError("");

    if (username === "") {
        setUsernameError("Invalid input");
        return;
    }

    if (password === "") {
        setPasswordError("Invalid input");
        return;
    }

    console.log("Form submitted");
    setLoading(true)
    setTimeout(() => {
        setLoading(false);
        alert("Login Successful!");
    }, 2000);
}

    

    return (
        <div className="login-page">

            {/* LEFT CARD */}

            <div className="login-left">

                <div className="brand">
                    <h2>LPU LIVE</h2>
                </div>

                <div className="login-illustration">
                    <div className="university-icon">🎓</div>

                    <h2>
                        Stay Connected.
                        <br />
                        Stay Informed.
                    </h2>

                    <p>
                        Your university, your community,
                        all in one place.
                    </p>
                </div>

                <p className="copyright">
                    © 2026 LPU LIVE
                </p>

            </div>


            {/* RIGHT CARD */}

            <div className="login-right">

                <div className="login-content">

                    <h1>Welcome back</h1>

                    <p className="subtitle">
                        Sign in to your account to continue
                    </p>


                    <form onSubmit={handleSubmit}>

                        {/* ID */}

                        <label htmlFor="userId">
                            University ID
                        </label>

                        <input
                            id="userId"
                            type="text"
                            placeholder="Enter your university ID"
                            onChange={(e)=>setUsername(e.target.value)}


                        />

                        {usernameerror && <p className="input-error">{usernameerror}</p>}


                        {/* PASSWORD */}

                        <label htmlFor="password">
                            Password
                        </label>

                        <div className="password-container">

                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                onChange={(e)=>setPassword(e.target.value)}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                                
                                
                            </button>

                        </div>


                        {passworderror && <p className="input-error">{passworderror}</p>}


                        {/* FORGOT PASSWORD */}

                        <div className="forgot-password">
                            <a href="#">
                                Forgot password?
                            </a>
                        </div>


                        {/* LOGIN BUTTON */}

                        <button
                            type="submit"
                            className="login-button"
                            disabled={loading}
                        >
                            {loading ? "Logging..." : "Sign In"}
                        </button>

                    </form>


                    {/* REGISTER */}

                    <p className="register-text">
                        Don't have an account?
                        <a href="#">
                            Register
                        </a>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;