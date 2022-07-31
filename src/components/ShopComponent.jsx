
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Cart from './Cart';
import ItemCard from './ItemCard';





const ShopComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get(
            "https://backend-reviver.herokuapp.com/products"
          );
          setProducts(res.data);
        } catch (err) {}
      };
      getProducts();
    }, []);


    
  return (
    <section id="shop-wrapper">
        

  
        <Container fluid className=" text-green px-5 py-5">
        <h1 className='pt-4 text-center'>Reviver's Merchandise</h1>
      
          <Row className='justify-content-md-center pt-5'>
            <Col sm={12} md={7}>
              <Row>
            {products.map((item)=>{
            return (
              <ItemCard
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              unit={item.unit}
              item={item}
              key={item.id}
            />
          );
        })}
            </Row>
          </Col>
          <Col sm={12} md={5}>
            <Row>
                <Card>
                <Card.Body>
                <Cart/>
                </Card.Body>
                </Card>
            
            </Row>
          </Col>
                
            
                   
                
    
        </Row>
        

            
        </Container>
        </section>
  )
}

export default ShopComponent