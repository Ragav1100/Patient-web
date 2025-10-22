import React from "react";
import { NavLink } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { FastForward, Trophy } from "lucide-react"
import { FaArrowRight } from "react-icons/fa6";
import { Ri24HoursLine } from "react-icons/ri";
import { Search } from "lucide-react"
import { IoHome, IoDocumentText } from "react-icons/io5";
import Autoplay from "embla-carousel-autoplay"
import { FaUser, FaHospital } from "react-icons/fa";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Badge } from "@/components/ui/badge"
const Home: React.FC = () => {


   const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const plugin2 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
    const plugin3 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="whole-container">
      <div className="flex items-center justify-center-safe -mt-5 pb-5">
        <h1 className="font-bold text-lg">Medshift</h1>
      </div>
      <div className="flex pb-5">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
      </InputGroup>
      </div>

      <div>
            <h2 className="font-bold text-lg mb-1">AI Health Assistant</h2>

            <div className="flex-col bg-white w-full h-30 rounded-md p-3 mb-5">
                    <h2 className="font-bold text-md mb-1">Stay Healthy with AI</h2>
                    <h2 className="text-sky-950/40 text-sm mb-1 w-50">Get Personalized health suggestions</h2>
                    <a href="" className="text-sky-400 decoration-sky-400 font-medium text-sm flex items-center" >View Suggestion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaArrowRight /></a>
                    <img className="w-30 relative -mt-25 mx-45" src="https://www.shutterstock.com/image-vector/patient-office-doctor-consultation-man-600nw-2462345779.jpg"></img>
            </div>
      </div>


      <div>
        <h2 className="font-bold text-lg mb-1">Recent Activity</h2>
      <Carousel
      plugins={[plugin2.current]}
      className="w-full "
      onMouseEnter={plugin2.current.stop}
      onMouseLeave={plugin2.current.reset}
    >
        <CarouselContent>
          <CarouselItem> 
          <div className="flex-col bg-white w-full h-30 rounded-md p-3 mb-5">
                    <h2 className="font-bold text-md mb-1">MGM Hospital</h2>
                    <h2 className="text-sky-950/40 text-sm mb-1 w-50">General Checkup - Nov 10'25</h2>
                    <a href="" className="text-sky-400 decoration-sky-400 font-medium text-sm flex items-center" >View Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaArrowRight /></a>
                    <img className="w-30 absolute -mt-20 mx-45" src="https://www.shutterstock.com/image-vector/patient-office-doctor-consultation-man-600nw-2462345779.jpg"></img>
            </div>
        </CarouselItem>
          <CarouselItem>
                <div className="flex-col bg-white w-full h-30 rounded-md p-3 mb-5">
                    <h2 className="font-bold text-md mb-1">Apollo Hospital</h2>
                    <h2 className="text-sky-950/40 text-sm mb-1 w-50">Cardiac Checkup - Nov 16'25</h2>
                    <a href="" className="text-sky-400 decoration-sky-400 font-medium text-sm flex items-center" >View Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaArrowRight /></a>
                    <img className="w-30 absolute -mt-25 mx-45" src="https://www.shutterstock.com/image-vector/patient-office-doctor-consultation-man-600nw-2462345779.jpg"></img>
            </div>
          </CarouselItem>
          <CarouselItem>
                <div className="flex-col bg-white w-full h-30 rounded-md p-3 mb-5">
                    <h2 className="font-bold text-md mb-1">MGM Hospital</h2>
                    <h2 className="text-sky-950/40 text-sm mb-1 w-50">Thyroid Checkup - Nov17'25</h2>
                    <a href="" className="text-sky-400 decoration-sky-400 font-medium text-sm flex items-center" >View Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaArrowRight /></a>
                    <img className="w-30 absolute -mt-25 mx-45" src="https://www.shutterstock.com/image-vector/patient-office-doctor-consultation-man-600nw-2462345779.jpg"></img>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      </div>

          <h3  className="home-text-title-2">Hospitals Near You</h3>
          <div className="spacer-2"></div>
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
               <CarouselContent>
                <CarouselItem className="basis-2/3">  
                <div className="hosp-cover-div">
                <img className="hosp-img" src="https://mgmhealthcare.in/emergencynamgm/images/about-us.jpg" alt="" />
                            <Badge
                              variant="secondary"
                              className="bg-amber-400 text-white dark:bg-amber-600 nrby-hosp-badges"
                            >
                              <Trophy />
                              Best Choice
                            </Badge>
                          
                          <div className="text-cover">
                                <h4 className="hosp-cover-name">MGM Hospital</h4>
                                <div className="flex items-center -mt-5">
                                    <h4 className="hosp-cover-loc-name opacity-70">Chennai</h4>
                                    <h5 className="font-thin text-xs text-white opacity-100 mt-1"> Beds avl:12</h5>
                                </div>
                                <div className="text-blur"></div>
                              </div>

                          </div>
                    </CarouselItem>
                      <CarouselItem  className="basis-2/3">
                            <div className="hosp-cover-div">
                              <img className="hosp-img" src="https://mgmhealthcare.in/emergencynamgm/images/about-us.jpg" alt="" />
                              <Badge
                              variant="secondary"
                              className="bg-green-400 text-white dark:bg-green-500 nrby-hosp-badges"
                            >
                              <FastForward />
                              Nearby
                            </Badge>
                              <div className="text-cover">
                                <h4 className="hosp-cover-name">Apollo Hospital</h4>
                                <div className="flex items-center -mt-5">
                                    <h4 className="hosp-cover-loc-name opacity-70">Chennai</h4>
                                    <h5 className="font-thin text-xs text-white opacity-100 mt-1"> Beds avl: 15</h5>
                                </div>
                                <div className="text-blur"></div>
                              </div>

                          </div>
                      </CarouselItem>
                      <CarouselItem  className="basis-2/3">
                            <div className="hosp-cover-div">
                              <img className="hosp-img" src="https://mgmhealthcare.in/emergencynamgm/images/about-us.jpg" alt="" />
                              <Badge
                              variant="secondary"
                              className="bg-blue-500 text-white dark:bg-blue-600 nrby-hosp-badges"
                            >
                              <Ri24HoursLine />
                              24/7
                            </Badge>
                              <div className="text-cover">
                                <h4 className="hosp-cover-name">GEM Hospital</h4>
                                <div className="flex items-center -mt-5">
                                    <h4 className="hosp-cover-loc-name opacity-70">Chennai</h4>
                                    <h5 className="font-thin text-xs text-white opacity-100 mt-1"> Beds avl: 6</h5>
                                </div>
                                <div className="text-blur"></div>
                              </div>

                          </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>

                  <h3  className="home-text-title-2">Suggested Doctors</h3>
          <div className="spacer-2"></div>
                <Carousel
                  plugins={[plugin3.current]}
                  className="w-full"
                  onMouseEnter={plugin3.current.stop}
                  onMouseLeave={plugin3.current.reset}
                >
               <CarouselContent>
                <CarouselItem className="basis-1/3 mx-3">  
                          <div className="flex flex-col justify-center items-center w-full">
                            <div className="w-25 h-25 bg-sky-800 rounded-full bg-[url('https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-600nw-2281709217.jpg')] bg-cover bg-center">
                            </div>
                            <h3 className="font-bold text-md text-black w-max">Dr.Ethan Carter</h3>
                            <h3 className="font-thin text-sm text-black/40 -mt-1">Cardiology</h3>
                          </div>
                    </CarouselItem>
                      <CarouselItem  className="basis-1/3 mx-3">
                              <div className="flex flex-col justify-center items-center w-full">
                            <div className="w-25 h-25 bg-sky-800 rounded-full bg-[url('https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-600nw-2281709217.jpg')] bg-cover bg-center">
                            </div>
                            <h3 className="font-bold text-md text-black w-max">Dr.Ethan Carter</h3>
                            <h3 className="font-thin text-sm text-black/40 -mt-1">Cardiology</h3>
                          </div>
                      </CarouselItem>
                      <CarouselItem  className="basis-1/3 mx-3">
                            <div className="flex flex-col justify-center items-center w-full">
                            <div className="w-25 h-25 bg-sky-800 rounded-full bg-[url('https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-600nw-2281709217.jpg')] bg-cover bg-center">
                            </div>
                            <h3 className="font-bold text-md text-black w-max">Dr.Ethan Carter</h3>
                            <h3 className="font-thin text-sm text-black/40 -mt-1">Cardiology</h3>
                          </div>
                      </CarouselItem>
                       <CarouselItem  className="basis-1/3 mx-3">
                            <div className="flex flex-col justify-center items-center w-full">
                            <div className="w-25 h-25 bg-sky-800 rounded-full bg-[url('https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-600nw-2281709217.jpg')] bg-cover bg-center">
                            </div>
                            <h3 className="font-bold text-md text-black w-max">Dr.Ethan Carter</h3>
                            <h3 className="font-thin text-sm text-black/40 -mt-1">Cardiology</h3>
                          </div>
                      </CarouselItem>
                       <CarouselItem  className="basis-1/3 mx-3">
                           <div className="flex flex-col justify-center items-center w-full">
                            <div className="w-25 h-25 bg-sky-800 rounded-full bg-[url('https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-600nw-2281709217.jpg')] bg-cover bg-center">
                            </div>
                            <h3 className="font-bold text-md text-black w-max">Dr.Ethan Carter</h3>
                            <h3 className="font-thin text-sm text-black/40 -mt-1">Cardiology</h3>
                          </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>


                  <button className="bg-sky-500 shadow-lg shadow-blue-500/50 p-2 w-full mt-5 rounded-md text-white font-bold ">Book Emergency Ambulance</button>


                  <div className="spacer-2"></div>
                  <div className="spacer-2"></div>
                  <div className="spacer-2"></div>
                  <div className="spacer-2"></div>
                  <div className="spacer-2"></div>
                  <div className="spacer-2"></div>

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

export default Home;
