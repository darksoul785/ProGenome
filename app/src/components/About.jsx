import React, { Component } from 'react'
import { AiOutlineSearch, AiOutlineReconciliation, AiTwotoneExperiment, AiOutlineArrowRight } from 'react-icons/ai'
import { GrFormNextLink, GrCopy } from "react-icons/gr";
import aboutusBg from "../assets/Biotechnology-1800x1100.jpg" 

class About extends Component {
    
    render() {
        return (
            <div className="w-full h-screen" id="About">
                <div className='w-full h-screen bg-white absolute'>
                    {/* <img className="w-full h-screen object-cover mix-blend-overlay" src={aboutusBg} alt="/" /> */}
                </div>
                
                <div className='max-width-[1240px] mx-auto text-white relative pt-8 font-montserrat'>
                    <div className='p-10'>
                        <h2 className='pt-2 text-[1.1rem] md:text-[1.2rem] text-[#3961AB] font-bold uppercase text-center'>About Us</h2>
                        <h3 className='py-6 text-3xl md:text-5xl font-bold text-black text-center'>We Make Things Easier For You</h3>
                        <p  className='py-4 text-[rem] md:text-2xl md:p-12 text-black text-center'>
                            <b>Progenome</b> is a website that allows consultation of genetic sequences of nutrients in proteins and peptides, 
                            in a more <b>accessible</b>, <b>effective</b> and <b>efficient</b> way for all professionals and students in the
                            area of ​​biotechnology.
                            <br /><br />
                            Our results are powered by NCBI, BRENDA and other databases that available on the web for free. We just get you
                            the information from different sources in one place.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-1 sm:pt-1 text-black'>
                        <div className='bg-[#F3F3F3] rounded-xl shadow-xl'>
                            <div className="p-8">
                                <AiOutlineSearch size="56" className="w-16 p-4 bg-[#44AF58] text-white rounded-lg mt-[-4rem]" />
                                <h3 className="font-bold text-2xl my-4">Search for Proteins</h3>
                                <p className="bg-[#F3F3F3] text-[1.2rem]">Find everything you need</p>
                            </div>
                            <div className="bg-[#F3F3F3] pl-8 py-4 hover:bg-[#3961AB] hover:text-slate-100 rounded-b-xl">
                                <a href="/time" className="flex items-center font-bold text-[1.1rem]">
                                    Start Searching <AiOutlineArrowRight className="ml-2" />
                                </a>
                            </div>
                        </div>
                        <div className='bg-[#F3F3F3] rounded-xl shadow-xl'>
                            <div className="p-8">
                                <AiOutlineReconciliation size="56" className='w-16 p-4 bg-[#44AF58] text-white rounded-lg mt-[-4rem]' />
                                <h3 className="font-bold text-2xl my-4">Compare your Data</h3>
                                <p className="bg-[#F3F3F3] text-[1.2rem]">From different databases</p>
                            </div>
                            <div className="bg-[#F3F3F3] pl-8 py-4 hover:bg-[#3961AB] hover:text-slate-100 rounded-b-xl">
                                <a href="" className="flex items-center font-bold text-[1.1rem] ">
                                    Start Comparing <AiOutlineArrowRight className="ml-2" />
                                </a>
                            </div>
                        </div>
                        <div className='bg-[#F3F3F3] rounded-xl shadow-xl'>
                            <div className="p-8">
                                <AiTwotoneExperiment size="56" className='w-16 p-4 bg-[#44AF58] text-white rounded-lg mt-[-4rem]' />
                                <h3 className="font-bold text-2xl my-4">Use your Findings</h3>
                                <p className="bg-[#F3F3F3] text-[1.2rem]">To get results</p>
                            </div>
                            <div className="bg-[#F3F3F3] pl-8 py-4 hover:bg-[#3961AB] hover:text-slate-100 rounded-b-xl">
                                <a href="" className="flex items-center font-bold text-[1.1rem]">
                                    Start Working <AiOutlineArrowRight className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default About