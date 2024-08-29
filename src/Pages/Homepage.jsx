import React from 'react';
// import { FaMoon } from "react-icons/fa";
import Image from '../Images/CroppedPic.png';
import { FaLinkedin, FaYoutube, FaGithub, FaViber, FaFacebookMessenger } from "react-icons/fa";
import { MdSunny, MdOutlineSupportAgent, MdDesignServices } from "react-icons/md";
import { BsFillPatchCheckFill, BsGlobe } from "react-icons/bs";
// import OrdersImg from '../Images/Orders.png';
import { useState } from 'react';
import PepsimanVsKefla from '../Images/PepsimanVsKefla.jpg';
import GohanvsBlack from '../Images/GohanvsGokuBlack.jpg';
import FCvsB from '../Images/FriezaCellVsBroly.jpg';
import GokuvsBardock from '../Images/GokuVsBardock.jpg';
import GvV from '../Images/GogetavsVegito.jpg';
import XGvSG from '../Images/XenoGokuvsGoku.jpg';
import { IoIosArrowDroprightCircle, IoMdMail } from "react-icons/io";
import { SiAdobephotoshop } from "react-icons/si";
import ScrollBtn from '../Components/ScrolltoTopBtn.jsx';
import Modal from '../Components/Modal.jsx';
import CV from '../Assets/CV_ORO.pdf';


