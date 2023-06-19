import React, { Component } from 'react';
import Typed from 'react-typed'
import { AiOutlineSearch, AiOutlineFileSearch, AiTwotoneSnippets, AiTwotoneThunderbolt, AiTwotoneStar } from 'react-icons/ai'

import heroBg from '../assets/herobg.jpg';
//import heroBg from '../assets/Dato-poligono-abstracto.jpg'
import aboutusBg from "../assets/Biotechnology-1800x1100.jpg" 

class Hero extends Component {
    render() {
        const typedArray = ['Ligand Structures', 'Metabolic Pathways', 'Enzyme Structures', 'MeSH Ontology']

        return (
            <div className="w-full h-screen flex flex-col justify-between
                            bg-gradient-to-r from-[#2c5bc8] via-[#2ba290] to-[#2ba24d]"
                            id="Home">
                <div className='w-full h-full bg-gray-800/40 absolute'>
                    <img className="w-full h-full object-cover mix-blend-overlay" src={heroBg} alt="/" />
                </div>
                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto h-[70%] w-[100%] bg-[#] mt-12 items-center align-center relative'>
                    <div className='max-w-[1240px] mt-[-96px] w-screen h-screen mx-auto flex flex-col justify-center p-8 bg-[]'>
                        <p className='text-[1.2rem] uppercase font-bold text-[#F3F3F3] text-justify font-montserrat'>Find everything you need on</p>
                        <h1 className='py-3 text-5xl md:text-7xl font-montserrat font-light text-[#F3F3F3] text-justify uppercase '><b className='font-bold'>pro</b>genome</h1>
                        <p className='text-xl pt-2 pb-5 font-bold text-[#F3F3F3] text-justify font-montserrat'>
                            Search for <Typed strings={typedArray} typeSpeed={110} backSpeed={150} loop className="text-[#c6c6c6]"/>
                        </p>
    
                        <form className="flex items-center" action="/search">   
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <AiOutlineSearch size={22} className='text-[#ababab]'/>
                                </div>
                                <input type="text" id="simple-search" name="input"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                                    rounded-full focus:ring-blue-500 focus:border-blue-500 block
                                                    w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600
                                                    dark:placeholder-gray-400 dark:text-white text-base
                                                    dark:focus:ring-blue-500 dark:focus:border-blue-500 font-montserrat font-thin"
                                        placeholder="What are you looking for today?" required />
                            </div>
                            <button type="submit" className="p-3 pl-8 pr-8 ml-2 text-sm font-medium text-white rounded-full hover:bg-[#44AF58] focus:ring-4 focus:outline-none focus:ring-[#3961AB] dark:bg-white hover:border-white hover:text-white">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Hero

/*
<div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[10%] mx-1 md:left-1/2 transform md:-translate-x-1/2
                bg-transparent border border-transparent rounded-xl text-center shadow-xl'>
    <p className='text-white font-bold text-[1.2rem] pb-2'>Highlights</p>
    <div className='flex justify-between flex-wrap px-4'>
        <p className="flex px-4 py-1 text-gray-200 text-[1rem]"><AiOutlineFileSearch  className="mr-2" size="25" /> Search</p>
        <p className="flex px-4 py-1 text-gray-200 text-[1rem]"><AiTwotoneSnippets    className="mr-2" size="25" /> Compare</p>
        <p className="flex px-4 py-1 text-gray-200 text-[1rem]"><AiTwotoneThunderbolt className="mr-2" size="25" /> Fast</p>
        <p className="flex px-4 py-1 text-gray-200 text-[1rem]"><AiTwotoneStar        className="mr-2" size="25" /> Organize</p>
    </div>
</div>
*/