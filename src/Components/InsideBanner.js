import React from 'react'

function InsideBanner(props) {
  return (
    <section className={`insidebanner bg-[#0359C0] relative pt-16 lg:pt-24 xl:pb-24 lg:pb-20 pb-12 font-circularStd`}>
        <div className="container mx-auto">
        
        {/* BANNER START */}
        <section className='inside-banner'>
            <div className="banner-wrapper xl:pt-28 lg:pt-20 pt-20 lg:px-0 px-8">
            <div className="banner-content lg:mb-0 md:mb-6 mb-3 relative -top-8 text-center">
                <h2 className='font-medium xl:text-5xl lg:text-4xl md:text-3xl lg:leading-[4rem] sm:text-2xl text-white lg:w-3/5 w-full mx-auto'> {props.title}</h2>
                <p className='lg:text-base text-center md:text-sm text-xs font-medium xl:mt-12 md:mt-10 mt-4 lg:leading-6 leading-normal md:pr-9 text-white opacity-70'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br className="lg:block hidden"/> consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            </div>
        </section>
        {/* BANNER END */}
        </div>
   </section>
  )
}

export default InsideBanner