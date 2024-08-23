import React from 'react';
import { FaMoon } from "react-icons/fa";
import Image from '../Images/CroppedPic.png';
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import HomePageImg from '../Images/Homepage 1.png';
import CartImg from '../Images/Cart.png';
import OrdersImg from '../Images/Orders.png';
import { useState } from 'react';

function Homepage() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:ease-in-out duration-150'>
            {/* Navbar */}
            <section className="min-h-screen">
                <nav className='py-10 mb-12 flex justify-between'>
                    <h1 className='text-lg dark:text-white'>RYAN</h1>
                    <ul className='flex items-center'>
                        <li>
                            <FaMoon onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-lg dark:text-white
                             dark:hover:text-yellow-300'/>
                        </li>
                    </ul>
                </nav>
                {/* Intro Section */}
                <div className='text-center p-10'>
                    <h2 className='text-5xl py-2 text-blue-600 font-medium md:text-6xl dark:text-white'>John Averian Oro</h2>
                    <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer / Pixel Animator.</h3>
                    <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
                        Aiming to provide services for programming and motion graphics design.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
                    hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded-full
                    hover:ease-in duration-150 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
                    >Download CV</button>
                </div>
                <div className='text-5xl flex justify-center gap-10 py-10 text-gray-600'>
                    <FaLinkedin className='dark:text-white'/>
                    <FaYoutube  className='dark:text-white'/>
                    <FaGithub   className='dark:text-white'/>
                </div>
                <div className='relative mx-auto w-80 h-80 mt-10 md:h-96 md:w-96'>
                    <img src={Image} className='object-cover' alt='profile'/>
                </div>
            </section>
            {/* About me section */}
            <section>
                <div className='mt-10'>
                    <h3 className="text-3xl py-1 dark:text-white">About me</h3>
                    <p className=' text-md py-3 leading-8 text-gray-800 dark:text-white'>
                    Throughout my academic journey, I discovered the enjoyable yet 
                    intricate world of website development and pixel animation. Despite its complexities, 
                    I find the process incredibly fascinating!
                    </p>
                </div>
                {/* Skills section */}
                <h3 className="text-3xl py-5 dark:text-white">My Skills</h3>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 dark:bg-blue-950'>
                        {/* Heading */}
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white'>Front-End Development</h4>
                        </div>

                        <div className='grid grid-cols-2 gap-2 px-16 pb-10'>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>HTML</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>CSS</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>JavaScript</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Bootstrap</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>React</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Tailwind</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 dark:bg-blue-950'>
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white'>Back-End Development</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-2 px-16 pb-10'>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>MySQL</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>MongoDB</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Basic</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>PHP</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Basic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 dark:bg-blue-950'>
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white'>Graphic / Video Editing Tools</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-2 px-16 pb-10'>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Animate</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>After Effects</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Figma</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Canva</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Photoshop</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Sony Vegas</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 dark:bg-blue-950'>
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white'>Office Tools</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-2 px-16 pb-10'>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Word</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Excel</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Powerpoint</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
                                </div>
                            </div>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p>Outlook</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {/* Portfolio */}
                <div className='my-10'>
                    <h3 className="text-2xl py-1 dark:text-white">My Portfolio / Previous Projects</h3>
                        <div className='text-center shadow-xl p-10 rounded-xl my-2'>
                            <div className='py-2'>
                                <img src={HomePageImg} className='object-cover my-2' alt='home'/>
                                <img src={CartImg} className='object-cover my-2' alt='cart'/>
                                <img src={OrdersImg} className='object-cover' alt='orders'/>
                                <p className='my-3 font-semibold dark:text-white'>Pharma-Mediko: Customer Side</p>
                                <div className='text-justify dark:text-white'>
                                  <p>Pharma-Mediko is a Web Based Ordering System and Point of Sale with Progressive Web App for 
                                    Corumed Pharmacy.  </p>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </main>
        </div>
    );
};

export default Homepage;
