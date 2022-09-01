import React from 'react';
import "../Css/Host.css";
import host from "../Images/Host.webp";
import skilllevel from "../Images/Skilllevel.webp";
import skilllevel2 from "../Images/skilllevel2.webp";
import player1 from "../Images/player1.webp";
import player2 from "../Images/player2.webp";
import dot from '../Images/dot.png'


function Host() {
    return (
        <>
            <div className='Host'>
                <div class="container">
                    <div class="row">
                        <div class="col-1">

                        </div>
                        <div class="col-10 mt-11 mb-0" id='host'>
                            HOST
                        </div>
                        <div class="col-1">

                        </div>
                    </div>
                </div>

                <div className='justify-center' >
                    <ol class="list-group list-group-numbered" >
                        <div class="list-group-item ms-0 mr-3 d-flex justify-content-between" >
                            <div > <div class="ms-0 my-3 me-auto flex gap-3" id='shelly'>
                                <div> <img className='h-11' id='playerss' src={host} /></div>
                                <div class="hostname -mt-1">shelly<br />
                                    <div className='mt-0.5' id='hostnickname'>
                                        <div class="flex">
                                            <div class="order-first">Sylesh Sachin</div>
                                        </div>
                                    </div>

                                    <div className='mt-2'>
                                        <div class="flex gap-2">
                                            <div class="order-first "><img className='h-5' src={skilllevel} /></div>
                                            <div className='semipro'>Semi-pro</div>
                                            <div ><img className='h-1.5 mt-2.5' src={dot}/></div>
                                            <div className='right mt-0.5'>Righty</div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                               
                            </div>
                        </div>
                    </ol>

                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-1">

                        </div>
                        <div class="col-10 mt-7 mb-3.5" id='host'>
                            PLAYERS
                        </div>
                        <div class="col-1">

                        </div>
                    </div>
                </div>
                <div className='justify-center' >
                    <ol class="list-group list-group-numbered" >
                        <div class="list-group-item ms-0 mr-3 d-flex justify-content-between">
                            <div > <div class="ms-0 my-3 me-auto flex gap-3" id='shelly'>
                                <div> <img className='h-11' id='playerss' src={player1} /></div>
                                <div class="hostname -mt-1">harsha<br />
                                    <div className='mt-0.5' id='hostnickname'>
                                        <div class="flex">
                                            <div class="order-first">G.K Harsha</div>
                                        </div>
                                    </div>

                                    <div className='mt-2'>
                                        <div class="flex gap-2">
                                            <div class="order-first"><img className='h-5' src={skilllevel2} /></div>
                                            <div className='semipro'>Rookie</div>
                                            <div><img className='h-1.5 mt-2.5' src={dot}/></div>
                                            <div className='right mt-0.5'>Lefty</div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        
                            </div>
                        </div>
                    </ol>

                </div>

                <div className='justify-center mt-1' >
                    <ol class="list-group list-group-numbered" >
                        <div class="list-group-item ms-0 mr-3 d-flex justify-content-between">
                            <div > <div class="ms-0 my-3 me-auto flex gap-3" id='shelly'>
                                <div> <img className='h-11' id='playerss' src={player2} /></div>
                                <div class="hostname -mt-1">kumar<br />
                                    <div className='mt-0.5' id='hostnickname'>
                                        <div class="flex">
                                            <div class="order-first">Kumar Gugloth</div>
                                        </div>
                                    </div>

                                    <div className='mt-0'>
                                        <div class="flex">

                                            <div className='right mt-1'>Righty</div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>

                            </div>

                        </div>
                    </ol>
                    <div><hr className='horizontalline2 mt-9 ms-3 mr-3' /></div>
                </div>


            </div>
        </>
    )
}

export default Host