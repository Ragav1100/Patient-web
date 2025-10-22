import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoHome, IoDocumentText } from "react-icons/io5";
import { FaUser, FaHospital } from "react-icons/fa";
import { Slider } from "@/components/ui/slider"
import SmallMap from "../components/ui/smallMap";
const Emergency: React.FC = () => {



  const [selected, setSelected] = useState("All");
   const [value, setValue] = useState([10]); // initial slider value

  return (
    <div className="whole-container2 bg-white">
      <div className="flex items-center justify-center-safe -mt-5 pb-5">
        <h1 className="font-bold text-lg">MedShift 360</h1>
      </div>



      <div className="flex flex-col mt-5">
        <h3  className="font-bold text-2xl mb-4">Hospital & Ambulance Selection</h3>

        <div className="flex flex-col w-max h-max  p-3 rounded-2xl">
                <button className="flex text-md font-bold text-white bg-sky-500 p-2 w-88 -mx-3 mt-5 mb-3 px-9 rounded-md items-center gap-2 cursor-pointer"> Auto Book Nearest Ambulance & Hospital</button>
                <h4 className="w-80 items-center text-center flex opacity-75">AI will automatically find the fastest ambulance and the hospital with available beds</h4>
                <button className="flex text-md font-bold text-sky-500 bg-sky-500/30 p-2 px-20 w-88 -mx-3 mt-5 mb-3 rounded-md items-center gap-2 cursor-pointer"> Choose Hospital Manually</button>
        </div>


      </div>

       <div className="flex">
        <SmallMap />
        </div>  

        <div>
            <h5 className="font-bold text-lg mt-5 mx-1">Filters</h5>

            <div className="w-full bg-stone-300/70 h-10 rounded-sm flex flex-row gap-1 p-1">
        {["Government", "Private", "All"].map((item) => (
          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`flex-1 rounded-sm text-sm font-medium transition-all 
              ${selected === item
                ? "bg-white text-black"
                : "text-gray-700/70 hover:bg-sky-100"}`}
          >
            {item}
          </button>
        ))}
      </div>
        <h4 className="text-lg font-medium text-gray-800 bottom-0 relative mt-5 flex gap-50 mb-2"><span>Distance</span> {value[0]} Km</h4>

      <Slider
        value={value}
        onValueChange={(val) => setValue(val)} // updates on drag
        max={50}
        step={1}
        className="w-full bg-white mb-5 shadow-2xl"
      />

    {/* Conditional Rendering */}
        <div className=" bg-white rounded text-center">
            {selected === "Government" && 
            <div className="flex flex-col">
                <div className="flex flex-row mb-5 bg-gray-200/40 p-4 pb-4 rounded-md">
                    <div className="flex flex-row">
                        <img className="w-25 h-25 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMU2bkrlxnDyWhnKWUowxU3HO_N7bZz0ihg&s"/>
                        <div className="flex flex-col items-start mx-3 text-left">
                            <h4 className="text-sky-500 font-bold">1.2 Km</h4>
                            <h4 className="text-black font-bold text-md">St.Luke's Medical Center</h4>
                            <h4 className="text-black/30 font-thin text-sm">Beds:12 | Doctors: 25 | Avg.Arrival: 15 min</h4>
                            <button className="bg-sky-200 text-sky-400 p-2 px-6 mt-2 rounded-md">Select</button>
                        </div>
                    </div>
                    
                </div>

                 <div className="flex flex-row mb-5 bg-gray-200/40 p-4 pb-4 rounded-md">
                    <div className="flex flex-row">
                        <img className="w-25 h-25 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMU2bkrlxnDyWhnKWUowxU3HO_N7bZz0ihg&s"/>
                        <div className="flex flex-col items-start mx-3 text-left">
                            <h4 className="text-sky-500 font-bold">2.5 Km</h4>
                            <h4 className="text-black font-bold text-md">City General Hospital</h4>
                            <h4 className="text-black/30 font-thin text-sm">Beds:8 | Doctors: 18 | Avg.Arrival: 20 min</h4>
                            <button className="bg-sky-200 text-sky-400 p-2 px-6 mt-2 rounded-md">Select</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            }
            {selected === "Private" && 
            <div className="flex flex-col">
                <div className="flex flex-row mb-5 bg-gray-200/40 p-4 pb-4 rounded-md">
                    <div className="flex flex-row">
                        <img className="w-25 h-25 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMU2bkrlxnDyWhnKWUowxU3HO_N7bZz0ihg&s"/>
                        <div className="flex flex-col items-start mx-3 text-left">
                            <h4 className="text-sky-500 font-bold">0.5 Km</h4>
                            <h4 className="text-black font-bold text-md">Private Health Center</h4>
                            <h4 className="text-black/30 font-thin text-sm">Beds:12 | Doctors: 25 | Avg.Arrival: 15 min</h4>
                            <button className="bg-sky-200 text-sky-400 p-2 px-6 mt-2 rounded-md">Select</button>
                        </div>
                    </div>
                    
                </div>

                 <div className="flex flex-row mb-5 bg-gray-200/40 p-4 pb-4 rounded-md">
                    <div className="flex flex-row">
                        <img className="w-25 h-25 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMU2bkrlxnDyWhnKWUowxU3HO_N7bZz0ihg&s"/>
                        <div className="flex flex-col items-start mx-3 text-left">
                            <h4 className="text-sky-500 font-bold">1.5 Km</h4>
                            <h4 className="text-black font-bold text-md">Apollo Hospital</h4>
                            <h4 className="text-black/30 font-thin text-sm">Beds:8 | Doctors: 18 | Avg.Arrival: 20 min</h4>
                            <button className="bg-sky-200 text-sky-400 p-2 px-6 mt-2 rounded-md">Select</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            }
            {selected === "All" && 
            <div className="flex flex-col">
                <div className="flex flex-row mb-5 bg-gray-200/40 p-4 pb-4 rounded-md">
                    <div className="flex flex-row">
                        <img className="w-25 h-25 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMU2bkrlxnDyWhnKWUowxU3HO_N7bZz0ihg&s"/>
                        <div className="flex flex-col items-start mx-3 text-left">
                            <h4 className="text-sky-500 font-bold">1.2 Km</h4>
                            <h4 className="text-black font-bold text-md">St.Luke's Medical Center</h4>
                            <h4 className="text-black/30 font-thin text-sm">Beds:12 | Doctors: 25 | Avg.Arrival: 15 min</h4>
                            <button className="bg-sky-200 text-sky-400 p-2 px-6 mt-2 rounded-md">Select</button>
                        </div>
                    </div>
                    
                </div>

                 <div className="flex flex-row mb-5 bg-gray-200/40 p-4 pb-4 rounded-md">
                    <div className="flex flex-row">
                        <img className="w-25 h-25 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMU2bkrlxnDyWhnKWUowxU3HO_N7bZz0ihg&s"/>
                        <div className="flex flex-col items-start mx-3 text-left">
                            <h4 className="text-sky-500 font-bold">2.5 Km</h4>
                            <h4 className="text-black font-bold text-md">City General Hospital</h4>
                            <h4 className="text-black/30 font-thin text-sm">Beds:8 | Doctors: 18 | Avg.Arrival: 20 min</h4>
                            <button className="bg-sky-200 text-sky-400 p-2 px-6 mt-2 rounded-md">Select</button>
                        </div>
                    </div>
                    
                </div>

                  <div className="flex flex-row mb-5 bg-gray-200/40 p-4 pb-4 rounded-md">
                    <div className="flex flex-row">
                        <img className="w-25 h-25 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMU2bkrlxnDyWhnKWUowxU3HO_N7bZz0ihg&s"/>
                        <div className="flex flex-col items-start mx-3 text-left">
                            <h4 className="text-sky-500 font-bold">0.5 Km</h4>
                            <h4 className="text-black font-bold text-md">Private Health Center</h4>
                            <h4 className="text-black/30 font-thin text-sm">Beds:12 | Doctors: 25 | Avg.Arrival: 15 min</h4>
                            <button className="bg-sky-200 text-sky-400 p-2 px-6 mt-2 rounded-md">Select</button>
                        </div>
                    </div>
                    
                </div>

                 <div className="flex flex-row mb-5 bg-gray-200/40 p-4 pb-4 rounded-md">
                    <div className="flex flex-row">
                        <img className="w-25 h-25 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMU2bkrlxnDyWhnKWUowxU3HO_N7bZz0ihg&s"/>
                        <div className="flex flex-col items-start mx-3 text-left">
                            <h4 className="text-sky-500 font-bold">1.5 Km</h4>
                            <h4 className="text-black font-bold text-md">Apollo Hospital</h4>
                            <h4 className="text-black/30 font-thin text-sm">Beds:8 | Doctors: 18 | Avg.Arrival: 20 min</h4>
                            <button className="bg-sky-200 text-sky-400 p-2 px-6 mt-2 rounded-md">Select</button>
                        </div>
                    </div>
                    
                </div>

            </div>
            }
        </div>

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

export default Emergency;
