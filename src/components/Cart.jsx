import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { MdDeleteForever } from "react-icons/md";
import shoppingCart from '../img/shopping-cart.png';
import {useNavigate } from 'react-router-dom'
import PayButton from "./PayButton";

const Cart = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("token")

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return <><img
  src={shoppingCart}
  width="630"
  height="auto"
  className="img-fluid align-top ml-3"
  alt="reviver logo"
/> <h4 className="text-center text-secondary"> Cart is empty</h4></>
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {/* {console.warn(items)} */}
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h5>
          <br />
          
              {items.map((item, index) => {
                return (
                  <Card key={index} className="my-2">
                    <Card.Body>
                    <p style={{fontSize: "0.9rem" }}>{item.title}</p>
                      <Row>
                        <Col xs={12} md={4} className="text-center">
                        
                          <img src={item.img} style={{ height: "4rem" }} alt="" />
                          
                        
                        </Col>
                        <Col xs={12} md={4} className="text-center"> 
                          <Card.Text style={{ fontSize:"1.3rem" }}> $ {item.price} </Card.Text>
                          <Button
                              style={{ fontWeight:"700",fontSize:"0.7rem" }}
                              className="btn btn-light btn-sm mr-1"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              –
                            </Button>
                            <Button className="btn btn-light btn-sm" style={{ fontSize:"0.7rem"}}>
                            {item.quantity}
                            </Button> 
                            
                            <Button
                              style={{ fontWeight:"700",fontSize:"0.7rem" }}
                              className="btn btn-light btn-sm ml-1 mr-1"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </Button>
                        
                        </Col>
                        <Col xs={12} md={4} className="text-center mt-3">
                            

                            <Button
                              className="btn btn-light btn-sm"
                              onClick={() => removeItem(item.id)}
                            >
                              <MdDeleteForever style={{ fontSize:"1.3em",color: "red" }}/>
                        </Button>
                            
                        </Col>
                      </Row>
                    
              
                    </Card.Body>
                </Card>
                );
              })}
            
        </div>
        <hr />
        <br />
        {/* <div> */}
        <div id="cart-footer">
        <div className="col-auto ms-auto">
          <h3 className="text-center">Total Price: $ {cartTotal}</h3>
        </div>
        <div className="col-auto ms-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          {/* <Button onClick={() => navigate('/orders')}>Checkout</Button> */}
          {user?(
          <PayButton cartItems={items}/>
          ) : (
          <button className="btn btn-success m-2" onClick={() => navigate("/login")}>
            Login to checkout
          </button>
            )}
        </div>
        </div>
        
        {/* </div> */}
      </div>
    </section>
  );
};

export default Cart;
