import { Form, Button, Row, Col, Container,Alert } from 'react-bootstrap'
import { useState} from 'react'


// https://
// POST
// a valid Volunteer is made by the following properties:
// name <-- string
// email <-- string
// phone <-- string | number
// choiceOfJob <-- string
// location <-- string
// duration <-- string  

const VolunteerForm = () => {

    const [isSubmitting, setSubmitting] = useState(false)
    const [isError, setIsError] = useState(false)
    const [Volunteer, setVolunteer] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        choiceOfJob: 'Social Media Manager',
        location:'Depok',
        duration: '3 Months',
      })
    
      
      const submitVolunteer = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        try {
          let response = await fetch(
            'https://reviver-backend.herokuapp.com/volunteers',
            {
              method: 'POST',
              body: JSON.stringify(Volunteer),
              headers: {
                'Content-Type': 'application/json',
               
              },
            }
          )
          if (response.ok) {
         
          
            setVolunteer({
                name: '',
                surname: '',
                email: '',
                phone: '',
                choiceOfJob: 'Social Media Manager',
                location:'Depok',
                duration: '3 Months',
            });

            window.location="/success";
          } else {
            // aww snap!
            setIsError(true)
         
            // I'll not reset the form in this case
          }
        } catch (error) {
          console.log(error)
          setIsError(true)
 
        }
      }

      
    
  return (
    <section className="donation-wrapper">
    <Container className=" text-green px-5 py-5">
    <Row className="justify-content-center my-4">
        <Col xs={12} md={6} className="text-center form-box-volunteer">
      <h2 className='py-4'>VOLUNTEER FORM</h2>
      <div >
      <Form onSubmit={submitVolunteer}>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="type here..."
            value={Volunteer.name}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
              
              setVolunteer({
                ...Volunteer,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Volunteer state property
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
            value={Volunteer.surname}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
              
              setVolunteer({
                ...Volunteer,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Volunteer state property
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
            value={Volunteer.email}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
              
              setVolunteer({
                ...Volunteer,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Volunteer state property
                email: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your phone</Form.Label>
          <Form.Control
            type="tel"
            required
            placeholder="type here..."
            value={Volunteer.phone}
            onChange={(e) => {
            
              setVolunteer({
                ...Volunteer,
                phone: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Role</Form.Label>
          <Form.Control
            as="select"
            required
            value={Volunteer.choiceOfJob}
            onChange={(e) => {
              
              setVolunteer({
                ...Volunteer,
        
                choiceOfJob: e.target.value,
              })
            }}
          >
            <option>Social Media Manager</option>
            <option>Events Organizer</option>
            <option>Administrator</option>
            <option>Field Operator</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
            as="select"
            required
            value={Volunteer.location}
            onChange={(e) => {
              
              setVolunteer({
                ...Volunteer,
        
                location: e.target.value,
              })
            }}
          >
            <option>Depok</option>
            <option>Cilegon</option>
            <option>Bandung</option>
            <option>Jogjakarta</option>
            <option>Semarang</option>
            <option>Surabaya</option>
            <option>Malang</option>
            <option>Lampung</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Duration</Form.Label>
          <Form.Control
            as="select"
            required
            value={Volunteer.duration}
            onChange={(e) => {
              
              setVolunteer({
                ...Volunteer,
        
                duration: e.target.value,
              })
            }}
          >
            <option>3 Months</option>
            <option>4 Months</option>
            <option>5 Months</option>
            <option>6 Months</option>
          </Form.Control>
        </Form.Group>
        <Button className="button-contact mx-5 my-4"  type="submit">
        {isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-3"></span>
        )} 
          Submit
        </Button>
      </Form>

      {isError && <Alert variant="danger">Aww snap, we got an error 😣</Alert>}
      </div >
      </Col>
      </Row>
    </Container>
    
    </section>
  )
}

export default VolunteerForm