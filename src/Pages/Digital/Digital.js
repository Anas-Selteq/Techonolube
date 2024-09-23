import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"

function Digital() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4 mb-5  pb-5 '>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p '>
                    <b>Single point digital display TL-D1 125cc and TL-D2 250cc </b>
                </p>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-5'>
                    The single point digital display TL-D1 125cc and TL-D2 250cc  can be mounted directly on to the bearing, or on a bracket up to 3 ft. away, using an extension tube and fittings.  This  cuts down on time spent by personnel in servicing the bearing under possibly hazardous conditions.  These units can be located outdoors.  Weather-proof within the temperature range of -20C to +50C.
                </p>
                <div className='col-md-12 text-center '>
                    <img className='img-fluid' src='/images/10.jpg' />
                </div>
            </div>
            <div className='col-md-12 py-2 text-center background_footer mt-5 '>
                Copyright 2024
            </div>
        </div>
    )
}

export default Digital