import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"

function Nonind() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4 mb-5  pb-5 '>
                <div className='row'>
                    <div className='col-md-2'>
                        <div className='col-md-12'>
                            <img className='img-fluid width_page' src='/images/me1.jpg' />
                        </div>
                    </div>
                    <div className='col-md-10 m-auto'>
                        <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p '>
                            <b>TL-MEX  Electro Mechanical, Refillable Unit for Hazardous Locations </b>
                        </p>
                        <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-5'>
                            Operating Principle


                            Technolube  MEX is an eco-friendly, single-point lubricator that can be reused by replacing only the grease and battery pack. Like the M series, MEX is designed with a user friendly setting system so that the dispensing rate can be adjusted for optimal lubrication.

                            The circuits and parts are designed based on an energy limitation concept,  using a non-sparking, explosion-proof structure to prevent an electrical device from  igniting gases whether working under normal or certain abnormal conditions.

                            The Technolube MEX design has been tested by UL labs and meets the following requirements:

                            UL79, Power-Operated pumps for Petroleum dispensing products,
                            Eighth Edition ANSI/ISA-12.12.01-2000, Nonincendive electrical equipment for use in Class I and II, Division 2 and Class III, Divisions 1 and 2 Hazardous locations.
                            Setup and settings for these units are the same as those for the M series, with the exception that MEX is for single point use only.
                        </p>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-3'>
                        <div className='col-md-12'>
                            <img className='img-fluid width_page' src='/images/me2.jpg' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='col-md-12'>
                            <img className='img-fluid width_page' src='/images/me3.jpg' />
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

export default Nonind