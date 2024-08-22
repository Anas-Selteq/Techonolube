import React, { useEffect, useState } from 'react'
import "../Header/Header.css"
import { FaCircleRight } from "react-icons/fa6";
import { IoMdReturnRight } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Header() {
    const [switchheader, setSwitchheader] = useState(false)
    const togglerstate = () => {
        setSwitchheader(!switchheader)
    }
    useEffect(() => {
        AOS.init({
            duration: 1700, // Adjust duration (in milliseconds) for the speed
            easing: 'ease-in-out', // Adjust easing if needed
        });
    }, []);




    return (
        <div className='col-md-12 padding_left_right'>
            <div data-aos="zoom-in" className='col-md-12  background_cc py-3 px-4'>
                <div className='row'>
                    <div className='col-md-6 col-8'>
                        <Link to="/" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                            <img className='img-fluid' src='/images/logo.svg' />
                        </Link>
                    </div>
                    <div className='col-md-6 col-3 text-end  m-auto'>
                        <img className='img-fluid' src='/images/burger-m.svg' onClick={togglerstate} />
                    </div>
                </div>
            </div>
            {switchheader &&
                <div className='col-md-12 toggler_page p-md-5 p-3'>
                    <div className='col-md-12 ' >
                        <button className='btn btn-outline-danger px-5 rounded-pill ' onClick={togglerstate}>Close</button>
                    </div>
                    <Link to="/" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="1000" className='col-md-12 mt-3' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> Homepage</p>
                        </div>
                    </Link>
                    <Link to="/compare" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2000" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> Comparison chart</p>
                        </div>
                    </Link>
                    <Link to="/ec1-ec2-ec3" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2500" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> EC1, EC2, & EC3</p>
                        </div>
                    </Link>
                    <Link to="/expl-non-explosive" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2900" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> EXPL Non-Explosive</p>
                        </div>
                    </Link>
                    <Link to="/digital-d1-d2" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2900" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> Digital D1 & D2</p>
                        </div>
                    </Link>
                    <Link to="/m1-m2-m3" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2900" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> M1, M2 & M3</p>
                        </div>
                    </Link>
                    <Link to="/msb1-msb2-msb3" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2900" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> MSB1 and MSB2</p>
                        </div>
                    </Link>
                    <Link to="/plc" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2900" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> PLC-Remote Control</p>
                        </div>
                    </Link>
                    <Link to="/non-incendive" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2900" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> Non incendive MEX</p>
                        </div>
                    </Link>
                    <Link to="/oil-ol500" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2900" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> Oil OL500 & ECO</p>
                        </div>
                    </Link>
                    <Link to="/spring-1" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2900" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> Spring-1</p>
                        </div>
                    </Link>
                    <Link to="/contact-us" className='col-md-12 mt-3' style={{ textDecoration: 'none' }}>
                        <div data-aos="fade-right" data-aos-duration="2900" className='col-md-12 mt-2' >
                            <p className='m-0 p-0 text_header'><IoMdReturnRight /> Contact-us</p>
                        </div>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Header