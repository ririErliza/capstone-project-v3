import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import logo from '../img/logo.png';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    
<section className='footer-wrapper' id='footer'>
    <Container className='px-5 py-5'>
      <Row id='footer-row'>
          <Col xs={12} md={4}>
        
              <ul className='ul-footer'>
                <li>
                  <img
                  src={logo}
                  width="auto"
                  height="50"
                  alt="reviver logo"
                  className='footer-logo'
                />
                </li>
                <li>
                  <p className='text-light text-small'>We are a group of people who want to contribute to preserve our environment by reducing, reusing, and recyling waste products.</p>
                </li>
              </ul>
              
              <ScrollToTop smooth/>
          </Col>
          <Col xs={12} md={4}>
            <ul className='ul-footer'>
            <p>Address</p>
              <li className='pb-2'><FiMapPin size='25px'/> <span className='ml-2'>Jl. Imam Bonjol 10, Depok </span></li>
              <li className='pb-2'><BsTelephone size='25px'/> <span className='ml-2'>+62 821 8989 8989</span></li>
              <li><AiOutlineMail size='25px'/> <span className='ml-2'>info@reviver.org</span></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <ul className='ul-footer'>
              <li className='pb-3'><Link to="/aboutUs" className='text-white'> About Us </Link> </li>
              <li className='pb-3'><Link to="/donationForm" className='text-white'> Donate</Link></li>
              <li className='pb-3'><Link to="/volunteerForm" className='text-white'> Volunteer</Link></li>
              <li className='pb-3'><Link to="/addresslist" className='text-white'>Drop Points</Link></li>
            </ul>
          </Col>
      </Row>
    

    </Container>
    <div className="custom-shape-divider-top-1655298418">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
    </div>
</section>

  
  )
}

export default Footer