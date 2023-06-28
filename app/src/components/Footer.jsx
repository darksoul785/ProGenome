import React, { Component } from 'react';
import { logo } from '../assets/';
import { footerLinks } from "../constants";
import styles from '../style';

class Footer extends Component {
  render() {
      return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col, bg-[#E4E8EB]`}>
        <div className={`md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-[1] flex flex-col justify-center items-center mr-10 my-5">
          <img src={logo} alt="progenome" className="w-[266px] h-[72px] object-contain"/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px] text-center`}>A new way to make research easier and powerful</p>
          </div>

          <div className="py-1 flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className={`px-5 flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className="font-montserrat font-semibold text-[18px] leading-[27px] text-dimBlue">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
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
        </div>
        </section>
      )
  }
}
export default Footer