import React from 'react';
import "../Css/Footer.css";
import apple from '../Images/appstore1.png';
import play from '../Images/playstore.png';


function Footer() {
  return (
    <>
      <div className='Footer'>
        <div class="grid grid-cols-6 gap-4" id='footerbackground'>
          <div class="col-start-2 col-span-4 mt-11 mb-0" >
            <div className='flex gap-2.5 justify-center'>
              <div className='footercontent'>
                Don’t have a Turf Town account?
                <p className=''>Get the app & start playing!</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-6 gap-4" id='footerbackground'>
          <div class="col-start-2 col-span-4 mt-10 mb-40" >

            <div className='footerlogo '>
              <div className='flex justify-center gap-3'>
                <div><a href='https://apps.apple.com/in/app/turf-town/id1490231308' target="__blank"><img className='h-9' src={apple} /></a></div>
                <div><a href='https://play.google.com/store/apps/details?id=com.turftown&hl=en_US' target="__blank"><img className='h-9' src={play} /></a></div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Footer