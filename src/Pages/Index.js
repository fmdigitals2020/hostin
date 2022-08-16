import React, { useState  } from "react";
import { banner,circle,star,Element1,Element2,Element3,Layer} from "../Imports/ImportImages";
import TabComponent from "../Components/Tab";
import Pricing from "../Components/Pricing";
import Locations from "../Components/Locations";
import 'tw-elements';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Questions from "../Components/Questions";
import Faq from "../Components/Faq";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";
import OffersWeAre from "../Components/OffersWeAre";
import { Link } from "react-router-dom";

const Index = () => {
  
  // FOR OPEN TABS

  const [openTab, setOpenTab] = useState(1);

    return (
      <div className="App font-circularStd">
        {/* HEADER START */}
        <Header/>
        {/* HEADER END */}

        {/* HERO WRAP */}
        <section className='herowrap bg-[#EDF0F7] relative pt-16 md:pt-20 xl:pb-64 lg:pb-60 md:pb-56 sm:pb-52 pb-24 font-circularStd'>
          <div className="circle absolute top-1/2	-translate-y-2/4">
            <img src={circle} alt="" />
          </div>
          <div className="container mx-auto">
            {/* BANNER START */}
            <section className='homepage-banner'>
              <div className="banner-wrapper flex lg:flex-nowrap items-end flex-wrap lg:pt-20 pt-20">
                <div className="banner-content lg:w-2/4 w-full lg:mb-0 md:mb-6 mb-3 relative -top-8">
                  <h2 className='text-left font-bold xl:text-5xl lg:text-4xl md:text-3xl lg:leading-[4rem] sm:text-2xl text-[#1F3153]'>L’hébergement françaisqui propulse vos projets 🚀</h2>
                  <p className='font-circularStd lg:text-base md:text-sm text-xs font-light text-left xl:mt-12 md:mt-10 mt-4 lg:leading-6 leading-normal md:pr-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                  <div className="actions flex mt-5">
                    <div>
                      <Link to={"/"} className='inline-block shadow-[0_24px_64px_rgba(107,103,245,0.5)] lg:px-12 md:px-10 px-9 lg:py-3.5 py-3 lg:text-base text-sm font-bold text-white rounded-lg bg-primary'>
                      Bouton 1
                      </Link>
                    </div>
                    <div>
                    <Link to={"/"} className='ml-4 inline-block lg:px-12 md:px-10 px-9 lg:py-3.5 py-3 lg:text-base text-sm font-bold text-primary border border-1 border-primary rounded-lg'>
                      Bouton 2
                      </Link>
                    </div>
                  </div>
                  <div className="rating xl:pt-14 lg:pt-12 md:pt-10 pt-6">
                    <div className="flex items-center">
                      <div className="box bg-[#00B67A] p-1">
                        <img src={star} className='lg:w-auto w-4' alt="" />
                      </div>
                      <div className="box bg-[#00B67A] p-1 ml-1">
                        <img src={star} className='lg:w-auto w-4' alt="" />
                      </div>
                      <div className="box bg-[#00B67A] p-1 ml-1">
                        <img src={star} className='lg:w-auto w-4' alt="" />
                      </div>
                      <div className="box bg-[#00B67A] p-1 ml-1">
                        <img src={star} className='lg:w-auto w-4' alt="" />
                      </div>
                      <div className="box bg-[#00B67A] p-1 ml-1">
                        <img src={star} className='lg:w-auto w-4' alt="" />
                      </div>
                      <div className="meta lg:pl-7 md:pl-5 pl-3.5">
                        <p className='mb-0 text-[#1F3153] lg:text-base md:text-sm text-xs font-medium'>Noté 4,7/5 sur <span className='text-[#00B67A]'> la plateforme TrustPilot </span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-image lg:w-2/4 w-full">
                  <div className='picture h-full xl:h-[600px] bg-center flex items-center' >
                    <img src={banner} alt="" className='mx-auto'/>
                  </div>
                </div>
              </div>
            </section>
            {/* BANNER END */}
          </div>
        </section>
        {/* HERO WRAP */}

        {/* OFFERS WE ARE */}
         <OffersWeAre/>
   
        {/* OFFERS WE ARE */}
   
        {/* WHY CHOOSE US */}
        <WhyChooseUs box1Title="Best Pricing Deals" box2Title="Dedicated Support" box4Title="Passion for Privacy" box5Title="Security" box6Title="100% Uptime Guaranteed" box7Title="Super easy to use" desc="Here are some of the reasons why our hosting services are right for you." />
        {/* WHY CHOOSE US */}
   
        {/* GET STARTED */} 
        <section className='getstarted relative text-center bg-gradient-to-r from-[#0B1465] to-[#1a76ff]'>
          <div className="overlay absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Layer})`}}></div>
           <div className='getstarted-back xl:py-20 lg:py-16 md:py-12 py-8 lg:px-0 md:px-8 px-6 relative z-10'>
             <h2 className='font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white pb-2.5'>Let Get Started</h2>
             <p className='pt-2.5 lg:text-base text-sm font-medium text-[#ECECEC] lg:leading-6 leading-normal opacity-60'>Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br className='lg:block hidden'/> consequat duis enim velit Exercitation veniam consequat sunt nostrud amet.</p>
             <div className='pt-6'>
             <Link to="/" className='lg:text-base text-sm font-medium rounded-md lg:px-14 md:px-12 px-10 lg:py-3 py-2 bg-white hover:bg-black hover:text-white inline-block'>Get Started Now</Link>
             </div>
           </div>
        </section>
        {/* GET STARTED */}
   
        {/* HOSTING PACKAGE */}   
        <section className='hosting bg-[#F7FAFE] xl:pt-16 lg:pt-14 pt-12 lg:pb-9 pb-6'>
         <div className="container mx-auto">
           <div className="heading text-center">
             <h2 className='font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl pb-2.5 text-dark'>Choose Your Hosting Package</h2>
             <p className='pt-2.5 lg:text-base text-sm font-medium text-[#808080] opaciity-60 lg:leading-6 leading-normal'>Enter your select domain name and choose any extension name in the next step <br className='lg:block hidden'/> (choose between .com, .online, .tech, .site, .net, and more)</p>
           </div>
           <div>
           <TabComponent openTab={openTab} setOpenTab={(index)=> setOpenTab(index)} tabData={['Web Hosting', 'Game Server Hosting', 'Dedicated Hosting']}>
           <div className="tab-content tab-space">
             <div className={openTab === 0 ? "block" : "hidden"} id="link1">
                 <div>
                   <Pricing/>
                 </div>
             </div>
             <div className={openTab === 1 ? "block" : "hidden"} id="link2">
             <div>
                   <Pricing/>
                 </div>
             </div>
             <div className={openTab === 2 ? "block" : "hidden"} id="link2">
             <div>
                   <Pricing/>
                 </div>
             </div>
           </div>
           </TabComponent>
           </div>
         </div>
        </section>  
        {/* HOSTING PACKAGE */}

        {/* map */}
        <Locations/>
        {/* map */}
   
        {/* PERFECT DOMAIN */}   
        <section className='perfect-domain lg:mt-0 mt-6'>
         <div className="container mx-auto">
           <div className="domain-content bg-primary rounded-2xl text-center relative py-20 lg:px-0 px-4">
             <img src={Element1} className='absolute left-[40%] top-2 lg:w-auto w-10' alt="" />
             <img src={Element2} className='absolute top-[65%] -left-5 lg:w-auto w-10' alt="" />
             <img src={Element3} className='absolute top-[70%] -right-5 lg:w-auto w-10' alt="" />
             <h2 className='xl:text-[54px] lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white font-bold'>Find the perfect domain name</h2>
             <p className='lg:pt-4 pt-3 text-white lg:text-base text-sm font-medium lg:leading-6 leading-normal'>Enter your select domain name and choose any extension name in the next step <br className='lg:block hidden'/> (choose between .com, .online, .tech, .site, .net, and more)</p>
             <div className='flex sm:flex-row flex-col bg-white lg:w-3/5 w-full mx-auto rounded-lg py-2 px-4 xl:mt-14 lg:mt-12 md:mt-10 mt-8'>
               <input type="text" className='w-full outline-none rounded-tl-lg rounded-bl-lg lg:text-base text-sm font-medium' placeholder='Chercher son nom de domaine'/>
               <div className="flex sm:justify-start justify-center sm:mt-0 mt-5">
                 <div className={`selectoptions relative flex items-center selectoption after:content-[''] after:h-2.5 after:pointer-events-none after:w-5 after:bg-no-repeat mr-3 after:absolute after:right-2`}>
                   <select name="" id="" className='py-3 px-6 w-[100px] border border-[#808080] rounded-lg pl-3 outline-none appearance-none text-[#686868]'>
                     <option value="">.fr</option>
                     <option value="">.fr</option>
                     <option value="">.fr</option>
                     <option value="">.fr</option>
                   </select>
                 </div>
                 <Link to="/" className='inline-block bg-primary text-white py-3 lg:px-5 px-8 rounded-lg lg:text-base text-sm font-medium'>
                  Rechercher
                 </Link>
               </div>
             </div>
           </div>
         </div>
        </section>   
        {/* PERFECT DOMAIN */}
   
        {/* CLIENT SAYS */}   
        <Testimonials/>  
        {/* CLIENT SAYS */}
   
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

export default Index;