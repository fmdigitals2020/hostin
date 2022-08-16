import React from "react";
import {Frame} from "../Imports/ImportImages";
import 'tw-elements';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Questions from "../Components/Questions";
import Faq from "../Components/Faq";


const Contact = () => {
    return (
        <div className="App inner-page font-circularStd">

        {/* header */}
        <Header shortHeader HeaderInside/>

        {/* banner  */}

        <section className="banner xl:pt-32 lg:pt-28 md:pt-24 sm:pt-14 pt-12">
            <div className="container mx-auto">
                <div className="flex-area flex lg:flex-nowrap items-center flex-wrap">
                    <div className="banner-con md:w-2/4 w-full">
                        <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-dark font-medium lg:leading-[60px] leading-normal">Documentations et <br className="lg:block hidden"/> Tutoriels</h2>
                        <p className="text-dark opacity-70 lg:text-base text-sm font-medium lg:leading-6 leading-normal mt-5">We don’t want to keep you hanging, waiting for someone to answer the phone. That’s why we believe that live chat and other means of internet communication can solve problems more efficiently.</p>
                    </div>
                    <div className="md:w-2/4 w-full lg:mt-0 mt-6">
                        <div className="picture">
                            <img src={Frame} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

       {/* banner  */}

       {/* select topic */}
 
       <section className="selecttopic xl:mt-28 lg:mt-16 md:mt-14 mt-10">
          <div className="container mx-auto">
            <div className="heading lg:mb-14 mb-8">
                <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl text-[#333333] font-medium">Sélectionnez le topic </h2>
            </div>
            <div className="gridarea flex flex-wrap">
                <div className="lg:w-1/3 sm:w-1/2 lg:pr-5 md:pr-4 pr-3 w-full">
                    <div className="bg-white rounded-md border border-[#DFDFDF] lg:py-6 md:py-4 py-3 xl:px-20 lg:px-16 md:px-14 sm:px-12 px-8 lg:mb-6 mb-5 hover:border hover:border-primary">
                        <h4 className="lg:text-xl md:text-lg text-sm text-[#333333] font-medium hover:text-primary">Serveurs dédiés</h4>
                        <p className="mt-2 text-[#555555] font-normal lg:text-base text-sm lg:leading-6 leading-normal">Euis aute irure dolor in reprehenderit in voluptate</p>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 lg:pr-5 md:pr-4 pr-3 w-full">
                    <div className="bg-white rounded-md border border-[#DFDFDF] lg:py-6 md:py-4 py-3 xl:px-20 lg:px-16 md:px-14 sm:px-12 px-8 lg:mb-6 mb-5 hover:border hover:border-primary">
                        <h4 className="lg:text-xl md:text-lg text-sm text-[#333333] font-medium hover:text-primary">Serveurs dédiés</h4>
                        <p className="mt-2 text-[#555555] font-normal lg:text-base text-sm lg:leading-6 leading-normal">Euis aute irure dolor in reprehenderit in voluptate</p>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 w-full">
                    <div className="bg-white rounded-md border border-[#DFDFDF] lg:py-6 md:py-4 py-3 xl:px-20 lg:px-16 md:px-14 sm:px-12 px-8 lg:mb-6 mb-5 hover:border hover:border-primary">
                        <h4 className="lg:text-xl md:text-lg text-sm text-[#333333] font-medium hover:text-primary">Hébergement Web</h4>
                        <p className="mt-2 text-[#555555] font-normal lg:text-base text-sm lg:leading-6 leading-normal">Euis aute irure dolor in reprehenderit in voluptate</p>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 lg:pr-5 md:pr-4 pr-3 w-full"> 
                    <div className="bg-white rounded-md border border-[#DFDFDF] lg:py-6 md:py-4 py-3 xl:px-20 lg:px-16 md:px-14 sm:px-12 px-8 lg:mb-6 mb-5 hover:border hover:border-primary">
                        <h4 className="lg:text-xl md:text-lg text-sm text-[#333333] font-medium hover:text-primary">Domaines</h4>
                        <p className="mt-2 text-[#555555] font-normal lg:text-base text-sm lg:leading-6 leading-normal">Euis aute irure dolor in reprehenderit in voluptate</p>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 lg:pr-5 md:pr-4 pr-3 w-full"> 
                    <div className="bg-white rounded-md border border-[#DFDFDF] lg:py-6 md:py-4 py-3 xl:px-20 lg:px-16 md:px-14 sm:px-12 px-8 lg:mb-6 mb-5 hover:border hover:border-primary">
                        <h4 className="lg:text-xl md:text-lg text-sm text-[#333333] font-medium hover:text-primary">Email</h4>
                        <p className="mt-2 text-[#555555] font-normal lg:text-base text-sm lg:leading-6 leading-normal">Euis aute irure dolor in reprehenderit in voluptate</p>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 w-full">
                    <div className="bg-white rounded-md border border-[#DFDFDF] lg:py-6 md:py-4 py-3 xl:px-20 lg:px-16 md:px-14 sm:px-12 px-8 lg:mb-6 mb-5 hover:border hover:border-primary">
                        <h4 className="lg:text-xl md:text-lg text-sm text-[#333333] font-medium hover:text-primary">Facturation</h4>
                        <p className="mt-2 text-[#555555] font-normal lg:text-base text-sm lg:leading-6 leading-normal">Euis aute irure dolor in reprehenderit in voluptate</p>
                    </div>
                </div>
            </div>
          </div>
       </section>

        {/* select topic */}

        {/* Assist You */}

        <section className="assistyou xl:py-20 lg:py-14 py-10 bg-[#035AC1] relative xl:mt-48 lg:mt-40 md:pt-32 pt-24">
            <div className="container mx-auto">
                <div className="heading text-center">
                    <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white font-medium lg:leading-[60px] leading-normal">How Can We Assist You?</h2>
                     <p className="text-white opacity-6 font-medium leading-6 lg:text-base text-sm mt-2">We are here for you 24/7/365. Our Customer Success Team is called that way for a reason.</p>
                </div>
                <div className="flex-area flex flex-wrap xl:mt-20 lg:mt-16 md:mt-12 mt-10">
                    <div className="sm:w-3/5 w-full lg:mb-14 md:mb-12 mb-8">
                        <h4 className="text-white font-medium xl:text-2xl lg:text-xl text-base">Already a client?</h4>
                        <p className="font-medium lg:text-base text-sm text-white"> <span className="text-[#FFCF25] mt-2"> Login </span> and reach our Customer Success Team</p>
                    </div>
                    <div className="sm:w-2/5 w-full lg:mb-14 md:mb-12 mb-8">
                        <h4 className="text-white font-medium xl:text-2xl lg:text-xl text-base">Sales inquiry</h4>
                        <p className="font-medium lg:text-base text-sm text-white"> sales@hostim.com</p>
                    </div>
                    <div className="sm:w-3/5 w-full lg:mb-14 md:mb-12 mb-8">
                        <h4 className="text-white font-medium xl:text-2xl lg:text-xl text-base">Lost access to 2FA or profile email?</h4>
                        <p className="font-medium lg:text-base text-sm text-white"> account-recovery@hostim.com</p>
                    </div>
                    <div className="sm:w-2/5 w-full lg:mb-14 md:mb-12 mb-8">
                        <h4 className="text-white font-medium xl:text-2xl lg:text-xl text-base">Media (PR)</h4>
                        <p className="font-medium lg:text-base text-sm text-white"> press@hostim.com</p>
                    </div>
                    <div className="sm:w-3/5 w-full lg:mb-14 md:mb-12 mb-8">
                        <h4 className="text-white font-medium xl:text-2xl lg:text-xl text-base">Report abuse</h4>
                        <p className="font-medium lg:text-base text-sm text-white">abuse@hostim.com or  <span className="text-[#FFCF25] mt-2"> click here </span> </p>
                    </div>
                    <div className="sm:w-2/5 w-full lg:mb-14 md:mb-12 mb-8">
                        <h4 className="text-white font-medium xl:text-2xl lg:text-xl text-base">Affiliates program</h4>
                        <p className="font-medium lg:text-base text-sm text-white"> affiliates@hostimmedia.com</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Assist You */}
   
        {/* FAQ */}   
         <Faq/>  
        {/* FAQ */}
   
        {/* QUESTIONS */}   
          <Questions/>  
         {/* QUESTIONS */}
   

        {/* Footer Starts here */}
         <Footer/>
   
       </div>
    )
}

export default Contact;