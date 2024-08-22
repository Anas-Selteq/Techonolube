import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"

function M123() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4 mb-5  pb-5 '>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p '>
                    <b>Models TL-M1 125cc  TL-M2 250cc and TL-M3 500cc,  also MEX models. </b>
                </p>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-5'>
                    Included in the price of the initial unit - the installed service pack (grease pouch
                    waterproof cover and batteries) -  ready to go.

                    Electro-mechanically controlled, these units can be used as single point lubricators OR with a divider block to supply up to eight bearings. Setting is simple with the large digital display.

                    All are refillable with a service pack available containing all necessary replacement parts, including the grease pouch prefilled with  your grease of choice.  Almost any grease or lubricant can be used. The grease pouch and batteries  are RECYCLABLE  when empty and replaced by the new service pack refills.

                    An additional advantage for colder regions - with the optional Lithium Battery Pack  the unit will operate at -40 degrees C.
                </p>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p '>
                    <b>Product upgrades may occur without prior notice for quality purposes. </b>
                </p>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='img-fluid' src='/images/m1.png' />
                        </div>
                        <div className='col-md-4'>
                            <img className='img-fluid' src='/images/m2.png' />
                        </div>
                        <div className='col-md-4 text-center'>
                            <img className='img-fluid' src='/images/m3.jpg' />
                        </div>
                        <div className='col-md-12 text-center mt-5'>
                            <img className='img-fluid' src='/images/m4.jpg' />
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

export default M123