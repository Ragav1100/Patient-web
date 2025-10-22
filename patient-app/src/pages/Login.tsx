import { useState } from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoMdFingerPrint } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { RiMessage2Line } from "react-icons/ri";
import { Eye, EyeOff } from "lucide-react"; // eye icons
import '../App.css'; // adjust path if needed
import { useNavigate } from "react-router-dom";


const Login = () => {

  
const navigate = useNavigate();

  const [contact, setContact] = useState('');
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    // Validation: all fields must be filled
    if (!contact || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Form is valid → navigate to OTP
    navigate("/otp");
  };
  
  return (
    <div className="whole-container">
      <div className="login-text-head">
          <div className="lg-txt-icon"><MdOutlineHealthAndSafety /></div>
          <h2 className="heading-txt">Welcome Back</h2>
          <p className="login-text-para">Please enter your credentials to access the system</p>
      </div>
    
      <Input
        type="number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Eg.1234567890"
      />
      
 <div className="relative w-full">
      <input
        type={visible ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="w-full px-4 py-2 pr-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        className="eye-btn absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
      >
        {visible ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>

      <button className="signup-btn" onClick={handleSubmit}>Login In</button>
      <div className="flex flex-wrap justify-around">
        <div className="lg-alt-line"></div>
          <p className="lg-alt-text">or Login</p>
        <div className="lg-alt-line"></div>
      </div>
        <div className="flex gap-2">
            <button className="oth-login-btn flex gap-2" type="button"><span><IoMdFingerPrint /></span> aadhar</button>
            <button className="oth-login-btn flex gap-2" type="button" onClick={() => navigate("/otp")}><span><RiMessage2Line /></span>OTP</button>
        </div>

      <p className="login-txt">Don't have an account?  <a href="/Signup">SignUp Here</a></p>
    </div>
  );
};

export default Login;
