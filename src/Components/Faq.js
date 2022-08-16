import React from 'react'

export default function Faq() {
  return (
    <section className="xl:py-24 lg:py-16 py-10">
           <div className="container mx-auto">
             <div className="top-heading text-center">
               <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl text-[#101828] font-bold mb-2">Frequently Asked Questions</h2>
               <p className="lg:text-base text-sm text-[#667085] xl:leading-7 lg:leading-6 leading-normal font-medium">Everything you need to know about the product and billing.</p>
             </div>
             <div className="accordion xl:mt-10 mt-8 xl:px-64 lg:px-60 md:px-24 px-0" id="accordionExample">
             <div className="accordion-item border-b border-[#EAECF0] pb-6">
               <h2 className="accordion-header mb-0" id="headingOne">
                 <button className="accordion-button collapsed relative flex items-center w-full focus:shadow-none focus:text-black lg:text-base text-sm font-medium text-[#101828]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 Is there a free trial available?
                 </button>
               </h2>
               <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                 <div className="accordion-body pt-2 pb-8">
                   <p className="text-base font-medium text-[#667085]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                 </div>
               </div>
             </div>
             <div className="accordion-item border-b border-[#EAECF0]">
               <h2 className="accordion-header mb-0" id="headingTwo">
                 <button className="accordion-button collapsed relative flex items-center w-full focus:shadow-none focus:text-black lg:text-base text-sm font-medium text-[#101828] py-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 Can I change my plan later?
                 </button>
               </h2>
               <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                 data-bs-parent="#accordionExample">
                 <div className="accordion-body py-4 px-5">
                 <p className="text-base font-medium text-[#667085]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                 </div>
               </div>
             </div>
             <div className="accordion-item border-b border-[#EAECF0]">
               <h2 className="accordion-header mb-0" id="headingThree">
                 <button className="accordion-button collapsed relative flex items-center w-full focus:shadow-none focus:text-black lg:text-base text-sm font-medium text-[#101828] py-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                   aria-controls="collapseThree">
                   What is your cancellation policy?
                 </button>
               </h2>
               <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                 data-bs-parent="#accordionExample">
                 <div className="accordion-body py-4 px-5">
                 <p className="text-base font-medium text-[#667085]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                 </div>
               </div>
             </div>
              <div className="accordion-item border-b border-[#EAECF0]">
               <h2 className="accordion-header mb-0" id="headingfour">
                 <button className="accordion-button collapsed relative flex items-center w-full focus:shadow-none focus:text-black lg:text-base text-sm font-medium text-[#101828] py-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                 Can other info be added to an invoice?
                 </button>
               </h2>
               <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                 data-bs-parent="#accordionExample">
                 <div className="accordion-body py-4 px-5">
                 <p className="text-base font-medium text-[#667085]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                 </div>
               </div>
             </div>
             <div className="accordion-item border-b border-[#EAECF0]">
               <h2 className="accordion-header mb-0" id="headingFive">
                 <button className="accordion-button collapsed relative flex items-center w-full focus:shadow-none focus:text-black lg:text-base text-sm font-medium text-[#101828] py-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                   aria-controls="collapseFive">
                  How does billing work?
                 </button>
               </h2>
               <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                 data-bs-parent="#accordionExample">
                 <div className="accordion-body py-4 px-5">
                 <p className="text-base font-medium text-[#667085]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                 </div>
               </div>
             </div>
             </div>
           
           </div>
         </section>
  )
}
