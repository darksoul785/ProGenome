import React from 'react'
import styles from '../style';
import {discount, robot, dna} from '../assets';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} Hero`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row item-center items center py-[6px] px-4 bg-discount-gradient rounded-[20px] mb-2">
        <img src={dna} alt="dna" className="w-[32px] h-[32px]"/>
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-dimBlue">The best</span>
            {" "} tool for {" "}
          <span className="text-dimBlue">scientists</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-montserrat font-semibold ss:text-[72px] text-[52px] text-dimBlue ss:leading[100px leading-[75px]">
          The next <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">Generation</span> {" "}
          <br/>research method.
        </h1>
      </div>
        
      <h1 className="font-montserrat font-semibold ss:text-[68px] text-[52px] text-dimBlue ss:leading[100px leading-[75px] w-full">
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>ProGenome is a Web Finder and clustering app where you can easily search information about proteins, enzymes and its characteristics. All this info comes from official government and different scientific 
          databases so you can compare and obtain results in less time.</p>
      </h1>
    </div>
  </section>
) 

export default Hero