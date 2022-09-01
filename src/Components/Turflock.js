import React from 'react';
import '../Css/Turflock.css';
import Battery from '../Images/Battery.png';
import Mobile from '../Images/MobileSignal.png';
import Wifi from '../Images/Wifi.png';
import lock from '../Images/turflock.png'

function Landingpage() {
    return (
        <>
            <div className='maincontent'>
                {/* <div class="container-fluid" id='initial'>
                    <div class="row g-0">
                        <div class="col">

                        </div>
                        <div class="col-12">


                            <div className='grid grid-cols-2 mt-2 ' id='initialcontent'>
                                <div className=' '>
                                    <div className='time'>13:02
                                    </div>
                                </div>
                                <div className='toprightside ml-28' >
                                    <div className='flex gap-2.5 justify-evenly'>
                                        <div className='topimages h-5'><img src={Mobile} /></div>
                                        <div className='topimages h-5'><img src={Wifi} /></div>
                                        <div className='topimages h-5'><img src={Battery} /></div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col">

                        </div>
                    </div>
                </div> */}

                {/* <div class="container-fluid" id='initials'>
                    <div class="row g-0">
                        <div class="col-1">

                        </div>
                        <div class="col-9 mt-2">
                            <div class="grid grid-cols-6 gap-4" id='turflock'>
                                <div class="col-start-2 col-span-4">
                                    <div className='flex gap-2.5 justify-center'>
                                        <div className='lockimage'><img className='h-4' src={lock} /></div>
                                        <div className=' locktest'>turftown.in</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">

                        </div>
                    </div>
                </div> */}


            </div>


        </>
    )
}

export default Landingpage