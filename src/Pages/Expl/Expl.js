import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"

function Expl() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4'>

                <div className='col-md-12 mt-4 text-center'>
                    <img className='img-fluid  image_size_red' src='/images/b1.jpg' />
                </div>
                <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p'>
                    Technolube Inc. is a Richmond BC based company, specializing in providing reliable and user friendly automatic lubricators with your choice of grease fill, and user-fillable oil units.  Our lubricators are also available with stock greases (EP0, EP1 and EP2 types) shipped next day or better.  Some food grade greases or specialty lubricant greases may take a little longer, but we will do our best to ship your lubricators containing the grease specified for your equipment in the shortest possible time, ready to go.
                </p>
            </div>
            <div className='col-md-12 py-2 text-center background_footer'>
                Copyright 2024
            </div>
        </div>
    )
}

export default Expl