import React from 'react'
import { Container, Row } from 'react-bootstrap'

const SuccessPayment = () => {
  return (
    <section className='wrapper'>
        <Container className=" text-green px-5 py-5">
            <Row >
            <div id="success-container" className='px-5 py-5'> <h1>Payment is successful. Thank you, for your purchase.</h1> </div>
            </Row>
        </Container>
    </section>
 
  )
}

export default SuccessPayment