function Homepage() {

    const [darkMode, setDarkMode] = useState(true); 

    // Modals
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
        <main className='bg-gray-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:ease-in-out duration-150'>
            {/* Navbar */}
            <section className="min-h-screen">
                <nav className='py-10 mb-12 flex justify-between '>
                    <h1 className='text-lg dark:text-white font-semibold'>RYAN</h1>
                    <ul className='flex items-center'>
                        <li>
                            <MdSunny onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-lg dark:text-white
                             dark:hover:text-yellow-300'/>
                        </li>
                    </ul>
                </nav>
                {/* Intro Section */}
                {/* text-5xl py-2 text-blue-600 font-medium md:text-6xl dark:text-yellow-300 */}
                <div className='text-center p-10'>
                    <center><h2 className='text-4xl relative inline-block w-full max-w-md text-green-500 font-medium md:text-3xl 
                                    before:absolute before:inset-0 before:animate-typewriter 
                                  before:bg-gray-100 dark:before:bg-gray-900 after:absolute after:inset-1 after:w-[0.200em]
                                    after:animate-caret after:bg-green-500 dark:after:bg-yellow-300 dark:text-yellow-300
                                    xs:text-sm sm:text-2xl ms:text-[15px] lg:text-3xl'>
                                    John Averian Oro</h2></center>
                    <h3 className='text-2xl py-2 md:text-3xl dark:text-white ms:text-md'>Developer / Pixel Animator.</h3>
                    <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
                        I'm an aspiring developer and aims to provide services for programming and motion graphics design.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <a href={CV} download="CV_ORO" >
                        <button type='submit' className='bg-transparent hover:bg-green-500 text-green-700 font-semibold
                        hover:text-white py-3 px-4 border border-green-500 hover:border-transparent rounded-full
                        hover:ease-in duration-150 dark:text-yellow-300 dark:border-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white'
                        >Download CV</button>
                    </a>
                </div>
                <div className='text-5xl flex justify-center gap-10 py-10 text-gray-600'>
                    <a href='https://www.linkedin.com/in/john-averian-oro-b8ab41280/' target='blank'>
                        <FaLinkedin className='dark:text-white cursor-pointer'/>
                    </a>
                    <a href='https://www.youtube.com/Rayn2D' target='blank'>
                        <FaYoutube  className='dark:text-white cursor-pointer'/>
                    </a>
                    <a href='https://github.com/RaynGH' target='blank'>
                        <FaGithub   className='dark:text-white cursor-pointer'/>
                    </a>
                </div>
                <div className='relative mt-10 lg:mx-auto md:mx-auto md:h-72 md:w-72 sm:h-72 sm:w-72 xs:mx-auto xs:h-72 xs:w-72'>
                    <img src={Image} className='object-cover' alt='profile'/>
                </div>
            </section>
            {/* About me section */}
            <section>
                <div className='mt-10'>
                    <h3 className="text-2xl py-1 dark:text-white font-semibold">About me</h3>
                    <p className=' text-md py-3 leading-8 text-gray-800 dark:text-white'>
                    Throughout my academic journey, I discovered the enjoyable yet 
                    intricate world of website development and pixel animation. Despite its complexities, 
                    I find the process incredibly fascinating!
                    </p>
                </div>
                {/* Skills section */}
                <h3 className="text-2xl py-5 dark:text-white font-semibold">My Skills</h3>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-96 rounded-lg bg-white shadow-lg  mb-5 sm:mx-5 xs:mx-5 xs:text-sm ms:text-sm  dark:bg-blue-950'>
                        {/* Heading */}
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white'>Front-End Development</h4>
                        </div>

                        <div className='grid grid-cols-2 gap-2 lg:text-[15px] lg:mx-10 ml:mx-10 md:mx-20 ms:px-5 pb-10 ms:text-[12px]'>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>HTML</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p  className='dark:text-white'>CSS</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>JavaScript</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Bootstrap</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>React</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Tailwind</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 xs:mx-5 xs:text-sm dark:bg-blue-950'>
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white ms:text-sm'>Back-End Development</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-2 lg:text-[15px] lg:mx-10 ml:mx-10 ms:px-5 ms:text-[12px] pb-10'>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>MySQL</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>MongoDB</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Basic</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>PHP</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Basic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 xs:mx-5 xs:text-sm dark:bg-blue-950'>
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white ms:text-sm'>Graphic / Video Editing Tools</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-2 lg:text-[15px] lg:mx-10 ml:mx-10 ms:px-5 ms:text-[12px] pb-10'>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Animate</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>After Effects</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Figma</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Canva</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Photoshop</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Sony Vegas</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 xs:mx-5 xs:text-sm dark:bg-blue-950'>
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white ms:text-sm'>Office Tools</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-2 lg:text-[15px] lg:mx-10 ml:mx-10 ms:px-5 ms:text-[12px] pb-10'>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Word</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Excel</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Powerpoint</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>Outlook</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {/* Portfolio */}
                <h3 className="text-2xl my-5 dark:text-white font-semibold">My Portfolio  / Previous works</h3>
                <div className='flex flex-wrap justify-center'>
                    <div className='lg:grid lg:grid-cols-3 lg:gap-4'>
                        <div className='my-2 relative group shadow-xl'>
                            <a href='https://www.youtube.com/watch?v=HpWTzJZcoYg' target='blank'>
                                <img src={PepsimanVsKefla} 
                                className='object-cover rounded-xl group-hover:opacity-30 hover:ease-in-out duration-150
                                cursor-pointer' alt='sprite1'/>
                                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-y-5
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-green-500 dark:text-white font-semibold '>
                                Pepsiman vs Kefla
                                </div>
                            </a>
                        </div>
                        <div className='my-2 relative group shadow-xl'>
                            <a href='https://www.youtube.com/watch?v=e-2fx5O60rg' target='blank'>
                                <img src={GohanvsBlack} 
                                className='object-cover rounded-xl group-hover:opacity-50 hover:ease-in-out duration-150
                                cursor-pointer' alt='sprite2'/>
                                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-y-5
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-green-500 dark:text-white font-semibold'>
                                Gohan vs Goku Black
                                </div>
                             </a>
                        </div>
                        <div className='my-2 relative group shadow-xl'>
                            <a href='https://www.youtube.com/watch?v=SXvjhHey3Nc' target='blank'>
                                <img src={FCvsB} 
                                className='object-cover rounded-xl group-hover:opacity-50 hover:ease-in-out duration-150
                                cursor-pointer' alt='sprite3'/>
                                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-y-5
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-green-500 dark:text-white font-semibold'>
                                Frieza, Cell vs Broly
                                </div>
                             </a>
                        </div>
                        <div className='my-2 relative group shadow-xl'>
                            <a href='https://www.youtube.com/watch?v=CESl5gEOQLQ' target='blank'>
                                <img src={GokuvsBardock} 
                                className='object-cover rounded-xl group-hover:opacity-50 hover:ease-in-out duration-150
                                cursor-pointer' alt='sprite4'/>
                                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-y-5
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-green-500 dark:text-white font-semibold'>
                                Goku vs Bardock
                                </div>
                             </a>
                        </div>
                        <div className='my-2 relative group shadow-xl'>
                            <a href='https://www.youtube.com/watch?v=TOe-wu4DRe8&t=201s' target='blank'>
                                <img src={GvV} 
                                className='object-cover rounded-xl group-hover:opacity-50 hover:ease-in-out duration-150
                                cursor-pointer' alt='sprite5'/>
                                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-y-5
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-green-500 dark:text-white font-semibold'>
                                Gogeta vs Vegito
                                </div>
                             </a>
                        </div>
                        <div className='my-2 relative group shadow-xl'>
                                <img src={XGvSG} 
                                className='object-cover rounded-xl group-hover:opacity-50 hover:ease-in-out duration-150
                                cursor-pointer' alt='gokuvsgoku'/>
                                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-y-5
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-green-500 dark:text-white font-semibold'>
                                Xeno Goku vs Goku
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='mt-10'>                
                    <h2 className='dark:text-white text-md text-center font-semibold py-4'>My Services</h2>
                    <h4 className='dark:text-white text-xl text-center py-2'>What I can Offer</h4>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-2 flex-shrink-0'>
                        <div className='shadow-lg my-2 p-10 pb-0 bg-white rounded-lg dark:bg-blue-950 dark:text-white'>
                            <div className='flex justify-center text-5xl dark:text-yellow-300 text-green-500'><BsGlobe/></div>
                            <h3 className='text-lg font-semibold mt-5'>Web Development</h3>
                            <div className='flex py-5 my-2'>
                                <button className='flex items-center' onClick={() => setOpen(true)}>See More 
                                    <IoIosArrowDroprightCircle className='dark:text-yellow-300 text-green-500'/>
                                </button>
                                <Modal open={open} onClose={() => setOpen(false)}>
                                    <div className='text-center w-80 my-5'>
                                        <BsGlobe size={56} className='mx-auto text-green-500 dark:text-yellow-300'/>
                                        <div className='mx-auto my-4 w-80 text-justify'>
                                            <h3 className='text-lg font-black text-gray-800 my-5 text-center dark:text-white'>Web Development</h3>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Building websites with HTML, CSS, and JavaScript.</p>
                                            </div>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Utilizing frameworks such as Bootstrap and Tailwind.</p>
                                            </div>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Integration of website to Progressive Web App &#40;PWA&#41;</p>
                                            </div>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Less experience with Wordpress or Wix but can manage.</p>
                                            </div>
                                        </div>
                                    </div>  
                                </Modal>
                            </div>
                        </div>
                        <div className='shadow-lg my-2 p-10 pb-0 bg-white rounded-lg dark:bg-blue-950 dark:text-white'>
                            <div className='flex justify-center text-5xl dark:text-yellow-300 text-green-500 '><MdOutlineSupportAgent/></div>
                            <h3 className='text-lg font-semibold mt-5'>IT Support Service</h3>
                            <div className='flex py-5 my-2'>
                                <button className='flex items-center' onClick={() => setOpen2(true)}>See More <IoIosArrowDroprightCircle 
                                className='dark:text-yellow-300 text-green-500'/>
                                </button>
                                <Modal open={open2} onClose={() => setOpen2(false)}>
                                    <div className='text-center w-80 my-5'>
                                        <MdOutlineSupportAgent size={56} className='mx-auto text-green-500 dark:text-yellow-300'/>
                                        <div className='mx-auto my-4 w-80 text-justify'>
                                            <h3 className='text-lg font-black text-gray-800 my-5 text-center dark:text-white'>IT Support Service</h3>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Analyzing and identifying vulnerabilities of computer systems.</p>
                                            </div>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Proficiency in handling and resolving customer's inquiries.</p>
                                            </div>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Providing assistance in troubleshooting technological problems.</p>
                                            </div>
                                        </div>
                                    </div>  
                                </Modal>
                            </div>
                        </div>
                        <div className='shadow-lg my-2 p-10 pb-0 bg-white rounded-lg dark:bg-blue-950 dark:text-white'>
                            <div className='flex justify-center text-5xl dark:text-yellow-300 text-green-500'><MdDesignServices/></div>
                            <h3 className='text-lg font-semibold mt-5'>UI/UX Design</h3>
                            <div className='flex py-5 my-2'>
                                <button className='flex items-center' onClick={() => setOpen3(true)}>See More <IoIosArrowDroprightCircle 
                                className='dark:text-yellow-300 text-green-500'/>
                                </button>
                                <Modal open={open3} onClose={() => setOpen3(false)}>
                                    <div className='text-center w-80 my-5'>
                                        <MdDesignServices size={56} className='mx-auto text-green-500 dark:text-yellow-300'/>
                                        <div className='mx-auto my-4 w-80 text-justify'>
                                            <h3 className='text-lg font-black text-gray-800 my-5 text-center dark:text-white'>UI/UX Design</h3>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Proficiency in using Photoshop, Canva, or Figma.</p>
                                            </div>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Executing high quality design like landing pages, icons, logos, etc.</p>
                                            </div>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Delivering satisfying user experience and responsiveness.</p>
                                            </div>
                                        </div>
                                    </div>  
                                </Modal>
                            </div>
                        </div>
                        <div className='shadow-lg my-2 p-10 pb-0 bg-white rounded-lg dark:bg-blue-950 dark:text-white'>
                            <div className='flex justify-center text-5xl dark:text-yellow-300 text-green-500'><SiAdobephotoshop/></div>
                            <h3 className='text-lg font-semibold mt-5'>Pixel Animation</h3>
                            <div className='flex py-5 my-2'>
                                <button className='flex items-center' onClick={() => setOpen4(true)}>See More <IoIosArrowDroprightCircle 
                                className='dark:text-yellow-300 text-green-500'/>
                                </button>
                                <Modal open={open4} onClose={() => setOpen4(false)}>
                                    <div className='text-center w-80 my-5'>
                                        <SiAdobephotoshop size={56} className='mx-auto text-green-500 dark:text-yellow-300'/>
                                        <div className='mx-auto my-4 w-80 text-justify'>
                                            <h3 className='text-lg font-black text-gray-800 my-5 text-center dark:text-white'>Pixel Animation</h3>
                                            <div className='text-sm text-gray-500 mb-2 '>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Proficiency in using Photoshop and Adobe Animate.</p>
                                            </div>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Delivering high quality Storytelling 2D Sprite Animations.</p>
                                            </div>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                <p className='flex justify-center dark:text-white'>
                                                    <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                                    Creating storyboards, effects, and custom 2D Sprite Art.</p>
                                            </div>
                                        </div>
                                    </div>  
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='mt-10'>
                    <h2 className='dark:text-white text-2xl text-center font-semibold py-2'>Get in touch</h2>
                    <h4 className='dark:text-white text-md text-center my-5'>Let's talk.</h4>
                </div>
                <div className='flex flex-wrap justify-center pb-5'>
                    <div className='grid lg:grid-cols-3 lg:gap-3 sm:grid-cols-2 gap-2 flex-shrink-0'>
                        <div className='flex flex-shrink-0 text-4xl border-2 text-green-500 border-green-500 rounded-full p-4 
                                        dark:border-yellow-300 dark:text-yellow-300'>
                            <IoMdMail/>
                            <div className='leading-none px-2 mt-2 text-sm text-black dark:text-white'>
                                <a href='https://mail.google.com/mail/u/2/' target='blank'>
                                    <p>guetaryan@gmail.com</p>
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-shrink-0 text-4xl border-2 text-green-500 border-green-500 rounded-full p-4 
                                        dark:border-yellow-300 dark:text-yellow-300'>
                            <FaViber/>
                            <div className='leading-none px-2 mt-2 text-sm text-black dark:text-white'>
                                <p>+639214059462</p>
                            </div>
                        </div>
                        <div className='flex flex-shrink-0 text-4xl border-2 text-green-500 border-green-500 rounded-full p-4
                                        dark:border-yellow-300 dark:text-yellow-300'>
                            <FaFacebookMessenger/>
                            <div className='leading-none px-2 mt-2 text-sm text-black dark:text-white'>
                                <a href='https://www.facebook.com/ryan.gueta.79' target='blank'>
                                    <p>ryan.gueta.79</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <ScrollBtn/>
        </div>
    );
};

export default Homepage;
