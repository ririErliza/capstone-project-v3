import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";

const PayButton = ({ cartItems }) => {
  const {
    emptyCart
  } = useCart();

  const [isSubmitting, setSubmitting] = useState(false)
   const url= "https://backend-reviver.herokuapp.com"
  
    const handleCheckout = () => {
      setSubmitting(true)
        console.log(cartItems)

        axios
        .post(`${url}/payment/create-checkout-session`, {
            cartItems,
        })
        .then((response) => {
            if (response.data.url) {
            window.location.href = response.data.url;
            }
            emptyCart()
        })
        .catch((err) => console.log(err.message));

        
     
    };
  
    return (
      <>
        <Button className="btn btn-success" onClick={() => handleCheckout()}>
        
        Checkout
        {isSubmitting && (
                  <span className="spinner-border spinner-border-sm ml-3"></span>
        )} </Button>
      </>
    );
  };
  
  export default PayButton;