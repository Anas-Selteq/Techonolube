import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"

function Ec123() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4'>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-1'>
                    <b>Technolube TL-EC1 60cc,TL-EC2 120cc and TL-EC3 240cc.</b>
                </p>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-1'>
                    The most competitively priced single point lubricator -  easy to programme, reliable
                    and recyclable after use.  Waterproof and compact enough to use in smaller spaces,
                    the 1/4" NPT/BSPT thread allows installation upright directly to a bearing with the
                    corresponding thread.  An adapter can be used  if needed.   For remote installation
                    this unit should be 3 ft (1 metre) or less from the bearing.  (If being used for OIL  lubrication insert special valve or install upside down.)
                </p>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p'>
                    These versatile lubricators are used by large and small industries where a major
                    installation system is impractical, to achieve a similar accuracy in lubrication.
                </p>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-1 mt-3'>
                    <b>Setting the TL-EC series</b>
                </p>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-1'>
                    The intuitive and very simple setting system of the Technolube EC unit  ensures error-free operation with five
                    selectable preset dispensing periods - 1,3,6 9, and 12 months.
                </p>
                <div className='col-md-12 mt-4 '>
                    <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-2 mt-3'>
                        <b>Product Details</b>
                    </p>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='img-fluid' src='/images/p3.png' />
                        </div>
                        <div className='col-md-7'>
                            <img className='img-fluid' src='/images/p4.jpg' />
                        </div>
                    </div>
                </div>
              
            </div>
            <div className='col-md-12 mt-4'>
                    <img className='img-fluid w-100' src='/images/banner.png' />
                </div>
            <div className='col-md-12 py-2 text-center background_footer'>
                Copyright 2024
            </div>
        </div>
    )
}

export default Ec123