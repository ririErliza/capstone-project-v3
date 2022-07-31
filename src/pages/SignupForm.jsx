import React from 'react'
import { Form, Button, Row, Col, Container, Alert} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'


const SignupForm = () => {
    
    const [isSubmitting, setSubmitting] = useState(false)
    const [isError, setIsError] = useState(false)
  
    const [Signup, setSignup] = useState({
        name: '',
        surname:'',
        email: '',
        password:'',
    })
  
    
    const submitSignup = async (e) => {
      e.preventDefault()
      setSubmitting(true)
     
      e.preventDefault();
      axios
      .post("https://backend-reviver.herokuapp.com/users/register",{
        name:Signup.name,
        surname:Signup.surname,
        email:Signup.email,
        password:Signup.password,
      })
      .then((res)=>{
        console.log(res.message);
		alert("Signing Up Successfull! Thank you!")
        setSubmitting(true);
        window.location="/login";
      })
      .catch((err)=>{
      console.error(err);
      setIsError(true)
    })
      
      }
  
    return (
      <section className="donation-wrapper">
      <Container className="px-5 py-5">
      <Row className="justify-content-center my-4">
       
          <Col xs={12} md={6} className="text-center form-box-signup">
         
        <h2 className='py-4'>REGISTRATION</h2>
        <div >
        <Form onSubmit={submitSignup}>
        
            <Form.Group>
                <Form.Label>Your name</Form.Label>
                <Form.Control
                type="text"
                required
                placeholder="type here..."
                value={Signup.name}
                // initially is going to be ''
                onChange={(e) => {
                    console.log(e.target.value)
                    
                    setSignup({
                    ...Signup,
                    // the spread operator is bringing in here all the existing
                    // key/value pairs of the existing Signup state property
                    name: e.target.value,
                    })
                }}
                />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your surname</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="type here..."
              value={Signup.surname}
              // initially is going to be ''
              onChange={(e) => {
                console.log(e.target.value)
                
                setSignup({
                  ...Signup,
                  surname: e.target.value,
                })
              }}
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Your email</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="type here..."
              value={Signup.email}
              // initially is going to be ''
              onChange={(e) => {
                console.log(e.target.value)
                
                setSignup({
                  ...Signup,
                  email: e.target.value,
                })
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="type here..."
              value={Signup.password}
              onChange={(e) => {
              
                setSignup({
                  ...Signup,
                  password: e.target.value,
                })
              }}
            />
          </Form.Group>
  
          
          <Button disabled= {isSubmitting} className="button-contact mb-1 mb-sm-0 mx-5 my-4 btn-sm" type="submit">
          {isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-3"></span>
          )} 
          Sign up
          </Button>
  
         
        </Form>
  
        {isError && <Alert variant="danger">Aww snap, we got an error 😣</Alert>}
        </div>
       
        </Col>
        </Row>
      </Container>
      </section>
    )
  
}

export default SignupForm