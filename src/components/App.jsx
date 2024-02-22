// src/components/App.jsx

import Cart from "./Cart";
import { Product } from "./Product";
import { HiUser } from "react-icons/hi";
import { ImMusic } from "react-icons/im";

const cartData = [
  {id:'1_p', title : 'mina', ptitle :'se more', dis:false},
  {id:'2_p', title : 'sina', dis:true},
  {id:'3_p', title : 'dina', ptitle :'poild', dis:false},
  {id:'4_p', title : 'zina', ptitle :'kigil', dis:false}
  
]








export default function App() {
  return (
    <>
      <h1>Best selling</h1>

      {/* <Cart title='mina' ptitle='se more' dis={false} />
      <Cart title='sina' dis={true} />
      <Cart title='mina' ptitle='poild' dis={false} />
      <Cart title='sina' ptitle='kigil' dis={true} /> */}

<HiUser className="my-icon" size="24" />
    
<ImMusic color="teal" size="64"/>

      {cartData.map((cart) => {
        return (
          <Cart key={cart.id}
            title={cart.title}
            ptitle={cart.ptitle}
            dis={cart.dis}
          
          />
        )
      })}

     {/* <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert> */}
  

      {/* <Product
        name="Tacos With Lime"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="<https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640>"
        price={14.29}
      /> */}
    </>
  );
}






