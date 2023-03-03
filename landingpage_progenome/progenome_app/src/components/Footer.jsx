import React from 'react'
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import styles from '../style';

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
        <img src={logo} alt="progenome" className="w-[266px] h-[72px] object-contain"/>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make research easier and powerful</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-montserrat font-semibold text-[18px] leading-[27px] text-dimBlue">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-montserrat font-medium text-[14px] leading-[24px] text-dimGray hover:text-secondary cursor-pointer 
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

export default Footer
