import React from 'react';
import Typed from 'react-typed'
import { AiOutlineSearch, AiOutlineFileSearch, AiTwotoneSnippets, AiTwotoneThunderbolt, AiTwotoneStar } from 'react-icons/ai'


import imgHero from '../images/hero-image.png';
import heroBg from '../images/herobg.jpg';
import dnaGif from '../images/06.webp';

const Hero = () => {
    const typedArray = ['Ligand Structures', 'Metabolic Pathways', 'Enzyme Structures', 'MeSH Ontology']
    return (
        <div className="w-full h-full flex flex-col justify-between
                        bg-gradient-to-r from-[#2c5bc8] via-[#2ba290] to-[#2ba24d]
                        bg-[image:var('../images/herobg.jpg')]" id="Home">
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto h-[70%] w-[100%] bg-[#] mt-12 items-center content-center align-center '>
                <div className='max-w-[1240px] mt-[-96px] w-screen h-screen mx-auto flex flex-col justify-center p-8 bg-[]'>
                    <p className='text-1xl uppercase font-bold text-[#F3F3F3]'>Find everything you need on</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold text-[#F3F3F3]'>Progenome</h1>
                    <p className='text-xl pt-2 pb-5 font-bold text-[#F3F3F3]'>
                        Search for <Typed strings={typedArray} typeSpeed={110} backSpeed={150} loop className="text-[#c6c6c6]"/>
                    </p>

                    <form class="flex items-center">   
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <AiOutlineSearch size={22} className='text-[#ababab]'/>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                                                               rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                                                               w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600
                                                                               dark:placeholder-gray-400 dark:text-white text-base
                                                                               dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                            placeholder="What are you looking for today?" required />
                        </div>
                        <button type="submit" className="p-3 pl-8 pr-8 ml-2 text-sm font-medium text-white text-base
                                                        bg-blue-700 rounded-lg border border-blue-700 hover:bg-transparent
                                                        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white 
                                                        hover:border-white hover:text-white dark:hover:bg-white dark:focus:white-700">
                            Search
                        </button>
                    </form>
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[10%] mx-1 md:left-1/2 transform md:-translate-x-1/2
                              bg-transparent border border-transparent rounded-xl text-center shadow-xl'>
                    <p className='text-white font-bold text-[1.2rem] pb-2'>Highlights</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p class="flex px-4 py-1 text-gray-300 text-[1rem]"><AiOutlineFileSearch className="mr-2" size="25" /> Find Proteins</p>
                        <p class="flex px-4 py-1 text-gray-300 text-[1rem]"><AiTwotoneSnippets    className="mr-2" size="25" /> Compare Data</p>
                        <p class="flex px-4 py-1 text-gray-300 text-[1rem]"><AiTwotoneThunderbolt className="mr-2" size="25" /> Save Time</p>
                        <p class="flex px-4 py-1 text-gray-300 text-[1rem]"><AiTwotoneStar        className="mr-2" size="25" /> Save Finds</p>
                        <p></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero