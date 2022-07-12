import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FaWpforms} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'
import { MdDoneOutline} from "react-icons/md"

const How = () => {
  return (
    <section className="how-wrapper" id="how">
        <Container className='px-5' >
        

            <h1 className='title-section text-center text-green pb-5'>How it works</h1>
        
        <Row className='text-center text-green py-4'>
            <Col md={4} className='center-div'>
                
                    <div className="icon-circle"> <FaWpforms color='#17817f' size='50px'/></div>  
                    <h5 className='pt-3'>Step 1</h5>
                   <p>Fill the "donation form" here</p> 
                
        
            </Col>

            <Col md={4} className='center-div'>
               
                 <div className="icon-circle"> <FiSend color='#17817f' size='50px'/></div>  
                    <h5 className='pt-3'>Step 2</h5>
                  <p>Send the shoes here</p> 
               
        
            </Col>

            <Col md={4} className='center-div'>
                
               <div className="icon-circle"><MdDoneOutline color='#17817f' size='50px'/></div> 
                    <h5 className='pt-3'>Step 3</h5>
                   <p>Done! Thank you for your contribution</p> 
              
        
            </Col>
            
        </Row>
        
        <Row>
            <Col md={12}> <p className="text-small text-green2 text-center pb-4">What happen afterwards? After we receive the shoes from donors, we will repair those that can be repaired and distribute them to those in needs.
        <br />   For irreparable shoes, we will dismantle them and sort the materials, then send them to recycling facilities.</p></Col>
        </Row>
        
            
   
    </Container>
    </section>
    
  )
}

export default How