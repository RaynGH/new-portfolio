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
                <div className='container mx-auto p-6 grid grid-cols-2 gap-4'>
                    <div className='col-span-1 flex flex-col bg-white border-2 rounded-xl p-4'>
                        <h2 className='mb-2 font-bold text-2xl text-center py-5'> Front-End Development</h2>
                        {/* <div class="mb-4 flex flex-wrap">
                            <span class="mr-2">Link 1</span>
                            <span class="mr-2">Link 2</span>
                        </div> */}
                        <div className='flex items-center text-green-500 dark:text-white'>
                                  <BsFillPatchCheckFill/>
                                  <div className='px-1'>
                                      <p className='text-gray-800 leading-none text-sm dark:text-white md:text-xl'>HTML</p>   
                                  </div>
                            </div>
                      </div>
                      <div class="col-span-1 flex flex-col bg-white border-2 p-4">
                        <h2 class="mb-2 font-bold text-2xl">
                          Card Name
                        </h2>
                        <div class="mb-4 flex flex-wrap">
                            <span class="mr-2">Link 1</span>
                            <span class="mr-2">Link 2</span>
                        </div>
                        <p class="text-md text-justify">Some Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim lectus.</p>
                        <div class="flex flex-wrap mt-auto pt-3 text-xs">
                          <p class="mr-2 mb-2">Tag #1</p>
                          <p class="mr-2 mb-2">Tag #2</p>
                        </div>
                    </div>
                </div>
                {/* <div className='lg:flex gap-5 dark:text-white'>                   
                    <div className='dark:bg-blue-900 text-center shadow-xl lg:pb-10 rounded-xl lg:px-20 my-5
                                    pb-10 p-12 xs:px-28 sm:px-36 md:px-40'>
                        <h4 className='lg:p-10 lg:px-0 font-semibold md:text-xl'>Front-End Development</h4>
                        <div className='grid grid-cols-2 gap-3 my-5'>
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 leading-none text-sm dark:text-white md:text-xl'>HTML</p>   
                                </div>
                            </div>
                            
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 leading-none text-sm dark:text-white md:text-xl'>CSS</p>  
                                </div>
                            </div>
                            <div className='flex items-center lg:flex text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 leading-none text-sm dark:text-white md:text-xl'>JavaScript</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 py-1 text-sm dark:text-white md:text-xl'>Bootstrap</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 py-1 text-sm dark:text-white md:text-xl'>React</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 py-1 text-sm dark:text-white md:text-xl'>Tailwind</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dark:bg-blue-900 text-center shadow-xl p-12 my-5 lg:pb-10 rounded-xl xs:px-28 sm:px-36 md:px-40 lg:px-24'>
                        <h4 className='lg:p-10 lg:px-0 font-semibold md:text-xl'>Back-End Development</h4>
                            <div className='grid grid-cols-2 gap-3 my-5'>
                                <div className='flex items-center text-green-500 dark:text-white'>
                                    <BsFillPatchCheckFill/>
                                    <div className='px-1'>
                                        <p className='text-gray-800 text-sm dark:text-white md:text-xl'>MySQL</p>
                                    </div>
                                </div>
                                <div className='flex items-center text-green-500 dark:text-white'>
                                    <BsFillPatchCheckFill/>
                                    <div className='px-1'>
                                        <p className='text-gray-800 text-sm dark:text-white md:text-xl'>MongoDB</p>
                                    </div>
                                </div>
                                <div className='flex items-center text-green-500 dark:text-white'>
                                    <BsFillPatchCheckFill/>
                                    <div className='px-1'>
                                        <p className='text-gray-800 text-sm dark:text-white md:text-xl'>PHP</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='dark:bg-blue-900 text-center shadow-xl p-12 rounded-xl xs:px-28 sm:px-36 md:px-40 lg:px-12
                                    lg:py-5'>
                    <h4 className='lg:p-10 lg:px-0 font-semibold md:text-xl'>Graphic / Video Editing Tools</h4>
                        <div className='grid grid-cols-2 gap-3 my-5'>
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-2'>
                                    <p className='text-gray-800 text-sm dark:text-white md:text-xl'>Animate</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 text-sm dark:text-white md:text-xl'> Photoshop</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-2'>
                                    <p className='text-gray-800 text-sm dark:text-white md:text-xl'>AE</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-2'>
                                    <p className='text-gray-800 text-sm dark:text-white md:text-xl'>Figma</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-2'>
                                    <p className='text-gray-800 text-sm dark:text-white md:text-xl'>Canva</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500 dark:text-white'>
                                <BsFillPatchCheckFill/>
                                <div className='px-2'>
                                    <p className='text-gray-800 text-sm dark:text-white md:text-xl'>Vegas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
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
