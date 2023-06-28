import React, { Component } from 'react'
import { AiOutlineSearch, AiOutlineReconciliation, AiTwotoneExperiment, AiOutlineArrowRight } from 'react-icons/ai'
import { GrFormNextLink, GrCopy } from "react-icons/gr";
import aboutusBg from "../assets/Biotechnology-1800x1100.jpg" 

class About extends Component {
    
    render() {
        return (
            <div className="w-full" id="About">
                <div className='w-full bg-white absolute'>
                    {/* <img className="w-full h-screen object-cover mix-blend-overlay" src={aboutusBg} alt="/" /> */}
                </div>
                
                <div className='max-width-[1240px] mx-auto text-white relative pt-8 font-montserrat'>
                    <div className='p-10'>
                        {/* <h2 className='pt-2 text-[1.1rem] md:text-[1.2rem] text-[#3961AB] font-bold uppercase text-center'>About Us</h2> */}
                        <h3 className='py-6 text-6xl font-bold text-black text-center'>We Make Things Easier For You</h3>

                        <hr />

                        <p  className='py-4 text-[1.2rem] md:text-2xl md:p-12 text-black text-left'>
                            <b>Progenome</b> is a website that allows consultation of genetic sequences of nutrients in proteins and peptides, 
                            in a more <b>accessible</b>, <b>effective</b> and <b>efficient</b> way for all professionals and students in the
                            area of ​​biotechnology.
                            <br /><br />
                            Our results are powered by NCBI, BRENDA and other databases that available on the web for free. We just get you
                            the information from different sources in one place.
                        </p>
                    </div>

                    <div className='text-black About__grid'>
                        <div className='bg-[#F3F3F3] rounded-xl shadow-xl my-3 About__card border lg:text-left text-center'>
                            <div className="p-8">
                                <AiOutlineSearch size="56" className="w-16 p-4 bg-[#44AF58] text-white rounded-lg mt-[-4rem]" />
                                <h3 className="font-bold text-2xl my-5">Search for Proteins</h3>

                                <hr className='w-10 border border-emerald-600 lg:m-0 m-auto'/>

                                <p className="bg-[#F3F3F3] text-[1.2rem] mt-5">Find everything you need</p>
                            </div>

                                <a href="/time" className="flex items-center font-bold text-[1.1rem] text-white lg:justify-start justify-center bg-[#2556A4] pl-8 py-4 hover:bg-[#3961AB] hover:text-slate-100 rounded-b-xl">
                                    Start Searching <AiOutlineArrowRight className="ml-2" />
                                </a>
                        </div>
                        <div className='bg-[#F3F3F3] rounded-xl shadow-xl my-3 About__card border lg:text-left text-center'>
                            <div className="p-8">
                                <AiOutlineReconciliation size="56" className='w-16 p-4 bg-[#44AF58] text-white rounded-lg mt-[-4rem]' />
                                <h3 className="font-bold text-2xl my-5">Compare your Data</h3>

                                <hr className='w-10 border border-emerald-600 lg:m-0 m-auto'/>

                                <p className="bg-[#F3F3F3] text-[1.2rem] mt-5">From different databases</p>
                            </div>

                                <a href="#" className="flex items-center font-bold text-[1.1rem] text-white lg:justify-start justify-center bg-[#2556A4] pl-8 py-4 hover:bg-[#3961AB] hover:text-slate-100 rounded-b-xl">
                                    Start Comparing <AiOutlineArrowRight className="ml-2" />
                                </a>
                                
                        </div>

                        <div className='bg-[#F3F3F3] rounded-xl shadow-xl my-3 About__card border lg:text-left text-center'>
                            <div className="p-8">
                                <AiTwotoneExperiment size="56" className='w-16 p-4 bg-[#44AF58] text-white rounded-lg mt-[-4rem]' />
                                <h3 className="font-bold text-2xl my-5">Use your Findings</h3>

                                <hr className='w-10 border border-emerald-600 lg:m-0 m-auto'/>

                                <p className="bg-[#F3F3F3] text-[1.2rem] mt-5">To get results</p>
                            </div>

                                <a href="#" className="flex items-center font-bold text-[1.1rem] text-white lg:justify-start justify-center bg-[#2556A4] pl-8 py-4 hover:bg-[#3961AB] hover:text-slate-100 rounded-b-xl">
                                    Start Working <AiOutlineArrowRight className="ml-2" />
                                </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default About