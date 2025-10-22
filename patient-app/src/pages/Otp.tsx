import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import "../App.css";

const Otp: React.FC = () => {
  const [otpValue, setOtpValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // This effect runs whenever otpValue changes
  useEffect(() => {
    if (otpValue === "123456") {
      setLoading(true);

      const timer = setTimeout(() => {
        navigate("/home");
      }, 3000); // 3 sec preloader

      return () => clearTimeout(timer);
    }
  }, [otpValue, navigate]);

  return (
    <div className="whole-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {!loading ? (
        <>
          <h4 className="otp-heading-txt">Enter your OTP</h4>
          <p className="otp-para-txt">We have sent an OTP to your number +91 1234567890</p>
          <InputOTP maxLength={6} value={otpValue} onChange={setOtpValue}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </>
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <img src="https://i.gifer.com/ZZ5H.gif" alt="loading" width={100} />
          <p style={{ marginTop: "10px" }}>Verifying OTP...</p>
        </div>
      )}
    </div>
  );
};

export default Otp;
