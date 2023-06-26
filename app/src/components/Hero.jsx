import React, { Component } from 'react';
import Typed from 'react-typed'
import { AiOutlineSearch, AiOutlineFileSearch, AiTwotoneSnippets, AiTwotoneThunderbolt, AiTwotoneStar } from 'react-icons/ai'

import heroBg from '../assets/herobg.jpg';
//import heroBg from '../assets/Dato-poligono-abstracto.jpg'
import aboutusBg from "../assets/Biotechnology-1800x1100.jpg" 
import About from './About';
import Prices from './Prices';
import Footer from './Footer';

class Hero extends Component {
    render() {
        const typedArray = ['Ligand Structures', 'Metabolic Pathways', 'Enzyme Structures', 'MeSH Ontology']

        return (
            <>
            <div className="w-full h-screen flex flex-col justify-between
                            bg-gradient-to-r from-[#2c5bc8] via-[#2ba290] to-[#2ba24d]"
                            id="Home">
                <div className='w-full h-full bg-gray-800/40 absolute'>
                    <img className="w-full h-full object-cover mix-blend-overlay Home__image" src={heroBg} alt="Imagen de fondo" />
                </div>
                <div className='max-w-[1240px] m-auto w-4/5 mt-20 items-center align-center relative'>
                    <div className='max-w-[1240px] mt-[-96px] h-screen mx-auto flex flex-col justify-center p-8 bg-[]'>
                        <p className='text-[1.2rem] uppercase font-bold text-[#F3F3F3] text-justify font-montserrat'>Find everything you need on</p>

                        <div className='flex items-center flex-wrap my-5'>

                            <span className='py-3 text-5xl text-7xl font-montserrat font-bold text-[#F3F3F3] text-justify uppercase' style={{color: "#44AF58"}}>pro</span><h1 className='py-3 text-5xl text-7xl font-montserrat font-light text-[#F3F3F3] text-justify uppercase m-0'>genome</h1>

                        </div>

                        <p className='text-xl pt-2 pb-5 font-bold text-[#F3F3F3] text-justify font-montserrat'>
                            Search for <Typed strings={typedArray} typeSpeed={110} backSpeed={150} loop className="text-[#c6c6c6]"/>
                        </p>
    
                        <form className="flex items-center md:flex-row flex-col" action="/search">   
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <AiOutlineSearch size={22} className='text-[#ababab]'/>
                                </div>
                                <input type="text" id="simple-search" name="input"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                                    rounded-full focus:ring-blue-500 focus:border-blue-500 block
                                                    w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600
                                                    dark:placeholder-gray-400 dark:text-white text-base
                                                    dark:focus:ring-blue-500 dark:focus:border-blue-500 font-montserrat font-thin text-xl"
                                        placeholder="What are you looking for today?" required />
                            </div>
                            <button type="submit" className="p-3 pl-8 pr-8 md:ml-2 text-sm text-white rounded-full focus:ring-4 
                                                             focus:outline-none focus:ring-[#3961AB] hover:border-white hover:text-white md:mt-0 mt-5 ml-0 
                                                             md:w-fit w-full bg-[#2556A4] hover:bg-[#326CC9] border text-xl
                                                             ">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <About/>

            <Prices/>

            <Footer/>

            </>
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