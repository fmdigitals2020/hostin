import React from 'react'
import Slider from "react-slick";
import {Client,Starss} from "../Imports/ImportImages";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
    
    const settings = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows : true,
        responsive: [
          {
            breakpoint: '576px',
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              className: "center",
              centerMode: true,
              variableWidth: false,
            }
          },
        ]
      };
  return (
    <section className='client-says bg-[#F7FAFE] xl:py-28 lg:py-24 md:py-20 py-12 overflow-hidden xl:mt-24 lg:mt-20 mt-16'>
    <div className="container mx-auto flex lg:flex-nowrap flex-wrap sm:p-auto px-0">
      <div className="clients-content lg:w-2/5 w-full lg:pr-12 md:pr-8 pr-6 sm:px-0 px-4">
        <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl pb-2.5 text-dark">What Say Clients</h2>
        <p className="lg:text-base text-sm text-[#757575] lg:leading-6 leading normal lg:mt-4 mt-2 lg:pr-10 pr-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. rcitation veniam consequat sunt</p>
      </div>
      <div className="clients-slider lg:w-3/5 w-full sm:flex block md:mt-0 mt-6">
      <Slider {...settings}>
        <div style={{ width: 350 ,'#ffffff' : 'blue'}}>
          <div className="client-box lg:py-6 md:py-4 py-3 xl:px-9 lg:px-7 px-5 bg-white rounded-xl mr-3">
            <div className="picture">
              <img src={Client} alt="" />
            </div>
            <div className="meta">
              <p className="text-[#203239] xl:text-base lg:text-sm text-xs lg:leading-6 leading-normal xl:mt-6 lg:mt-4 mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor ed do amet sint. Velit officia consequat duis enim velit mollit. rcitation veniam consequat sunt</p>
              <div className="stars flex xl:mt-6 lg:mt-4 mt-3">
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
              </div>
              <h4 className="text-[#0F393B] font-medium xl:text-xl lg:text-lg text-sm lg:mt-5 mt-3">Yunus Seyhan</h4>
              <span className="block text-[#5F5F5F] xl:text-base text-sm font-medium mt-1">Entrepreneur</span>
            </div>
          </div>
        </div>
        <div style={{ width: 350 }}>
        <div className="client-box lg:py-6 md:py-4 py-3 xl:px-9 lg:px-7 px-5 bg-white rounded-xl mr-3">
            <div className="picture">
              <img src={Client} alt="" />
            </div>
            <div className="meta">
              <p className="text-[#203239] xl:text-base lg:text-sm text-xs lg:leading-6 leading-normal xl:mt-6 lg:mt-4 mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor ed do amet sint. Velit officia consequat duis enim velit mollit. rcitation veniam consequat sunt</p>
              <div className="stars flex xl:mt-6 lg:mt-4 mt-3">
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
              </div>
              <h4 className="text-[#0F393B] font-medium xl:text-xl lg:text-lg text-sm lg:mt-5 mt-3">Yunus Seyhan</h4>
              <span className="block text-[#5F5F5F] xl:text-base text-sm font-medium mt-1">Entrepreneur</span>
            </div>
          </div>
        </div>
        <div style={{ width: 350 }}>
        <div className="client-box lg:py-6 md:py-4 py-3 xl:px-9 lg:px-7 px-5 bg-white rounded-xl mr-3">
            <div className="picture">
              <img src={Client} alt="" />
            </div>
            <div className="meta">
              <p className="text-[#203239] xl:text-base lg:text-sm text-xs lg:leading-6 leading-normal xl:mt-6 lg:mt-4 mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor ed do amet sint. Velit officia consequat duis enim velit mollit. rcitation veniam consequat sunt</p>
              <div className="stars flex xl:mt-6 lg:mt-4 mt-3">
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
              </div>
              <h4 className="text-[#0F393B] font-medium xl:text-xl lg:text-lg text-sm lg:mt-5 mt-3">Yunus Seyhan</h4>
              <span className="block text-[#5F5F5F] xl:text-base text-sm font-medium mt-1">Entrepreneur</span>
            </div>
          </div>
        </div>
        <div style={{ width: 350 }}>
        <div className="client-box lg:py-6 md:py-4 py-3 xl:px-9 lg:px-7 px-5 bg-white rounded-xl mr-3">
            <div className="picture">
              <img src={Client} alt="" />
            </div>
            <div className="meta">
              <p className="text-[#203239] xl:text-base lg:text-sm text-xs lg:leading-6 leading-normal xl:mt-6 lg:mt-4 mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor ed do amet sint. Velit officia consequat duis enim velit mollit. rcitation veniam consequat sunt</p>
              <div className="stars flex xl:mt-6 lg:mt-4 mt-3">
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
                <img src={Starss} alt="" />
              </div>
              <h4 className="text-[#0F393B] font-medium xl:text-xl lg:text-lg text-sm lg:mt-5 mt-3">Yunus Seyhan</h4>
              <span className="block text-[#5F5F5F] xl:text-base text-sm font-medium mt-1">Entrepreneur</span>
            </div>
          </div>
        </div>
      </Slider>
      </div>
     
    </div>
   </section>
  )
}
