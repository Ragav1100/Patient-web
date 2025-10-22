import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaCamera, FaRegIdCard } from "react-icons/fa6";
import { IoHome, IoDocumentText } from "react-icons/io5";
import { FaUser, FaHospital } from "react-icons/fa";
import { LiaAllergiesSolid } from "react-icons/lia";
import { PiCrosshairDuotone } from "react-icons/pi";
import { Badge } from "@/components/ui/badge"
import { MdOutlineCoronavirus, MdOutlineHome, MdOutlineLightbulb, MdOutlineLocalHospital, MdOutlinePerson, MdOutlineShield, MdOutlineTimelapse, MdOutlineUploadFile, MdOutlineVerifiedUser } from "react-icons/md";
import { RiMedicineBottleLine } from "react-icons/ri";
import { LucideBellRing } from "lucide-react";
const Profile: React.FC = () => {



  return (
    <div className="whole-container">
      <div className="flex items-center justify-center-safe -mt-5 pb-5">
        <h1 className="font-bold text-lg">My Profile</h1>
      </div>


      <div>
            <div className="flex-col bg-white w-full h-max rounded-2xl p-3 mb-5 shadow-md">
                <img className="w-20 relative mt-5 mx-3 rounded-full outline-2 outline-offset-0 outline-blue-500" src="https://img.freepik.com/free-vector/woman-head-profile_24908-81681.jpg?semt=ais_hybrid&w=740&q=80"></img>
                <div className="relative -mt-5 mx-17">
                      <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 rounded-full p-1 scale-100 cursor-pointer">
                      <FaCamera />
                    </Badge>
              </div>
                    <h2 className="font-bold text-lg mb-1 -mt-20 mx-30 w-max pt-1">Priya Sharma</h2>
                    <h2 className="text-sky-950/40 text-md mb-1 w-50 mx-30">Aadhar: XXXX XXXX 1234</h2>
                    <a href="" className="text-sky-400 decoration-sky-400 font-medium text-sm flex items-center mx-30 w-max" >View Suggestion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaArrowRight /></a>
                    <div className="flex flex-row mt-6">
                                <div className="flex flex-col items-center mx-9">
                                    <h3 className="font-bold text-md opacity-60">Age</h3>
                                     <h3 className="font-bold text-lg">28</h3>
                                </div>
                                <div className="flex flex-col items-center mx-6">
                                    <h3 className="font-bold text-md opacity-60">Gender</h3>
                                     <h3 className="font-bold text-lg">Female</h3>
                                </div>
                                 <div className="flex flex-col items-center mx-6">
                                    <h3 className="font-bold text-md opacity-60 w-max">Blood Group</h3>
                                     <h3 className="font-bold text-lg text-red-600">O+</h3>
                                </div>
                                
                    </div>
            </div>
      </div>

      <div className="healthScore flex gap-6">
          <div className="w-50 p-3 h-22 bg-sky-200 rounded-2xl flex flex-col items-center">
            <h3 className="text-sky-950">Health Score</h3>
            <h1 className="text-sky-950 text-4xl font-bold">88</h1>
          </div>
          <div className="w-50 p-3 h-22 bg-white shadow-md rounded-2xl flex flex-row items-center">
               <h3 className="text-sky-400 text-2xl"><FaRegIdCard/></h3>
                 <h3 className="text-black mx-3 font-bold text-center">Medical ID Card</h3>
          </div>
      </div>

      <div className="flex flex-col mt-5">
        <h3  className="font-bold text-2xl mb-4">Health Information</h3>

        <div className="flex flex-col bg-white shadow-md w-1max h-max  p-3 rounded-2xl">
          
          <div className="flex flex-row items-center mb-4">
            <h4 className="text-3xl font-bold text-sky-400 mx-3"><MdOutlineCoronavirus/></h4>
            <div className="flex flex-col mx-3">
                <h4 className="text-md opacity-60">Medical Conditions</h4>
                <h4 className="text-lg font-bold">Hypertension, Mild Asthma</h4>
            </div>
          </div>

          <div className="flex flex-row items-center  mb-4">
            <h4 className="text-3xl font-bold text-sky-400 mx-3"><RiMedicineBottleLine/></h4>
            <div className="flex flex-col mx-3">
                <h4 className="text-md opacity-60">Current Medications</h4>
                <h4 className="text-lg font-bold">Amlodipine(5mg), Albuterol Inhaler(Asneeded)</h4>
            </div>
          </div>

          <div className="flex flex-row items-center mb-4">
            <h4 className="text-3xl font-bold text-sky-400 mx-3"><LiaAllergiesSolid /></h4>
            <div className="flex flex-col mx-3">
                <h4 className="text-md opacity-60">Allergies</h4>
                <h4 className="text-lg font-bold">Penicillin, Peanuts</h4>
            </div>
          </div>

          <div className="flex flex-row items-center mb-4">
            <h4 className="text-3xl font-bold text-sky-400 mx-3"><MdOutlineLocalHospital/></h4>
            <div className="flex flex-col mx-3">
                <h4 className="text-md opacity-60">Past Surgeries/Treatments</h4>
                <h4 className="text-lg font-bold">Appendectomy (2018)</h4>
            </div>
        
          </div>

              <div className="border-t-2">
                <button className="flex text-xl font-bold text-sky-950 bg-sky-200/50 p-3 w-75 mx-3 mt-5 mb-3 px-9 rounded-xl items-center gap-2 cursor-pointer"> <MdOutlineUploadFile/> Upload/View Reports</button>
              </div>
        </div>
      </div>


      <div className="flex flex-col mt-5">
        <h3  className="font-bold text-2xl mb-4">Personal Details</h3>

        <div className="flex flex-col bg-white shadow-md w-1max h-max  p-3 rounded-2xl">
          
          <div className="flex flex-row items-center mb-4">
            <h4 className="text-3xl font-bold text-sky-400 mx-3"><MdOutlineHome/></h4>
            <div className="flex flex-col mx-3">
                <h4 className="text-md opacity-60">Residential Address</h4>
                <h4 className="text-lg font-bold">#123, Sunshine Apartments, Green Valley, Banglore, 560001</h4>
            </div>
          </div>

          <div className="flex flex-row items-center  mb-4">
            <h4 className="text-3xl font-bold text-sky-400 mx-3"><PiCrosshairDuotone /></h4>
            <div className="flex flex-col mx-3">
                <h4 className="text-md opacity-60">Current location</h4>
                <h4 className="text-lg font-bold">Near City Park, Banglore</h4>
            </div>
          </div>
        </div>
      </div>  

      
      <div className="flex flex-col mt-5">
        <h3  className="font-bold text-2xl mb-4">Emergency Contacts</h3>

        <div className="flex flex-col bg-white shadow-md w-1max h-max  p-3 rounded-2xl">
          
          <div className="flex flex-row items-center mb-4 ">
            <div className="flex flex-col mx-3 w-100 border-b-2 pb-2">
              <h4 className="text-md opacity-60">Primary Contact</h4>
                <h4 className="text-lg font-bold">Arun Sharma</h4>
                <h4 className="text-md opacity-60">Brother</h4>
                <h4 className="text-md opacity-60">+91 98765 43210</h4>
            </div>
          </div>

          <div className="flex flex-row items-center  mb-4">
            <div className="flex flex-col mx-3">
                <h4 className="text-md opacity-60">Alternate Contact</h4>
                <h4 className="text-lg font-bold">Sunita Sharma</h4>
                <h4 className="text-md opacity-60">Mother</h4>
                <h4 className="text-md opacity-60">+91 98765 43211</h4>
            </div>
          </div>
        </div>
      </div>    
          
      <div className="flex flex-col mt-5">
        <h3  className="font-bold text-2xl mb-4">AI Insights</h3>

        <div className="flex flex-col bg-white shadow-md w-1max h-max  p-3 rounded-2xl"
         style={{
          background: "linear-gradient(114deg, rgba(189, 230, 255, 0.48) 0.92%, #FBFBFB 100%)",
        }}>

                   
          <div className="flex flex-row items-center mb-4">
            <h4 className="text-3xl font-bold text-sky-400 mx-3"><MdOutlineLightbulb/></h4>
            <div className="flex flex-col mx-3">
                <h4 className="text-md font-bold">Lifestyle Tip: <span className="font-thin"> Reduce sodium intake to help manage hypertension</span></h4>
            </div>
          </div>
                             
          <div className="flex flex-row items-center mb-4">
            <h4 className="text-3xl font-bold text-sky-400 mx-3"><MdOutlineLocalHospital/></h4>
            <div className="flex flex-col mx-3">
                <h4 className="text-md font-bold">Nearby Hospital: <span className="font-thin"> Apollo Hospital(5km away, 12 beds available)</span></h4>
            </div>
          </div>

          <div className="flex flex-row items-center mb-4">
            <h4 className="text-3xl font-bold text-sky-400 mx-3"><MdOutlinePerson/></h4>
            <div className="flex flex-col mx-3">
                <h4 className="text-md font-bold">Doctor Suggestion: <span className="font-thin"> Dr. Verma, Cardiologist, is highly rated.</span></h4>
            </div>
          </div>

          <div className="flex flex-row items-center mb-4">
            <h4 className="text-3xl font-bold text-green-500 mx-3"><LucideBellRing/></h4>
            <div className="flex flex-col mx-3">
                <h4 className="text-md font-bold ">Alert Status: <span className="font-thin"> All system normal</span></h4>
            </div>
          </div>
        </div>
      </div>      
      
      <div className="flex flex-row w-full mt-5 gap-3">
        <button className="flex text-md font-bold bg-white text-stone-500 p-1 px-3 py-3 w-100  mt-5 mb-3  rounded-xl items-center cursor-pointer shadow-md"><MdOutlineShield/> Privacy Controls</button>
        <button className="flex text-md font-bold bg-white text-stone-500 p-1 px-3 py-3 w-100  mt-5 mb-3  rounded-xl items-center cursor-pointer shadow-md"> <MdOutlineTimelapse/> Update History</button> 
      </div>
       
                 
      {/* bottom spacer */}
      <div>
                                    <div className="spacer-2"></div>
                                    <div className="spacer-2"></div>
                                    <div className="spacer-2"></div>
                                    <div className="spacer-2"></div>
                                    <div className="spacer-2"></div>
                                    <div className="spacer-2"></div>
      </div>
      {/* Bottom Navbar */}
      <div className="flex flex-row w-full fixed h-15 bg-white bottom-0 left-0">
                         <NavLink to="/home" className={({ isActive }) =>`flex flex-col mx-8 justify-center items-center transition-colors duration-200 ${ isActive ? "text-sky-500" : "text-sky-800/70 hover:text-sky-800" }` }>
                              <p className="text-2xl"><IoHome /></p>
                              <p className="text-sm">Home</p>
                        </NavLink>


                           <NavLink to="/profile" className={({ isActive }) => `flex flex-col mx-5 justify-center items-center transition-colors duration-200 ${isActive ? "text-sky-500" : "text-sky-800/70 hover:text-sky-800" }`}> 
                                <p className="text-2xl "><FaUser /></p>
                                <p className="text-sm ">Profile</p>
                          </NavLink>

                           <NavLink to="/insurance" className={({ isActive }) => `flex flex-col mx-5 justify-center items-center transition-colors duration-200 ${isActive ? "text-sky-500" : "text-sky-800/70 hover:text-sky-800" }`}> 
                                <p className="text-2xl "><IoDocumentText /></p>
                                <p className="text-sm">Insurance</p>
                          </NavLink>

                           <NavLink to="/hospital" className={({ isActive }) => `flex flex-col mx-5 justify-center items-center transition-colors duration-200 ${isActive ? "text-sky-500" : "text-sky-800/70 hover:text-sky-800" }`}> 
                                <p className="text-2xl"><FaHospital /></p>
                                <p className="text-sm">Hospitals</p>
                          </NavLink>
      </div>
      </div>
          
          
  );
};

export default Profile;
