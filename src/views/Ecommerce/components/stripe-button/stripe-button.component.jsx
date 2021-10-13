import React, { useState, useEffect } from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
// import { StripeProvider } from '@stripe/stripe-react-native';


const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="http://localhost:3000/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);
const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JXYYDKN8IGQftpF6e93YnysaLB1TJHdffQc9M2ZXdYOf3B282WwyHireoc9t2oa6LGkheEPWpe9lfu7fvgFfVX000nUSfB4vJ';

  const onToken = token => {
      axios({
        url: 'create-checkout-session',
        method: 'post',
        data: {
          amount: priceForStripe,
          token: token
        }
      })
        .then(response => {
          alert('succesful payment');
        })
        .catch(error => {
          console.log('Payment Error: ', error);
          alert(
            'There was an issue with your payment! Please make sure you use the provided credit card.'
          );
        });
    };

    const [message, setMessage] = useState("");
      useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
          setMessage("Order placed! You will receive an email confirmation.");
        }
        if (query.get("canceled")) {
          setMessage(
            "Order canceled -- continue to store around and checkout when you're ready."
          );
        }
      }, []);

 return message ? (

     <Message message={message} />
  ) : (
    <ProductDisplay />
     );
  };

export default StripeCheckoutButton;





// import React from 'react';
// import ReactDOM from "react-dom";
// import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
//
// toast.configure();
//
//
// const StripeCheckoutButton = ({ price }) => {
//   const priceForStripe = price * 100;
//   const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';
//
//   const onToken = token => {
//       axios({
//         url: 'payment',
//         method: 'post',
//         data: {
//           amount: priceForStripe,
//           token: token
//         }
//       })
//         .then(response => {
//           alert('succesful payment');
//         })
//         .catch(error => {
//           console.log('Payment Error: ', error);
//           alert(
//             'There was an issue with your payment! Please make sure you use the provided credit card.'
//           );
//         });
//     };
//
//
//     const [product] = React.useState({
//         name: "Tesla Roadster",
//         price: 64998.67,
//         description: "Cool car"
//       });
//
//       async function handleToken(token, addresses) {
//         const response = await axios.post(
//           "https://ry7v05l6on.sse.codesandbox.io/checkout",
//           { token, product }
//         );
//         const { status } = response.data;
//         console.log("Response:", response.data);
//         if (status === "success") {
//           toast("Success! Check email for details", { type: "success" });
//         } else {
//           toast("Something went wrong", { type: "error" });
//         }
//       }
//
//  return (
//      <div>
//      <div>
//      <StripeCheckout
//          label='Pay Now'
//          name='Drywall Magana'
//          billingAddress
//          shippingAddress
//          image=
//          // 'https://svgshare.com/i/CUz.svg'
//          'https://files.stripe.com/links/MDB8YWNjdF8xSlhZWURLTjhJR1FmdHBGfGZsX3Rlc3RfcHlEMEhMTFFHV29qZ2xRR3dWamhaWDdp00J13ks60E'
//          description={`Your total is $${price}`}
//          amout={priceForStripe}
//          panelLabel='Pay Now'
//          token={onToken}
//          stripeKey={publishableKey}
//      />
// </div>
//
//      <div className="container">
//            <div className="product">
//              <h1>{product.name}</h1>
//              <h3>On Sale · ${product.price}</h3>
//            </div>
//            <StripeCheckout
//              stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
//              token={handleToken}
//              amount={product.price * 100}
//              name="Tesla Roadster"
//              billingAddress
//              shippingAddress
//            />
//          </div>
//          </div>
//      );
//   };
//
// export default StripeCheckoutButton;
