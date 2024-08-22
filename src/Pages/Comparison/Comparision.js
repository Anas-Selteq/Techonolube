import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"

function Comparision() {
    return (
        <div>
            <Header />
            <div className='col-md-12 mt-4 padding_left_right'>
                <h2 className='text-center mt-2 mb-3'><b>Working for you 24/7</b></h2>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p'>
                    ou can select the specifications which fit the dispense rate mandated for your equipment, and the number of bearings to be served
                    whether individually with an electrochemical single point unit (EC and D series) or with refillable M series single or multipoint units. The M series use prefilled grease pouch replacements in service packs also containing a new battery (alkaline or lithium as required).
                    The prefilled pouch is clean, fast and simple to install and eliminates the need for storage of grease and grease-gun use on site with
                    more safety concerns and workplace hazard.
                </p>
                <div className='row mt-3'>
                    <div className='col-md-6'>
                        <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p'>
                            <b>Technolube Automatic Grease Lubrication - Model Comparison.</b>
                        </p>
                        <img className='img-fluid bprder_image' src='/images/c1.png' />
                    </div>
                    <div className='col-md-6'>
                        <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p'>
                            <b>Technolube Automatic Grease Lubrication - Model Comparison.</b>
                        </p>
                        <img className='img-fluid bprder_image' src='/images/c1.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comparision