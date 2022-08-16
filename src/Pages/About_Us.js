import React from "react";
import {AboutImage} from "../Imports/ImportImages";

import 'tw-elements';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Questions from "../Components/Questions";
import Faq from "../Components/Faq";
import WhyChooseUs from "../Components/WhyChooseUs";
import InsideBanner from "../Components/InsideBanner";

const AboutUs = () => {

    return (
        <div className="App inner-page font-circularStd">

        {/* HEADER START */}
        <Header HeaderInside/>
        {/* HEADER END */}

        {/* Inside Banner */}
          <InsideBanner title="Easy Managed Web & Game Server Hosting" backLinear/>
        {/* Inside Banner */}

        {/* platform */}

        {/* platform */}

        <section className="hosting_platform xl:pt-20 lg:pt-16 pt-10 xl:pb-28 lg:pb-24 pb-16">
            <div className="container mx-auto">
                <div className="heading">
                    <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-medium lg:leading-10 leading-normal text-dark">A Managed Web & Game Server Hosting Platform <br className="lg:block hidden"/> Where Teams Can Build Game Server & Manage <br className="lg:block hidden"/> Phenomenal Web Applications</h2>
                </div>
                <div className="flex md:flex-nowrap flex-wrap lg:mt-14 md:mt-10 mt-8">
                    <div className="md:w-2/4 w-full">
                        <div className="picture">
                            <img src={AboutImage} alt="" />
                        </div>
                    </div>
                    <div className="md:w-2/4 w-full flex flex-col justify-center">
                        <p className="lg:text-base text-sm font-medium lg:leading-6 leading-normal"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <p className="lg:mt-6 mt-3 lg:text-base text-sm font-medium lg:leading-6 leading-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
                        <div className="actions">
                            <a href="" className="bg-primary text-white rounded-lg text-sm font-medium xl:py-4 lg:py-3 py-2 xl:px-10 lg:px-8 px-5 inline-block xl:mt-6 lg:mt-5 mt-4">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* Choose us */}

        <WhyChooseUs bgColor desc="Here are some of the reasons why our hosting services are right for you." box1Title="Best Pricing Deals" box2Title="Dedicated Support" box4Title="Passion for Privacy" box5Title="Security" box6Title="100% Uptime Guaranteed" box7Title="Super easy to use"/>

         {/* Choose us */}
   
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

export default AboutUs;