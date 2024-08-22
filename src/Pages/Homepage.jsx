import React from 'react';
import { FaMoon } from "react-icons/fa";
import Image from '../Images/CroppedPic.png';
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";


function Homepage() {
    return (
        <main className='bg-white px-10'>
            {/* Navbar */}
            <section className="min-h-screen">
                <nav className='py-10 mb-12 flex justify-between'>
                    <h1 className='text-lg'>RYAN</h1>
                    <ul className='flex items-center'>
                        <li>
                            <FaMoon className='cursor-pointer text-lg'/>
                        </li>
                    </ul>
                </nav>
                {/* Intro Section */}
                <div className='text-center p-10'>
                    <h2 className='text-5xl py-2 text-blue-600 font-medium'>John Averian Oro</h2>
                    <h3 className='text-2xl py-2'>Developer / Pixel Animator.</h3>
                    <p className='text-md py-5 leading-8 text-gray-800'>
                        Aiming to provide services for programming and motion graphics design.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
                    hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded-full
                    hover:ease-in duration-150'
                    >Download CV</button>
                </div>
                <div className='text-5xl flex justify-center gap-10 py-10 text-gray-600'>
                    <FaLinkedin/>
                    <FaYoutube/>
                </div>
                <div className='relative mx-auto w-80 h-80 mt-10'>
                    <img src={Image} className='object-cover' alt='profile'/>
                </div>
            </section>
            {/* About me section */}
            <section>
                <div className='mt-10'>
                    <h3 className="text-3xl py-1">About me</h3>
                    <p className=' text-md py-3 leading-8 text-gray-800'>
                    Throughout my academic journey, I discovered the enjoyable yet 
                    intricate world of website development and pixel animation. Despite its complexities, 
                    I find the process incredibly fascinating!
                    </p>
                </div>
                {/* Skills section */}
                <div className='my-5'>
                    <h3 className="text-3xl py-1">My Skills</h3>
                    <div className='text-center shadow-xl p-10 rounded-xl my-5'>
                        <h4 className='py-10 font-semibold'>Front-End Development</h4>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 leading-none text-sm'>HTML</p>   
                                    {/* <span className='text-[11px] text-gray-800 font-semibold align-top text-pretty'>Advance</span>   */}
                                </div>
                            </div>
                            
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 leading-none text-sm'>CSS</p>
                                    {/* <span className='text-[11px] text-gray-800 font-semibold align-top text-pretty'>Advance</span>   */}
                                </div>
                            </div>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 leading-none text-sm'>JavaScript</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 py-1 text-sm'>Bootstrap</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 py-1 text-sm'>React</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 py-1 text-sm'>Tailwind</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Backend-Skills */}
                    <div className='text-center shadow-xl p-10 rounded-xl my-5'>
                        <h4 className='py-10 font-semibold'>Back-End Development</h4>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='flex items-center text-green-500'>
                                    <BsFillPatchCheckFill/>
                                    <div className='px-1'>
                                        <p className='text-gray-800 text-sm'>MySQL</p>
                                    </div>
                                </div>
                                <div className='flex items-center text-green-500'>
                                    <BsFillPatchCheckFill/>
                                    <div className='px-1'>
                                        <p className='text-gray-800 text-sm'>MongoDB</p>
                                    </div>
                                </div>
                                <div className='flex items-center text-green-500'>
                                    <BsFillPatchCheckFill/>
                                    <div className='px-1'>
                                        <p className='text-gray-800 text-sm'>PHP</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                      {/* Graphic Tools*/}
                    <div className='text-center shadow-xl p-10 rounded-xl my-5'>
                        <h4 className='py-10 font-semibold'>Graphic / Video Editing Tools</h4>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-2'>
                                    <p className='text-gray-800 text-sm'>Adobe Animate</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 text-sm'>Adobe Photoshop</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-1'>
                                    <p className='text-gray-800 text-sm'>After Effects</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-2'>
                                    <p className='text-gray-800 text-sm'>Figma</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-2'>
                                    <p className='text-gray-800 text-sm'>Canva</p>
                                </div>
                            </div>
                            <div className='flex items-center text-green-500'>
                                <BsFillPatchCheckFill/>
                                <div className='px-2'>
                                    <p className='text-gray-800 text-sm'>Sony Vegas</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='my-10'>
                    <h3 className="text-2xl py-1">My Portfolio / Previous Projects</h3>
                </div>
            </section>
        </main>
    );
};

export default Homepage;
