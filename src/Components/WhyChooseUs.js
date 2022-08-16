import React from 'react'
import { pricing } from '../Imports/ImportImages'

export default function WhyChooseUs(props) {
  return (
    <section className={`choose-us ${props.padbig ? 'pt-14' : 'pt-6'} xl:pb-14 lg:pb-12 pb-8 ${props.bgColor ? 'bg-[#FAFBFF]' : 'bg-white'}`}>
    <div className="container mx-auto text-center">
      <div className="heading">
        <h2 className='font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-dark pb-2.5'>{props.ChooseText ? 'Included With All Packages' : 'Why Choose us'} </h2>
        {props.desc ? <p className='lg:text-base text-sm text-[#5F5F5F] font-medium pt-2.5 pb-12'>{props.desc}</p> : null }
        
      </div>
      <div className="chooseus-grid flex flex-wrap border-[0.5px] border-[#DDDDDD]">
        <div className="lg:w-1/3 sm:w-2/4 w-full choose-box lg:py-11 py-6 md:px-12 sm:px-10 px-4 border-b-[0.5px] sm:border-r-[0.5px] border-r-0 border-[#DDDDDD]">
          <div className="picture w-14 h-14 rounded-full bg-[#e8f3ff] mx-auto flex justify-center items-center">
            <img src={pricing} alt="" />
          </div>
          <div className="meta">
            <h4 className='font-medium xl:text-2xl lg:text-xl text-lg text-dark pt-4'> {props.box1Title}</h4>
            <p className='text-[#686868] opacity-70 text-xs pt-3.5 leading-5 w-60 mx-auto'>Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.</p>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-2/4 w-full choose-box lg:py-11 py-6 md:px-12 sm:px-10 px-4 border-b-[0.5px] lg:border-r-[0.5px] border-r-0 border-[#DDDDDD]">
          <div className="picture w-14 h-14 rounded-full bg-[#e8f3ff] mx-auto flex justify-center items-center">
            <img src={pricing} alt="" />
          </div>
          <div className="meta">
            <h4 className='font-medium xl:text-2xl lg:text-xl text-lg text-dark pt-4'>{props.box2Title}</h4>
            <p className='text-[#686868] opacity-70 text-xs pt-3.5 leading-5 w-60 mx-auto'>Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.</p>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-2/4 w-full choose-box lg:py-11 py-6 md:px-12 sm:px-10 px-4 border-b-[0.5px] lg:border-r-0 sm:border-r-[0.5px] border-r-0 border-[#DDDDDD]">
          <div className="picture w-14 h-14 rounded-full bg-[#e8f3ff] mx-auto flex justify-center items-center">
            <img src={pricing} alt="" />
          </div>
          <div className="meta">
            <h4 className='font-medium xl:text-2xl lg:text-xl text-lg text-dark pt-4'>{props.box4Title}</h4>
            <p className='text-[#686868] opacity-70 text-xs pt-3.5 leading-5 w-60 mx-auto'>Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.</p>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-2/4 w-full choose-box lg:py-11 py-6 md:px-12 sm:px-10 px-4 border-b-[0.5px] lg:border-r-[0.5px] md:border-r-0 border-r-0 border-[#DDDDDD]">
          <div className="picture w-14 h-14 rounded-full bg-[#e8f3ff] mx-auto flex justify-center items-center">
            <img src={pricing} alt="" />
          </div>
          <div className="meta">
            <h4 className='font-medium xl:text-2xl lg:text-xl text-lg text-dark pt-4'>{props.box5Title }</h4>
            <p className='text-[#686868] opacity-70 text-xs pt-3.5 leading-5 w-60 mx-auto'>Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.</p>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-2/4 w-full choose-box lg:py-11 py-6 md:px-12 sm:px-10 px-4 border-b-[0.5px] sm:border-r-[0.5px] border-r-0 border-[#DDDDDD]">
          <div className="picture w-14 h-14 rounded-full bg-[#e8f3ff] mx-auto flex justify-center items-center">
            <img src={pricing} alt="" />
          </div>
          <div className="meta">
            <h4 className='font-medium xl:text-2xl lg:text-xl text-lg text-dark pt-4'> {props.box6Title} </h4>
            <p className='text-[#686868] opacity-70 text-xs pt-3.5 leading-5 w-60 mx-auto'>Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.</p>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-2/4 w-full choose-box lg:py-11 py-6 md:px-12 sm:px-10 px-4 border-b-[0.5px] border-[#DDDDDD]">
          <div className="picture w-14 h-14 rounded-full bg-[#e8f3ff] mx-auto flex justify-center items-center">
            <img src={pricing} alt="" />
          </div>
          <div className="meta">
            <h4 className='font-medium xl:text-2xl lg:text-xl text-lg text-dark pt-4'> {props.box7Title}</h4>
            <p className='text-[#686868] opacity-70 text-xs pt-3.5 leading-5 w-60 mx-auto'>Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.</p>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}
