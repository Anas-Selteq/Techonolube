import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"

function Plc() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4'>

                <div className='col-md-12 mt-4 text-center'>
                    <img className='img-fluid  image_size_red' src='/images/plc1.jpg' />
                </div>
                <div className='row mb-5'>
                    <div className='col-md-3 '>
                        <div className='col-md-12 bprder_image'>
                            <img className='img-fluid  image_size_red' src='/images/pl1.jpg' />
                        </div>
                    </div>
                    <div className='col-md-3 '>
                        <div className='col-md-12 bprder_image'>
                            <img className='img-fluid  image_size_red' src='/images/pl2.jpg' />
                        </div>
                    </div>
                    <div className='col-md-3 '>
                        <div className='col-md-12 bprder_image'>
                            <img className='img-fluid  image_size_red' src='/images/pl3.jpg' />
                        </div>
                    </div>
                    <div className='col-md-3 '>
                        <div className='col-md-12 bprder_image'>
                            <img className='img-fluid  image_size_red' src='/images/pl4.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-12 py-2 text-center background_footer'>
                Copyright 2024
            </div>
        </div>
    )
}

export default Plc