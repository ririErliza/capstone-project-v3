
import { Form, Button, Row, Col, Container, Alert} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

// https://
// POST
// a valid Donation is made by the following properties:
// name <-- string
// email <-- string
// phone <-- string | number
// numberOfShoes <-- string | number
// dropPoints <-- string

const LoginForm = () => {

  const [isSubmitting, setSubmitting] = useState(false)
  const [isError, setIsError] = useState(false)

  const [Login, setLogin] = useState({
    email: '',
    password:'',
  })

  
  const submitLogin = async (e) => {
    e.preventDefault()
    setSubmitting(true)
   
    e.preventDefault();
    axios
    .post("https://backend-reviver.herokuapp.com/users/login",{
      email:Login.email,
      password:Login.password,
    })
    .then((res)=>{
      localStorage.setItem("token", res.data.accessToken);
      setSubmitting(true);
      window.location="/shop";
    })
    .catch((err)=>{
    console.error(err);
    setIsError(true)
  })
    
    }

  return (
    <section className="login-wrapper">
    <Container className="px-5 py-5">
    <Row className="justify-content-center my-4">
     
        <Col xs={12} md={6} className="text-center form-box-login">
       
      <h2 className='py-4'>LOGIN</h2>
      <div >
      <Form onSubmit={submitLogin}>
        
        
        <Form.Group>
          <Form.Label>Your email</Form.Label>
          <Form.Control
            
            type="text"
            required
            placeholder="type here..."
            value={Login.email}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
              
              setLogin({
                ...Login,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Login state property
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
            value={Login.password}
            onChange={(e) => {
            
              setLogin({
                ...Login,
                password: e.target.value,
              })
            }}
          />
        </Form.Group>

        
        <Button disabled= {isSubmitting} className="button-contact mb-1 mb-sm-0 mx-5 my-4 btn-sm" type="submit">
        {isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-3"></span>
        )} 
        Login
        </Button>

        <Form.Group className='mb-4'>
          <h6 className='my-3 mt-md-4'>New here?</h6>
          <Link to="/signup">
						<Button id="button-signup" className='btn-sm mb-4'>
							Sign Up
						</Button>
					</Link>
        </Form.Group>
      </Form>

      {isError && <Alert variant="danger">Aww snap, we got an error 😣</Alert>}
      </div>
     
      </Col>
      </Row>
    </Container>
    </section>
  )
}

export default LoginForm
