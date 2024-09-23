import React from 'react'
import Header from '../../Components/Header/Header'
import "../Homepage/Home.css"

function Spring1info() {
    return (
        <div>
            <Header />
            <div className='col-md-12 padding_left_right mt-4'>
                <div className='col-md-12 mt-4 text-center'>
                    <img className='img-fluid  w-100' src='/images/spb1.png' />
                </div>
                <div className='col-md-12 padding_left_right mt-4 mb-5  pb-5 '>
                    <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p '>
                        <b>Operating Principles</b>
                    </p>
                    <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p mb-5'>
                        Technolube S1 spring powered lubricator has a demand-feed system, is not time programmable. Bearings get only as much lubricant as they need.  The natural vacuum created in a bearing (Venturi Action) gently draws the grease into the bearing. When equipment is not operating there is no grease demand, which means that the grease will be rapidly discharged into the bearing housing if there is no back pressure on the unit.

                        <br/><br/>Also, if you have an open bearing located in an open housing (no mechanical seals installed), the lubricator will be
                        discharged very quickly.  Please check the engineering drawings for the item you would like to lubricate, and from the drawings determine if there is sufficient resistance to permit the S1 units to operate correctly as designed.  If
                        any doubt remains then install a more positive Technolube product, from the EC, D or M series.
                    </p>
                    <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p '>
                        <b>Specifications</b>
                    </p>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img className='img-fluid bprder_image' src='/images/spb2.png' />
                            </div>
                            <div className='col-md-6'>
                                <img className='img-fluid bprder_image' src='/images/spb3.png' />
                            </div>
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

export default Spring1info