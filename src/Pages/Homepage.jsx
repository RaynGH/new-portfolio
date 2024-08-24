import React from 'react';
import { FaMoon } from "react-icons/fa";
import Image from '../Images/CroppedPic.png';
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import OrdersImg from '../Images/Orders.png';
import { useState } from 'react';
import PepsimanVsKefla from '../Images/PepsimanVsKefla.jpg';
import GohanvsBlack from '../Images/GohanvsGokuBlack.jpg';
import FCvsB from '../Images/FriezaCellVsBroly.jpg';
import GokuvsBardock from '../Images/GokuVsBardock.jpg';
import GvV from '../Images/GogetavsVegito.jpg';

function Homepage() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
        <main className='bg-gray-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:ease-in-out duration-150'>
            {/* Navbar */}
            <section className="min-h-screen">
                <nav className='py-10 mb-12 flex justify-between '>
                    <h1 className='text-lg dark:text-white font-semibold'>RYAN</h1>
                    <ul className='flex items-center'>
                        <li>
                            <FaMoon onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-lg dark:text-white
                             dark:hover:text-yellow-300'/>
                        </li>
                    </ul>
                </nav>
                {/* Intro Section */}
                {/* text-5xl py-2 text-blue-600 font-medium md:text-6xl dark:text-yellow-300 */}
                <div className='text-center p-10'>
                    <center><h2 className='text-4xl relative inline-block w-full max-w-md text-blue-600 font-medium md:text-6xl before:absolute before:inset-0 
                                    before:animate-typewriter 
                                  before:bg-white dark:before:bg-gray-900 after:absolute after:inset-1 after:w-[0.200em]
                                    after:animate-caret after:bg-blue-600 dark:after:bg-yellow-300 dark:text-yellow-300'>John Averian Oro</h2></center>
                    <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer / Pixel Animator.</h3>
                    <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
                        I'm an aspiring developer and aims to provide services for programming and motion graphics design.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
                    hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded-full
                    hover:ease-in duration-150 dark:text-yellow-300 dark:border-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white'
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
                    <h3 className="text-3xl py-1 dark:text-white font-semibold">About me</h3>
                    <p className=' text-md py-3 leading-8 text-gray-800 dark:text-white'>
                    Throughout my academic journey, I discovered the enjoyable yet 
                    intricate world of website development and pixel animation. Despite its complexities, 
                    I find the process incredibly fascinating!
                    </p>
                </div>
                {/* Skills section */}
                <h3 className="text-3xl py-5 dark:text-white font-semibold">My Skills</h3>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 dark:bg-blue-950'>
                        {/* Heading */}
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white'>Front-End Development</h4>
                        </div>

                        <div className='grid grid-cols-2 gap-2 px-16 pb-10'>
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
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 dark:bg-blue-950'>
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white'>Back-End Development</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-2 px-16 pb-10'>
                            <div className='flex flex-shrink-0 text-green-500 dark:text-yellow-300'>
                                <BsFillPatchCheckFill/>
                                <div className='leading-none'>
                                    <p className='dark:text-white'>MySQL</p>
                                    <span className='text-[11px] leading-none text-green-500 font-semibold dark:text-white'>Advance</span>
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
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 dark:bg-blue-950'>
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white'>Graphic / Video Editing Tools</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-2 px-16 pb-10'>
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
                    <div className='w-96 rounded-lg bg-white shadow-lg mb-5 sm:mx-5 dark:bg-blue-950'>
                        <div className='h-50'>
                            <h4 className='font-semibold text-center py-5 dark:text-white'>Office Tools</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-2 px-16 pb-10'>
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
                <h3 className="text-3xl my-5 dark:text-white font-semibold">My Portfolio  / Previous works</h3>
                <div className='flex flex-wrap justify-center'>
                    {/* <div className='w-96 rounded-lg bg-white py-5 shadow-lg mb-5 sm:mx-5 dark:bg-blue-950'>
                        <div className=''>
                            <img src={OrdersImg} className='object-cover -my-5 rounded-t-lg' alt='orders'/>
                            <p className='my-10 font-semibold dark:text-white text-center'>Pharma-Mediko: Customer Side</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
                            hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded-full
                            hover:ease-in duration-150 dark:text-yellow-300 dark:border-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white'
                            >Details</button>
                        </div>
                    </div> */}
                    <div className='lg:grid lg:grid-cols-3 lg:gap-4'>
                        <div className='my-2 relative group shadow-xl'>
                            <a href='https://www.youtube.com/watch?v=HpWTzJZcoYg' target='blank'>
                                <img src={PepsimanVsKefla} 
                                className='object-cover rounded-xl group-hover:opacity-30 hover:ease-in-out duration-150
                                cursor-pointer' alt='sprite1'/>
                                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-y-5
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-blue-800 font-semibold '>
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
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-blue-800 font-semibold'>
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
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-blue-800 font-semibold'>
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
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-blue-800 font-semibold'>
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
                                inset-x-0 bottom-0 flex justify-center items-center text-lg text-blue-800 font-semibold'>
                                Gogeta vs Vegito
                                </div>
                             </a>
                        </div>
                        <div className='my-2 shadow-xl'>
                            <img src={OrdersImg} className='object-cover rounded-xl hover:opacity-50 hover:ease-in-out duration-150
                                                            cursor-pointer'
                             alt='orders'/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </div>
    );
};

export default Homepage;
