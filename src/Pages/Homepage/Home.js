import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import "./Home.css"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {

  useEffect(() => {
    Aos.init({
      duration: 1700, // Adjust duration (in milliseconds) for the speed
      easing: 'ease-in-out', // Adjust easing if needed
    });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const navigate = useNavigate();

  const toplc = () => {
    navigate('/plc'); // Navigate to the /abc route
  };
  const tomsb = () => {
    navigate('/msb1-msb2-msb3'); // Navigate to the /abc route
  };

  const tooil500 = () => {
    navigate('/oil-ol500'); // Navigate to the /abc route
  };

  const digitald1 = () => {
    navigate('/digital-d1-d2'); // Navigate to the /abc route
  };
  const toec1 = () => {
    navigate('/ec1-ec2-ec3'); // Navigate to the /abc route
  };

  const tospring1 = () => {
    navigate('/Spring-1'); // Navigate to the /abc route
  };

  const tomannual = () => {
    navigate('/Mannual'); // Navigate to the /abc route
  };

  const tomexdet = () => {
    navigate('/Mexdetail'); // Navigate to the /abc route
  };

  const totcel = () => {
    navigate('/Tcel'); // Navigate to the /abc route
  };

  const tom1m2det = () => {
    navigate('/M1m2det'); // Navigate to the /abc route
  };


  return (
    <div className={`col-md-12 `}>
      <Header />
      <div className='col-md-12 padding_left_right mt-5'>
        <Carousel responsive={responsive}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
          draggable={true}
          infinite={true}
          autoPlay={true}
          customTransition="all 2s"
          transitionDuration={2000}
          autoPlaySpeed={4000}
        >
          <div>
            <img className='img-fluid w-100 rounded' src='/images/bannerc11.png' />
          </div>
          <div>
            <img className='img-fluid w-100' src='/images/bannercc2.png' />
          </div>
          <div>
            <img className='img-fluid w-100' src='/images/bannercc3.png' />
          </div>
        </Carousel>
      </div>
      <div className='col-md-12 padding_left_right mt-5'>
        <p data-aos="fade-right" data-aos-duration="1500" className='font_for_p'>
          Technolube Inc. is a Richmond BC based company, specializing in providing reliable and user friendly automatic lubricators with your choice of grease fill, and user-fillable oil units.  Our lubricators are also available with stock greases (EP0, EP1 and EP2 types) shipped next day or better.  Some food grade greases or specialty lubricant greases may take a little longer, but we will do our best to ship your lubricators containing the grease specified for your equipment in the shortest possible time, ready to go.
        </p>
        <p data-aos="fade-right" data-aos-duration="2000" className='font_for_p'>
          Electronically controlled lubrication has many advantages over the manual grease gun. Your lubricant is delivered in the precise amounts set up during installation of the lubricator.You enjoy better performance and longer machinery life (up to 48% longer), while reducing safety concerns and maintenance costs. The lubricator excludes air so there is less opportunity for hardening of grease in the bearing.
        </p>
        <p data-aos="fade-right" data-aos-duration="2500" className='font_for_p'>
          The units we supply start with the very user friendly single point Econo series and digital display D series, plus electromechanicals which can serve one or up to eight  bearings, explosion-proof versions for hazardous locations, user-fillable oil dispensers and the machine synchronized battery or external powered/remote control units.  For more  information please select the images below,  or use the model comparison/dispense rate chart button below to find the one(s) best suited to your equipment and ambience.
        </p>
        <p data-aos="fade-right" data-aos-duration="2900" className='font_for_p'>
          Grease brands in stock include Chevron, Dow, Lubriplate, Mobil, PetroCanada, Shell, Swepco and others.
        </p>
        <p data-aos="fade-right" data-aos-duration="2900" className='font_for_p m-0 p-0'>
          Currently our lubricators are being used in a variety of industries and locations including:
        </p>
        <div className='row'>
          <div data-aos="zoom-in-right" data-aos-duration="1500" className='col-md-3 col-6 mt-md-0 mt-3'>
            <p className='font_for_p m-0 p-0'>
              Lumber Mills
            </p>
            <p className='font_for_p m-0 p-0'>
              Paper Manufact
            </p>
            <p className='font_for_p m-0 p-0'>
              Overhead Cranes
            </p>
            <p className='font_for_p m-0 p-0'>
              Ski lifts
            </p>
            <p className='font_for_p m-0 p-0'>
              Escalators...
            </p>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="2000" className='col-md-3 col-6 mt-md-0 mt-3'>
            <p className='font_for_p m-0 p-0'>
              Freight Terminals
            </p>
            <p className='font_for_p m-0 p-0'>
              Wastewater Plants
            </p>
            <p className='font_for_p m-0 p-0'>
              Glass Manufacturing
            </p>
            <p className='font_for_p m-0 p-0'>
              Wind turbines
            </p>
            <p className='font_for_p m-0 p-0'>
              HVAC Installations
            </p>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="2500" className='col-md-3 col-6 mt-md-0 mt-3'>
            <p className='font_for_p m-0 p-0'>
              Food Processing
            </p>
            <p className='font_for_p m-0 p-0'>
              Ferries
            </p>
            <p className='font_for_p m-0 p-0'>
              Carwashes
            </p>
            <p className='font_for_p m-0 p-0'>
              Mining operations
            </p>
            <p className='font_for_p m-0 p-0'>
              and more.
            </p>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="2900" className='col-md-3 col-6 mt-md-0 mt-3'>
            <p className='font_for_p m-0 p-0'>
              Cement Plants
            </p>
            <p className='font_for_p m-0 p-0'>
              Conveyors
            </p>
            <p className='font_for_p m-0 p-0'>
              Breweries
            </p>
            <p className='font_for_p m-0 p-0'>
              Quarries
            </p>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-duration="1000" className='col-md-12  text-center mt-5  mb-3'>
          <Link to="/compare">
            <button className='btn btn-danger py-3 px-5 button_color'> Click for model features comparison and dispense rates </button>
          </Link>
        </div>
        <div className='col-md-12 mt-5 mb-5'>
          <div className='row'>
            <div data-aos="flip-left" data-aos-duration="2000" className='col-md-2 mt-md-0 mt-4 cursor_pointer_for_images' onClick={toplc}>
              <div className='col-md-12 py-3 text-center backgound_card_image_color'>
                <img className='img-fluid image_height_w mb-3' src='/images/1.jpg' />
                <p className='m-0 p-0 title_text'>PLC-PLC controlled remotely monitored.</p>
                <p className='m-0 p-0 sub_title_text'>60cc, 120cc, 240cc, 480cc</p>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className='col-md-2 mt-md-0 mt-4 cursor_pointer_for_images' onClick={tomsb}>
              <div className='col-md-12 py-3 text-center backgound_card_image_color'>
                <img className='img-fluid image_height_w mb-3' src='/images/2.jpg' />
                <p className='m-0 p-0 title_text'>MSB battery operated machine synchronized</p>
                <p className='m-0 p-0 sub_title_text'></p>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className='col-md-2 mt-md-0 mt-4 cursor_pointer_for_images' onClick={tomannual}>
              <div className='col-md-12 py-3 text-center backgound_card_image_color'>
                <img className='img-fluid image_height_w mb-3' src='/images/3.jpg' />
                <p className='m-0 p-0 title_text'>MS external powered<br /> machine synchronized</p>
                <p className='m-0 p-0 sub_title_text'></p>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className='col-md-2 mt-md-0 mt-4 cursor_pointer_for_images' onClick={tooil500}>
              <div className='col-md-12 py-3 text-center backgound_card_image_color'>
                <img className='img-fluid image_height_w mb-3' src='/images/4.jpg' />
                <p className='m-0 p-0 title_text'>OL refillable Oil dispenser.</p>
                <p className='m-0 p-0 sub_title_text'>500cc</p>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className='col-md-2 mt-md-0 mt-4 cursor_pointer_for_images' onClick={tomexdet}>
              <div className='col-md-12 py-3 text-center backgound_card_image_color'>
                <img className='img-fluid image_height_w mb-3' src='/images/5.jpg' />
                <p className='m-0 p-0 title_text'>MEX series for hazardous locations</p>
                <p className='m-0 p-0 sub_title_text'>125cc and 250cc</p>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className='col-md-2 mt-md-0 mt-4 cursor_pointer_for_images' onClick={tom1m2det}>
              <div className='col-md-12 py-3 text-center backgound_card_image_color'>
                <img className='img-fluid image_height_w mb-3' src='/images/6.jpg' />
                <p className='m-0 p-0 title_text'>M Mechnical refillable</p>
                <p className='m-0 p-0 sub_title_text'>125cc, 250cc and 500cc</p>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className='col-md-2 mt-md-4 mt-4  cursor_pointer_for_images' onClick={digitald1}>
              <div className='col-md-12 py-3 text-center backgound_card_image_color'>
                <img className='img-fluid image_height_w mb-3' src='/images/7.jpg' />
                <p className='m-0 p-0 title_text'>D (digital) series</p>
                <p className='m-0 p-0 sub_title_text'>125cc and 250cc</p>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className='col-md-2 mt-md-4 mt-4 cursor_pointer_for_images' onClick={toec1}>
              <div className='col-md-12 py-3 text-center backgound_card_image_color'>
                <img className='img-fluid image_height_w mb-3' src='/images/8.jpg' />
                <p className='m-0 p-0 title_text'>Electromechanical Single Point EC Econo Series</p>
                <p className='m-0 p-0 sub_title_text'>60cc, 120cc, 240cc</p>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className='col-md-2 mt-md-4 mt-4 cursor_pointer_for_images' onClick={tospring1}>
              <div className='col-md-12 py-3 text-center backgound_card_image_color'>
                <img className='img-fluid image_height_w mb-3' src='/images/9.jpg' />
                <p className='m-0 p-0 title_text'>Spring powered Single Point TL-S1 100cc size - user refillable, easy operation.</p>
                <p className='m-0 p-0 sub_title_text'>125cc and 250cc</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='col-md-12 py-2 text-center background_footer'>
        Copyright 2024
      </div>
    </div >

  )
}

export default Home; 