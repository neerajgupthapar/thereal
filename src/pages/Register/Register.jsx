import { useState } from "react";
import "./Register.css";

function Register() {
    // Input states
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Error states
    const [usernameError, setUsernameError] = useState("");
    const [userIdError, setUserIdError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    function handleValidation(event) {
        event.preventDefault();

        // Clear previous errors
        setUsernameError("");
        setUserIdError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        if (!username) {
            setUsernameError("Name is required");
            // return;
        }

        if (!userId) {
            setUserIdError("ID is required");
            // return;
        }

        if (!/^\d+$/.test(userId)) {
            setUserIdError("Enter a valid numeric ID");
            // return;
        }

        if (!email) {
            setEmailError("Email is required");
            // return;
        }

        if (!email.endsWith("@gmail.com")) {
            setEmailError("Enter a valid Gmail address");
            // return;
        }

        if (!password) {
            setPasswordError("Password is required");
            // return;
        }

        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            // return;
        }

        if (!confirmPassword) {
            setConfirmPasswordError("Confirm your password");
            // return;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            // return;
        }

        console.log("Registration Successful");
    }

    return (
        <div id="Maindiv">
            <div id="Subdiv">
                <h1>Register Here!</h1>
                <p>Create your LPULive account</p>

                <form id="form" onSubmit={handleValidation}>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && <p className="Usernameerror">{usernameError}</p>}

                    <input
                        type="text"
                        placeholder="Enter Your ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    {userIdError && <p className="Usernameerror">{userIdError}</p>}

                    <input
                        type="email"
                        placeholder="Enter Your Mail-ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="Usernameerror">{emailError}</p>}

                    <input
                        type="password"
                        placeholder="Make A Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p className="Usernameerror">{passwordError}</p>}

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPasswordError && <p className="Usernameerror">{confirmPasswordError}</p>}
                    

                    <button type="submit">Make An Account</button>
                </form>

                <p className="bottom-text">
                    Already Have An Account?
                    <a href="#"> Login</a>
                </p>
            </div>
        </div>
    );
}

export default Register;