import React from 'react'
import tick from '../assets/images/tick.svg';
import cancel from '../assets/images/cancel.svg';
import { Link } from 'react-router-dom';

export default function Pricing(props) {
  return (
    <div>
          <div className='hosting-grid flex lg:flex-nowrap flex-wrap xl-mt-6 mt-4'>
            <div className='lg:w-1/3 md:w-2/4 w-full pr-4 lg:mb-0 mb-5'>
              <div className='hosting-box border border-[#4790CD] p-6 rounded-lg'>
                <div className="heading text-center">
                  <h4 className='text-dark font-bold xl:text-2xl lg:text-xl text-lg'> Web Débutant </h4>
                  <p className='text-[#808080] font-normal xl:text-base lg:text-sm text-xs xl:leading-8 lg:leading-6 leading-normal pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                </div>
                <div className='pricing text-center'>
                  <h3 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-[#2E2E2E] font-bold flex flex-col'>3,99€ <br /> <span className='text-[#2E2E2E] text-xs pt-3 inline-block'> par mois</span></h3>
                </div>
                <div className="actions xl:pt-9 pt-6">
                  <Link to="/" className='lg:py-3 py-2 block rounded-lg border border-dark text-center font-normal lg:text-sm text-xs hover:bg-black hover:text-white'>Select</Link>
                </div>
                <div className="items lg:mt-6 mt-4 lg:pl-6 md:pl-4 pl-2">
                  <ul>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> 1 site web inclus</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> 50 Go SSD NVMe</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Certificat Let’s Encrypt</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={cancel} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Free Domain</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={cancel} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Google Ads</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Managed WordPress</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Garantie de remboursement <br className='xl:block hidden'/> pendant 30 jours</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> 1 Email Account</li>
                  </ul>
                </div>
              </div>
            </div>
              <div className='lg:w-1/3 md:w-2/4 w-full pr-4 lg:mb-0 mb-5'>
              <div className='hosting-box bg-white p-6 rounded-lg pb-0'>
                <div className="heading text-center">
                  <h4 className='text-dark font-bold xl:text-2xl lg:text-xl text-lg'>Premium Hosting</h4>
                  <p className='text-[#808080] font-normal xl:text-base lg:text-sm text-xs xl:leading-8 lg:leading-6 leading-normal pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                </div>
                <div className='pricing text-center'>
                  <h3 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-[#2E2E2E] font-bold flex flex-col '>$6.99/mo<br /> <span className='text-[#2E2E2E] text-xs pt-6 inline-block'> </span></h3>
                </div>
                <div className="actions xl:pt-9 pt-6">
                  <Link to="/" className='lg:py-3 py-2 block rounded-lg border border-dark text-center font-normal lg:text-sm text-xs bg-dark text-white hover:bg-transparent hover:text-black'>Select</Link>
                </div>
                <div className="items lg:mt-6 mt-4 lg:pl-6 md:pl-4 pl-2">
                  <ul>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> 1 site web inclus</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> 50 Go SSD NVMe</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Certificat Let’s Encrypt</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={cancel} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Free Domain</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={cancel} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Google Ads</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3'  alt="" /> Managed WordPress</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Garantie de remboursement <br className='xl:block hidden'/> pendant 30 jours</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-16 md:pb-12 pb-8'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> 1 Email Account</li>
                  </ul>
                </div>
                <div className="actions">
                <Link to="/" className='lg:py-3 py-2 block rounded-lg border border-[#00AB6D] bg-[#00AB6D] text-white text-center font-normal lg:text-base text-sm hover:bg-transparent hover:border hover:text-[#00AB6D] -mx-6'>Recommended</Link>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 md:w-2/4 w-full pr-3 lg:mb-0 mb-5'>
              <div className='hosting-box border border-[#4790CD] p-6 rounded-lg'>
                <div className="heading text-center">
                  <h4 className='text-dark font-bold xl:text-2xl lg:text-xl text-lg'>Premium Hosting</h4>
                  <p className='text-[#808080] font-normal xl:text-base lg:text-sm text-xs xl:leading-8 lg:leading-6 leading-normal pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                </div>
                <div className='pricing text-center'>
                  <h3 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-[#2E2E2E] font-bold flex flex-col'>3,99€ <br /> <span className='text-[#2E2E2E] text-xs pt-3 inline-block'> par mois</span></h3>
                </div>
                <div className="actions xl:pt-9 pt-6">
                  <Link to="/" className='lg:py-3 py-2 block rounded-lg border  border-dark text-center font-normal lg:text-sm text-xs'>Select</Link>
                </div>
                <div className="items lg:mt-6 mt-4 lg:pl-6 md:pl-4 pl-2">
                  <ul>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> 1 site web inclus</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> 50 Go SSD NVMe</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Certificat Let’s Encrypt</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={cancel} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Free Domain</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={cancel} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Google Ads</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Managed WordPress</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> Garantie de remboursement <br className='xl:block hidden'/> pendant 30 jours</li>
                    <li className='flex lg:text-base text-sm text-[#808080] font-medium lg:pb-6 md:pb-4 pb-3'><img src={tick} className='xl:mr-6 lg:mr-4 mr-3' alt="" /> 1 Email Account</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
