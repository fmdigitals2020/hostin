import React from 'react';
import Map from './../assets/images/map.svg';

function Locations() {
  return (
    <section className="xl:py-28 lg:py-24 md:py-20 py-16">
      <div className="container mx-auto text-center">
        <div className="heading">
          <h2 className='font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl pb-2.5 text-dark'>Awsome servers all around the world, uptime guarantee</h2>
          <p className='pt-2.5 lg:text-base text-sm font-medium text-[#808080] opaciity-60 lg:leading-6 leading-normal'>Strategy startup research & development equity burn rate validation customer vesting period<br/> infrastructure seed round bandwidth ecosystem infographic market.</p>
        </div>

        <div className="inline-block relative my-24">
          <div className="map-info">

            <div className="location location-1">
              <div className="pin"></div>
              <div className="content uppercase">
                new york, USA
              </div>
            </div>

            <div className="location location-2">
              <div className="pin"></div>
              <div className="content uppercase">
                Brazil
              </div>
            </div>

            <div className="location location-3">
              <div className="pin"></div>
              <div className="content uppercase">
                Cairo, Egypt
              </div>
            </div>

            <div className="location location-4">
              <div className="pin"></div>
              <div className="content uppercase">
                Kenya
              </div>
            </div>

            <div className="location location-5">
              <div className="pin"></div>
              <div className="content uppercase">
                China
              </div>
            </div>

            <div className="location location-6">
              <div className="pin"></div>
              <div className="content uppercase">
                Russia
              </div>
            </div>

            <div className="location location-7">
              <div className="pin"></div>
              <div className="content uppercase">
                Japan
              </div>
            </div>

            <div className="location location-8">
              <div className="pin"></div>
              <div className="content uppercase">
                Singapore
              </div>
            </div>

          </div>
          <img src={Map} alt="" />
        </div>
      </div>
   </section>
  )
}

export default Locations