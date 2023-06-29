import React, { Component } from 'react';
import { logo } from '../assets/';
import { footerLinks } from "../constants";
import styles from '../style';

class Footer extends Component {
  render() {
      return (
        <section className={`${styles.flexCenter} pt-5 flex-col, bg-[#E4E8EB]`}>

          <div className={`md:flex-row flex-col w-full`}>

            <div className="flex-[1] flex flex-col justify-center items-center mr-10 my-10 ml-5">

              <img src={logo} alt="progenome" className="w-[266px] h-[72px] object-contain"/>
              <p className={`${styles.paragraph} mt-4 max-w-[310px] text-center mb-10`}>A new way to make research easier and powerful</p>

              <hr className='w-2/4 border border-zinc-400 lg:m-0 m-auto'/>
              
            </div>

            <div className="py-1 w-full grid lg:grid-cols-3 md:grid-cols-2 justify-center md:mt-0 mt-10 gap-6">
              

              {footerLinks.map((footerLink) => (

              <div key={footerLink.title} className={`px-5 flex flex-col ss:my-0 my-4 min-w-[150px] items-center`}>

                <h4 className="font-montserrat font-semibold text-[18px] leading-[27px] text-dimBlue mb-3">
                  {footerLink.title}
                </h4>

                <hr className='w-10 border border-emerald-600 lg:m-0 m-auto'/>

                <ul className="list-none mt-10">

                  {footerLink.links.map((link, index) => (
                    
                    <li key={link.name} className={`px-10 py-1 font-montserrat font-medium text-[14px] leading-[24px] text-dimGray hover:text-[#3961AB] cursor-pointer 
                    ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                    >
                      {link.name}
                    </li>

                  ))}

                </ul>

              </div>

                ))}
            </div>

            <div className='mt-16 bg-zinc-800 p-5'>

                <p className='text-3xl text-center text-white'>&copy;2023 Copyright: ProGenome</p>

            </div>

          </div>

        </section>
      )
  }
}
export default Footer