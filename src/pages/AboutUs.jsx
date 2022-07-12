import {useLayoutEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import teams from '../components/teamsPictures.json';
import timeline from '../img/reviver-timeline.png';
import taufan from '../img/Taufan.png';
import agus from '../img/Agus.png';

const AboutUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
})
  return (
    <section className="about-wrapper">

  
        <Container className=" text-green px-5 py-5">
        <h1 className='pt-4 title-section text-center'>About Us</h1>
            <Row className='justify-content-md-center pt-5'>
            
            
                   
                
                    <Col xs={12} md={4} className="text-center">  <img
                      src={taufan}
                      width="200"
                      height="auto"
                      className=" img-fluid "
                      alt="indonesian man"
                      />
                      <div className='text-center'>Taufan, Founder</div>
                      </Col>

                      <Col xs={12} md={4} className="about-title px-4 ">
                        
                        <p className="pt-4 text-justify">We are a group of people with the same goal to create sustainable life, we believe that even the smallest action can really give great impact to our environment. As we see that there is problem with shoes waste decomposition, we start by tackling this problem by establishing Reviver. Since 2017, we have never stopped to work to minimize shoes waste and together with our partners and community, we tackle together one of environment's problem.</p>
        

                    </Col>

                    <Col xs={12} md={4} className="text-center">  <img
                      src={agus}
                      width="200"
                      height="auto"
                      className=" img-fluid"
                      alt="indonesian man"
                      />
                      <div className='text-center'>Agus, Co-Founder</div>
                      </Col>
                
            
                
            </Row>
            <h1 className='title-section text-center py-5'>Our Journey</h1>
            <Row className='center-div timeline'>
            <img
                    src={timeline}
                    width="700"
                    height="auto"
                    className=" img-fluid "
                    alt="timeline"
                    />
            </Row>
            <h1 className='title-section text-center  py-5'>Our Team</h1>
        <Row className='text-center'>
        
        
           {teams.map((teamMember) => (
            <Col xs={6} md={3} key={teamMember.id}>
              <div >
                <img
                    src={teamMember.image}
                    width="150"
                    height="1500"
                    className="img-fluid"
                    alt="teamMember"
                    />
                    <p>{teamMember.name}</p>
            </div>
            </Col>
           ))}
            
           
            
        </Row>
        </Container>
        </section>
  )
}

export default AboutUs