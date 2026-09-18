import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const [step, setStep] = useState("email");

  // Email Validation
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

    console.log("Fake OTP: 1234");
    setStep("otp");
  }

  // OTP Validation
  function handleVerifyOtp() {
    setOtpError("");

    if (!otp) {
      setOtpError("OTP is required");
      return;
    }

    if (otp !== "1234") {
      setOtpError("Please enter a valid OTP");
      return;
    }

    setStep("reset");
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
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        {/* EMAIL SCREEN */}
        {step === "email" && (
          <>
            <h1 style={{ color: "#fff", marginBottom: "8px" }}>
              Forgot Password?
            </h1>

            <p style={{ color: "#9CA3AF", marginBottom: "30px" }}>
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
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "#1F2937",
                  border: emailError
                    ? "1px solid #EF4444"
                    : "1px solid transparent",
                  color: "#fff",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  outline: "none",
                }}
              />

              {emailError && (
                <p style={{ color: "#EF4444", fontSize: "13px" }}>
                  {emailError}
                </p>
              )}

              <button
                type="submit"
                style={{
                  backgroundColor: "#F97316",
                  color: "#fff",
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
          </>
        )}

        {/* OTP SCREEN */}
        {step === "otp" && (
          <>
            <h1 style={{ color: "#fff", marginBottom: "8px" }}>
              Enter OTP
            </h1>

            <p style={{ color: "#9CA3AF", marginBottom: "30px" }}>
              We sent a 4-digit OTP to
              <br />
              <strong style={{ color: "#fff" }}>{email}</strong>
            </p>

            <input
              type="text"
              placeholder="Enter OTP"
              maxLength={4}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "#1F2937",
                color: "#fff",
                padding: "14px 16px",
                borderRadius: "10px",
                border: "1px solid transparent",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: "12px",
              }}
            />

            {otpError && (
              <p style={{ color: "#EF4444", fontSize: "13px" }}>
                {otpError}
              </p>
            )}

            <button
              onClick={handleVerifyOtp}
              style={{
                width: "100%",
                backgroundColor: "#F97316",
                color: "#fff",
                border: "none",
                padding: "14px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Verify OTP
            </button>
          </>
        )}

        {/* RESET PLACEHOLDER */}
        {step === "reset" && (
          <>
            <h1 style={{ color: "#fff", marginBottom: "8px" }}>
              Reset Password
            </h1>

            <p style={{ color: "#9CA3AF" }}>
              OTP verified successfully. You will redirect please wait .
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;