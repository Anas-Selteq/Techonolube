import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"

function Oilol() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4 mb-5  pb-5 '>
                <div className='row'>
                    <div className='col-md-2'>
                        <div className='col-md-12'>
                            <img className='img-fluid width_page' src='/images/ol5.gif' />
                        </div>
                    </div>
                    <div className='col-md-10 m-auto'>
                        <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p '>
                            <b>The Technolube refillable OL500 Oil Lubricator </b>
                        </p>
                        <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-0'>
                            consists of the main body with a vertical self-priming pump controlled by the microprocessor, a 500cc oil reservoir, and a battery pack.  The product  delivers precise, very small amounts of lubricant with a selectable intermittent dispensing cycle. Output volume is adjustable from 0.70cc to 33.4cc/day, equivalent to the service period of Half month to 24 months for the 500cc oil reservoir.  It can supply up to 4 feeds by using optional installation kits. Lifetime of the machine is 5 years or more depending on usage and ambience.
                            PLEASE NOTE:  The Technolube OL500 is a user-refillable electro-mechanical unit, but the battery pack MUST be replaced when each dispensing period set is completed.
                            <ul className='mb-1'>
                                <li>An economical solution compared to messy manual lubrication or a high
                                    cost, fully automated lube system.</li>
                                <li>A complete oil lubrication system with optional accessories and remote        installation kits for single point or up to four  points.</li>
                                <li>Easy to check operating status.</li>
                                <li>Oil volume quickly adjustable by the mode setting.</li>
                                <li>Simple to refill the spill-proof oil reservoir.</li>
                                <li>Oil reservoir is compatible with most synthetic oils and chemicals (see usermanual for specifics).</li>
                            </ul>

                        </p>

                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-2'>
                        <div className='col-md-12'>
                            <img className='img-fluid width_page' src='/images/ol6.jpg' />
                        </div>
                    </div>
                    <div className='col-md-10 m-auto'>
                        <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p '>
                            <b>The ECO Oil series units </b>
                        </p>
                        <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-0'>
                             in three sizes - 60cc, 120cc and 240cc - are user fillable, but not reusable once all of the oil has been dispensed.   They can serve only a single bearing.   These units can be fitted with a reusable NRV (non-return valve), or installed upside down without a valve.

                            The ECO will fit in smaller spaces, and is very easy to install and programme.

                            All component parts of the ECOs are recyclable.


                        </p>

                    </div>
                </div>
            </div>
            <div className='col-md-12 py-2 text-center background_footer mt-5 '>
                Copyright 2024
            </div>
        </div>
    )
}

export default Oilol