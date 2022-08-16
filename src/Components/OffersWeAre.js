import React from 'react'
import { ArrowRight } from '../Imports/ImportImages'
import { Link } from 'react-router-dom'

export default function OffersWeAre() {
  return (
    <section className='offers bg-[#FAFBFF] lg:pt-16 pt-8 lg:pb-32 pb-14'>
           <div className="container mx-auto">
             <div className="offers-heading xl:pb-20 md:pb-16 pb-10 text-center">
               <h2 className='font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-dark'>Les offres que nous proposons</h2>
             </div>
             <div className="offers-grid flex md:flex-nowrap flex-wrap justify-between">
               <div className='md:w-1/3 w-full bg-white xl:mr-8 mr-4 rounded-lg hover:border border-primary'>
                 <div className="offer-box">
   
                 </div>
               </div>
               <div className='md:w-1/3 md:mb-0 mb-5 w-full bg-white xl:mr-8 mr-4 px-4 lg:py-14 md:py-10 py-6 rounded-lg border-2 border-transparent hover:border-primary md:text-left text-center'>
                 <div className="offer-box">
                   <div className="title">
                     <h3 className='xl:text-2xl lg:text-xl text-lg font-medium text-primary pb-3'>Game Server Hosting</h3>
                     <h4 className='text-dark lg:text-base text-sm font-semibold'>Starting at $2.99/mo</h4>
                   </div>
                   <div className="info">
                     <p className='font-medium lg:text-base text-sm opacity-60 lg:pt-10 pt-6 lg:leading-6 leading-normal pb-10'>Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br className='lg:block hidden'/> consequat duis enim velit Exercitation <br className='lg:block hidden'/> veniam consequat sunt nostrud amet.</p>
                     <Link to="/" className='lg:text-base text-sm text-dark font-medium flex md:justify-start justify-center'>View Plan <img src={ArrowRight} className='ml-2' alt="" /></Link>
                   </div>
                 </div>
               </div>
               <div className='md:w-1/3 md:mb-0 mb-5 w-full bg-white xl:mr-8 mr-4 px-4 lg:py-14 md:py-10 py-6 rounded-lg border-2 border-transparent hover:border-primary md:text-left text-center'>
                 <div className="offer-box">
                   <div className="title">
                     <h3 className='xl:text-2xl lg:text-xl text-lg font-medium text-primary pb-3'>Dedicated Hosting</h3>
                     <h4 className='text-dark lg:text-base text-sm font-semibold'>Starting at $2.99/mo</h4>
                   </div>
                   <div className="info">
                     <p className='font-medium lg:text-base text-sm opacity-60 lg:pt-10 pt-6 lg:leading-6 leading-normal pb-10'>Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br className='lg:block hidden'/> consequat duis enim velit Exercitation <br className='lg:block hidden'/> veniam consequat sunt nostrud amet.</p>
                     <Link to="/" className='lg:text-base text-sm text-dark font-medium flex md:justify-start justify-center'>View Plan <img src={ArrowRight} className='ml-2' alt="" /></Link>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
  )
}
