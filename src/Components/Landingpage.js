import React from 'react';
import man from "../Images/Man.webp";
import '../Css/Landingpage.css';
import Logo from "../Images/Logowhite.png";
import venue from "../Images/venue1.webp";
import calendar from "../Images/calendar.png";
import clock from "../Images/clock.png";
import football from "../Images/football.png";
import person from "../Images/person.png";
import grouppersons from "../Images/grouppersons.png";
import locationfinder from '../Images/locationfinder.png';
import Subtract from '../Images/Subtract.png';
import lock from '../Images/Lock.png';
import arrow from '../Images/arrow.png';


function Landingpage() {


  window.onscroll = function () {
    let currentPosition = window.pageYOffset;
    if (currentPosition > 10) {
      document.getElementById("sticky").style.display = "block";
    } else {
      document.getElementById("sticky").style.display = "block";
    }
  }

  let isScrollover = window.onScroll > 10;


  return (
    <>
      <div className='hoster'>
        <div class="grid grid-cols-6 gap-4" id='footerbackground'>
          <div class="col-start-2 col-span-4 mt-9 mb-14" >
            <div className='flex gap-2.5 justify-center'>
              <div className='Logo'>
                <div> <img className='h-11' src={Logo} /></div>
              </div>
            </div>
          </div>
        </div>

        <div className='justify-center'>
          <div class="list-group list-group-numbered">
            <div class="list-group-item d-flex justify-content-between align-items-start" id='hosterhead'>
              <div class="ms-0.5 flex gap-3 mb-1" >
                <div> <img className='h-10' id='man' src={man} /></div>
                <div class=" -mt-1 ml-0.5"><p className="topplayer">abilash</p>
                  <p className='sunday'>Sunday fun games! Join boys!</p></div>
              </div>
              {/* <span class="badge mt-4 rounded-lg"><div className='-mt-2'>. . .</div></span> */}
            </div>
          </div>
        </div>

        <div className='justify-center mt-2' >
          <div class="list-group list-group-numbered" >
            <div class="list-group-item ms-3 mr-4 d-flex justify-content-between" id='gameicons'>
              <div > <div class="ms-0.5 my-2  me-auto flex gap-3">
                <div> <img className='h-13' id='venue' src={venue} /></div>
                <div class="gamename ml-0.5">Sunday ball!<br />
                  <div className='mt-2'>
                    <div class="flex gap-2.5">
                      <div class="order-first"><img className='h-4 mt-0.5' src={calendar} /></div>
                      <div className='day'>Wed</div>
                      <div className='-ml-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                        <path d="M10 14a1.5 1.5 0 1 0 0-3 2 1.5 0 0 0 0 3z" />
                      </svg></div>
                      <div className='day -ml-1'>Aug 21st</div>
                    </div>
                  </div>
                  <div className='mt-2.5'>
                    <div class="flex gap-2.5">
                      <div class="order-first"><img className='h-4 mt-1' src={clock} /></div>
                      <div className='day'>8:00 pm - 10:30 pm</div>

                    </div>
                  </div>

                  <div className='mt-3 -ml-0.5'>
                    <div class="flex justify-between gap-2">
                      <div className='btn' id="football">
                        <p className=''><img className='h-4 -mt-0.5 ml-0.5' src={football} /></p></div>
                      <div className='btn' id="playernumbers">
                        <p className=' -mt-0.5 -ml-0.5 number'>6v6</p></div>

                      <div className='btn flex' id="hourlyrupee">
                        <p className='-mt-0.5 -ml-0.5 number'> ₹ 250 / </p>
                        <div className='personincon'><img className='h-3.5 w-3  ml-1' src={person} /></div></div>
                    </div>
                  </div>

                  <div className='mt-3 -ml-3.5'>
                    <div class="flex justify-between">
                      <div className='btn'>
                        <p className='-mt-0.5'><img className='h-4' src={grouppersons} /></p></div>
                        <div className='progress -ml-0.5 w-36' id='progress'>
                        <div className='progress-bar w-10 ' role="progressbar" aria-valuemin="0" aria-valuemax="20" />
                      </div>
                      <div id='numberofperson'>
                        <p className='mt-1 ml-3'>3/12 </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                  </div>
                </div>
              </div>
                <div><hr className='horizontalline mt-4 w-80' /></div>

                <div className='justify-center'>
                  <div class="list-group list-group-numbered">
                    <div class="list-group d-flex justify-content-between align-items-start mt-4">
                      <div class="ms-0 me-auto flex gap-3" >
                        <div> <img className='h-5 w-5' id='locator' src={locationfinder} /></div>
                        <div class="place mt-0 -ml-1.5">Double Dribble, Aminjikarai
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className='justify-center'>
                  <div class="list-group list-group-numbered">
                    <div class="list-group d-flex justify-content-between align-items-start mt-3 -ml-0.5">
                      <div class="ms-0 me-auto flex gap-3 " >
                        <div className='btn' id='pitchtype'>
                          <p className='ml-0.5'>6 v 6 Pitch</p></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='justify-center mb-3'>
                  <div class="list-group list-group-numbered">
                    <div class="list-group d-flex justify-content-between align-items-start mt-3 -ml-0.5">
                      <div class="ms-0 me-auto flex gap-3 " >
                        <div className='btn flex gap-3' id='booked'>
                          <p className=' ml-0.5' id='bookedkey'>Booked </p>
                          <img className='h-4 -ml-2' src={Subtract} /></div>
                        <div className='btn flex gap-3' id='private'>
                          <img className='h-5' src={lock} />
                          <p className=' -ml-2' id='privatekey'>
                            Private </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div class="container-fluid">
          <div class="row g-0">
            <div class="col-12" id='sticky'>
              <div class="list-group list-group-numbered">
                <div class="list-group d-flex justify-content-between align-items-start mt-3">
                  <div class="ms-3 me-auto flex gap-3 " >
                    <div className='btn gap-2 sticky bottom-0 mb-3' id='joinbutton'>
                      <div className='flex gap-2 justify-center mt-1'> <p className='mt-0.5 ml-0.5'>Join </p>
                        <img className='h-3 mt-2' src={arrow} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='justify-center  mt-3' class={isScrollover ? "visible" : "hidden"}>
          <div class="list-group list-group-numbered">
            <div class="list-group d-flex justify-content-between align-items-start mt-3">
              <div class="ms-3 me-auto flex gap-3 " >
                <div className='btn gap-2 sticky bottom-0 mb-3' id='joinbutton'>
                  <div className='flex gap-2 justify-center mt-1'> <p className='mt-0.5 ml-0.5'>Join </p>
                    <img className='h-3 mt-2' src={arrow} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  */}
            </div>

          </div>
        </div>




        <div className='justify-center'>
          <div class="list-group list-group-numbered">
            <div class="list-group-item d-flex justify-content-between align-items-start" id='hosterhead'>
              <div class="ms-2 me-auto flex gap-3 " >
              </div>
            </div>
          </div>
        </div>
        <div><hr className='horizontalline2 ms-3 mr-3 mt-7' /></div>

      </div>

    </>
  )
}

export default Landingpage;