import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"
import { Link } from 'react-router-dom'

function Mannual() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4'>

                <div className='col-md-12 mt-4 text-center'>
                    <img className='img-fluid  ' src='/images/man1.png' />
                    <img className='img-fluid  ' src='/images/man2.png' />
                </div>
            </div>
            <div className='col-md-12 py-2 text-center background_footer'>
                Copyright 2024
            </div>
        </div>
    )
}

export default Mannual