import React, {useState  } from "react";
import TabComponent from "../Components/Tab";
import Pricing from "../Components/Pricing";
import 'tw-elements';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Questions from "../Components/Questions";
import Faq from "../Components/Faq";
import WhyChooseUs from "../Components/WhyChooseUs";
import InsideBanner from "../Components/InsideBanner";

const Webhosting = () => {
  
  // FOR OPEN TABS
  
  const [openTab, setOpenTab] = useState(1);

    return (
        <div className="App inner-page font-circularStd">
        {/* HEADER START */}
        <Header HeaderInside/>
        {/* HEADER END */}

        {/* Inside Banner */}
        <InsideBanner title="Hostim Fast & Affordable Web Hosting"/>
        {/* Inside Banner */}
   
        {/* HOSTING PACKAGE */}   
        <section className='hosting bg-[#F7FAFE] xl:pt-16 lg:pt-14 pt-12 lg:pb-9 pb-6'>
         <div className="container mx-auto">
           <div className="heading text-center">
             <h2 className='font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl pb-2.5 text-dark'>Choose Your Hosting Package</h2>
             <p className='pt-2.5 lg:text-base text-sm font-medium text-[#808080] opaciity-60 lg:leading-6 leading-normal'>Enter your select domain name and choose any extension name in the next step <br className='lg:block hidden'/> (choose between .com, .online, .tech, .site, .net, and more)</p>
           </div>
           <div>
           <TabComponent openTab={openTab} setOpenTab={(index)=> setOpenTab(index)} tabData={['Monthly','Annually']}>
           <div className="tab-content tab-space">
             <div className={openTab === 0 ? "block" : "hidden"} id="link1">
                 <div>
                   <Pricing packageText/>
                 </div>
             </div>
             <div className={openTab === 1 ? "block" : "hidden"} id="link2">
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

       {/* packages */}

       <WhyChooseUs box1Title="Instant Activation" box2Title="24/7 Tech Support" box4Title="Offsite Backups" box5Title="Nvme SSD Powered" box6Title="Protected By Cloudfare" box7Title="Spam Protection"/>

       {/* packages */}
   
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

export default Webhosting;