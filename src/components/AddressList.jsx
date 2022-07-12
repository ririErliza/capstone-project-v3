import { useLayoutEffect} from 'react'
import { Container, Row, Table } from 'react-bootstrap';
import cities from './address.json';

const AddressList = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })
  return (
    <section className='al-wrapper'>
        <Container className='py-3 px-5'>
            <h1 className='text-center text-green mb-5'>List of Address</h1>
                <Row>
                    <Table striped bordered hover size="sm" className='text-center'>
                        <thead >
                            <tr>
                            <th>#</th>
                            <th>Drop Point</th>
                            <th>Address</th>
                            <th>Go to map</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cities.map(city =>(
                            <tr key={city.id}>
                                <td>{city.id}</td>
                                <td>{city.city}</td>
                                <td>{city.address}</td>
                                <td><a target="_blank" rel="noopener noreferrer" href={city.link}>Click here</a> </td>
                            </tr>
                             ))}
                        </tbody>
                    </Table>
                </Row>
        </Container>
    </section>
    
    
  );
}

export default AddressList