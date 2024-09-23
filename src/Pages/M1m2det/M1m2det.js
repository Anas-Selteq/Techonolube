import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"
import { Link } from 'react-router-dom'

function M1m2det() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='col-md-12  text-center mt-5  mb-3'>
                    <Link to="/spring-1-info">
                        <button className='btn btn-secondary py-1 px-5 button_color'> Specifications </button>
                    </Link>
                </div>
                <div className='col-md-12 mt-4 text-center'>
                    <img className='img-fluid  ' src='/images/m1m2detail.png' />
                </div>
            </div>
            <div className='col-md-12 py-2 text-center background_footer'>
                Copyright 2024
            </div>
        </div>
    )
}

export default M1m2det