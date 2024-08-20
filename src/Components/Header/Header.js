import React from 'react'
import "../Header/Header.css"

function Header() {
    return (
        <div className='col-md-12 padding_left_right'>
            <div className='col-md-12 background_cc py-3 px-4'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src='/images/logo.svg' />
                    </div>
                    <div className='col-md-6 text-end  m-auto'>
                        <img className='img-fluid' src='/images/burger-m.svg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header