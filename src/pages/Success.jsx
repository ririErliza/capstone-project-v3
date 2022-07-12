import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Success = () => {
  return (
    <section className='wrapper'>
        <Container className=" text-green px-5 py-5">
            <Row >
            <div id="success-container" className='px-5 py-5'> <h1>Thank you, Form Submitted</h1> </div>
            </Row>
        </Container>
    </section>
 
  )
}

export default Success