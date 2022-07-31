import React from "react";
import { Button } from "react-bootstrap";
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
  className="d-inline-block align-top ml-3"
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
          <table className="table table-light table-hover m-0">
            <tbody>
              <tr>
                <td style={{ padding: "0px 100px 0px 10px" }}>
                  <b>Product</b>
                </td>
                <td style={{ padding: "0px 100px 0px 10px" }}>
                  <b>Name</b>
                </td>
                <td style={{ padding: "0px 50px 0px 0px" }}>
                  <b>Price($)</b>
                </td>
                <td style={{ padding: "0px 50px 0px 0px" }}>
                  <b>Quantity</b>
                </td>
              </tr>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        style={{ color: "red", fontWeight:"700" }}
                        className="btn btn-light btn-sm mr-1"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        –
                      </button>
                      <button className="btn btn-light btn-sm" style={{ }}>
                      {item.quantity}
                      </button> 
                      
                      <button
                        style={{ color: "green", fontWeight:"700" }}
                        className="btn btn-light btn-sm ml-1"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>
                      
                      
                      <Button
                        className="btn btn-light btn-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <MdDeleteForever style={{ fontSize:"1.5em",color: "red" }}/>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <hr />
        <br />
        {/* <div> */}
        <div id="cart-footer">
        <div className="col-auto ms-auto">
          <h3>Total Price: $ {cartTotal}</h3>
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
