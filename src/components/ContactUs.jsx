import { Col, Container, Row} from 'react-bootstrap';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare, FaLinkedin} from "react-icons/fa";
import { useLayoutEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';


const ContactUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0,0)
})
const [isSubmitting, setSubmitting] = useState(false)
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true)

    emailjs.sendForm('gmail', 'template1', form.current, 'HmZUwb2_em0hFDGw7')
      .then((result) => {
          console.log(result.text);
          setSubmitting(false)
          alert('Message Sent!')
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };



  return (
    <section className="contact-wrapper">
          <Container className='px-5 py-5'>

            <div id="cu-background"></div>

            <h1 className='title-section text-center text-green pb-5'>Contact Us</h1>

            <Row >
              <Col xs={12} md={12} className="text-green center-div text-center">
                  
                  <div className="form-cu">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className='input-row'>
                      <label>Name</label>
                      <input type="text" name="user_name" />
                    </div>
                  
                    <div className='input-row'>
                      <label>Email</label>
                      <input type="email" name="user_email" />
                    </div>

                    <div className='input-row'>
                      <label>Message</label>
                      <textarea name="message" />
                    </div>
                 
                  <button type="submit" className='button-contact'>
                  {isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-3"></span>
                  )}
                  Send
                  </button>
                  
      

                  </form>
                
                  
                  </div>
                
              </Col>

              <Col xs={12} md={12} className="text-green d-flex justify-content-center pt-5">
            
                <div className='mr-2'> <FaFacebookSquare color='#087776' size='4rem'/> </div>
                <div className='mr-2'> <FaInstagramSquare color='#087776' size='4rem'/></div>
                <div className='mr-2'> <FaLinkedin color='#087776' size='4rem'/> </div>
                <div className='mr-2'> <FaWhatsappSquare color='#087776' size='4rem'/> </div>
                
              </Col>

             
            </Row>
      </Container>
    </section>
  )
}

export default ContactUs