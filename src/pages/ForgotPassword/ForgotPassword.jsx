import { useState } from "react";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        setEmailError("");

        if (!email) {
            setEmailError("Email is required");
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            setEmailError("Enter a valid Gmail address");
            return;
        }

        console.log("OTP sent successfully");
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#111827",
                padding: "20px",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    width: "400px",
                    backgroundColor: "#0B0F19",
                    padding: "40px",
                    borderRadius: "20px",
                    boxSizing: "border-box",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                }}
            >
                <h1
                    style={{
                        color: "#FFFFFF",
                        marginBottom: "8px",
                    }}
                >
                    Forgot Password?
                </h1>

                <p
                    style={{
                        color: "#9CA3AF",
                        marginBottom: "30px",
                    }}
                >
                    Enter your registered email to receive an OTP.
                </p>

                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        style={{
                            backgroundColor: "#1F2937",
                            border: emailError
                                ? "1px solid #EF4444"
                                : "1px solid transparent",
                            color: "#FFFFFF",
                            padding: "14px 16px",
                            borderRadius: "10px",
                            fontSize: "15px",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    />

                    {emailError && (
                        <p
                            style={{
                                color: "#EF4444",
                                fontSize: "13px",
                                margin: "-8px 0 0",
                            }}
                        >
                            {emailError}
                        </p>
                    )}

                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#F97316",
                            color: "#FFFFFF",
                            border: "none",
                            padding: "14px",
                            borderRadius: "10px",
                            fontSize: "16px",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        Get OTP
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;