import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useCart } from "react-use-cart";

const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <Col xs={6} md={4} className="mb-3" key={props._id}>
                    <Card>
                    <Card.Img variant='top' src={props.img} className='imageProduct' />
                    <Card.Body>
                        <Card.Title className="text-truncate" style={{ color: 'black' }}>
                        {props.title}
                        
                        </Card.Title>
                        <Card.Text>
                        {props.desc}
                        </Card.Text>
                        <Card.Text className='h4'>
                        ${props.price} 
                        <Button  onClick={() => addItem(props.item)} className='btn btn-sm float-right'> 
                            Add to Cart
                        </Button>
                        </Card.Text>
                    
                    
                        
            
                        
                    
                    </Card.Body>
                    </Card>
            </Col>
  )
}

export default ItemCard