import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"

function Msb123() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4 mb-5  pb-5 '>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p '>
                    <b>The MSB Series - Mechanical Machine Synchronized Battery Powered Units,
                        125cc and 250cc</b>
                </p>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-5'>
                    Operating Principles.

                    The Technolube MSB series unit turns "ON" or "OFF" in synchronization with the equipment on which it is installed.  It will dispense the preset amount of grease as  long as the machinery is operating.  When the machinery is switched off the Technolube MS goes into standby mode and stops dispensing lubricant until the machinery is back in operation.  It restarts the dispensing cycle within a few minutes.

                    The MSB is NOT is an externally powered unit. It operates on its own battery.  The battery should be replaced simultaneously with the grease pouch.  This unit will turn ON/OFF through a Relay Box in accordance with the related equipment power signal.   Because it can use the optional lithium battery this unit can operate in temperatures down to -40 degrees C.
                </p>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p '>
                    <b>Product upgrades may occur without prior notice for quality purposes. </b>
                </p>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img className='img-fluid bprder_image' src='/images/msb1.png' />
                        </div>
                        <div className='col-md-6'>
                            <img className='img-fluid bprder_image' src='/images/msb2.png' />
                        </div>
                        <div className='col-md-6 text-center'>
                            <img className='img-fluid bprder_image' src='/images/msb3.png' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='col-md-12 py-2 text-center background_footer mt-5 '>
                Copyright 2024
            </div>
        </div>
    )
}

export default Msb123