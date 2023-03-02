import React from 'react'
import styles from '../style';
import {discount, robot, dna} from '../assets';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>Hero
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row item-center items center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={dna} alt="dna" className="w-[32px] h-[32px]"/>
        <span className="text-dimBlue">The best</span>
        Tool for
        <span className="text-dimBlue">SCIENTISTS</span>
      </div>
    </div>
  </section>
) 

export default Hero