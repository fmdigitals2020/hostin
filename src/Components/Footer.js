import React from 'react'
import { LogoFooter,Twitter,Linkedin,Facebook,IconOne,IconTwo,IconThree} from '../Imports/ImportImages'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="bg-tertiary xl:mt-24 lg:mt-20 mt-16">
    <div className="container mx-auto">
      <div className="footer-wrapper md:text-left text-center xl:pt-20 lg:pt-16 md:pt-14 pt-10 xl:pb-24 lg:pb-20 md:pb-16 pb-10 flex justify-between lg:flex-nowrap flex-wrap border-b border-[#EAECF0]">
        <div className="lg:w-[30%] w-full">
          <div className="logo-content">
            <Link to={"/"}>
              <img src={LogoFooter} className='lg:mx-0 mx-auto' alt="" />
            </Link>
            <p className="lg:pr-16 md:pr-12 pr-0 lg:text-base text-sm font-medium lg:leading-7 leading-normal lg:pt-8 md:pt-6 pt-4 text-[#E6E6E6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
          </div>
        </div>
        <div className="lg:w-[70%] w-full lg:mt-0 mt-6">
          <div className="footer-content flex lg:flex-nowrap flex-wrap">
            <div className="lg:w-1/4 md:w-1/3 sm:w-2/4 w-full">
              <div className="footer-box">
                <h4 className="text-base font-bold text-white">Service</h4>
                <ul className="footerlist lg:pt-6 pt-4">
                  <li className="lg:mb-6 mb-4"><Link to={`/webhosting`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Domain</Link></li>
                  <li className="lg:mb-6 mb-4"><Link to={`/webhosting`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Shared Hosting</Link></li>
                  <li className="lg:mb-6 mb-4"><Link to={`/webhosting`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Web Hosting</Link></li>
                  <li className="lg:mb-6 mb-4"><Link to={`/webhosting`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Private Hosting</Link></li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-2/4 w-full">
              <div className="footer-box">
                <h4 className="text-base font-bold text-white">Hosting</h4>
                <ul className="footerlist lg:pt-6 pt-4">
                  <li className="lg:mb-6 mb-4"><Link to={`/`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Game Server Hosting</Link></li>
                  <li className="lg:mb-6 mb-4"><Link to={`/`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Hosting Wordpress</Link></li>
                  <li className="lg:mb-6 mb-4"><Link to={`/`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Email Hosting</Link></li>
                  <li className="lg:mb-6 mb-4"><Link to={`/`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Hosting Unlimited</Link></li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-2/4 w-full">
              <div className="footer-box">
                <h4 className="text-base font-bold text-white">Company</h4>
                <ul className="footerlist lg:pt-6 pt-4">
                  <li className="lg:mb-6 mb-4"><Link to={`/about`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">About</Link></li>
                  <li className="lg:mb-6 mb-4"><Link to={`/`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Career</Link></li>
                  <li className="lg:mb-6 mb-4"><Link to={`/contact`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-2/4 w-full">
              <div className="footer-box">
                <h4 className="text-base font-bold text-white">Help</h4>
                <ul className="footerlist lg:pt-6 pt-4">
                  <li className="lg:mb-6 mb-4"><Link to={`/`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">FAQ</Link></li>
                  <li className="lg:mb-6 mb-4"><Link to={`/`} className="font-normal lg:text-base text-sm text-[#E6E6E6]">Help support</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom lg:py-7 py-5">
        <div className="flex justify-between items-center">
          <div className="meta">
            <p className="text-[#98A2B3] lg:text-base text-sm font-medium pb-0">© 2022 Hostim. Tous droits réservés.</p>
          </div>
          <div className="social-icons flex text-white">
            <Link to={`/`} className="inline-block lg:mr-6 mr-3">
              <img src={Facebook} alt="" />
            </Link>
            <Link to={`/`} className="inline-block lg:mr-6 mr-3">
              <img src={Twitter} alt="" />
            </Link>
            <Link to={`/`} className="inline-block lg:mr-6 mr-3">
              <img src={Linkedin} alt="" />
            </Link>
            <Link to={`/`} className="inline-block lg:mr-6 mr-3">
              <img src={IconOne} alt="" />
            </Link>
            <Link to={`/`} className="inline-block lg:mr-6 mr-3">
              <img src={IconTwo} alt="" />
            </Link>
            <Link to={`/`} className="inline-block lg:mr-6 mr-3">
              <img src={IconThree} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
