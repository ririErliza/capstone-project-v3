import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => (
  <Container>
    <Row className="justify-content-center">
      <Col className="text-center">
        <h2>404 - Page not found!</h2>
        <p>Retry next time</p>
      </Col>
    </Row>
  </Container>
)

export default NotFound
