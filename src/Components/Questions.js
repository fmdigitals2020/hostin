import React from 'react'
import { QuestionsImg } from '../Imports/ImportImages'
import { Link } from 'react-router-dom'

export default function Questions() {
  return (
    <div className="container mx-auto">
    <section className="bg-[#F9FAFB] lg:py-9 py-7 rounded-xl md:px-0 px-4">
        <div className="questions-con text-center">
          <div className="picture">
            <img src={QuestionsImg} className='mx-auto' alt="" />
          </div>
          <div className="meta">
            <h3 className="lg:text-xl text-lg font-medium text-[#1D1D1B] xl:mt-8 lg:mt-9 mt-6">Vous avez encore des questions ?</h3>
            <p className="text-[#667085] lg:text-base text-sm font-normal mt-1">Notre équipe de support est à votre disposition pour toute question.</p>
            <div className="lg:mt-8 mt-6">
              <Link to="/" className="lg:text-base text-sm text-white bg-secondary drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg py-3 lg:px-5 px-4">Tchatter avec nous</Link>
            
            </div>
          </div>
        </div>
    </section>
  </div>
  )
}
