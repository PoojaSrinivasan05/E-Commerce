import React, { useState, useRef } from "react";


const OtpBox = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ""); // Only digits
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Focus next input
      if (index < 5) inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").trim().slice(0, 6);
    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pastedData[i] || "";
    }
    setOtp(newOtp);
    const nextIndex = pastedData.length >= 6 ? 5 : pastedData.length;
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div style={styles.container}>
      <div style={styles.otpContainer} onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-[45px] h-[45px] text-center text-[17px]"
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.inputBox}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  otpContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  inputBox: {
    width: "40px",
    height: "40px",
    fontSize: "24px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default OtpBox;
