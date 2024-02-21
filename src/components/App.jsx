// src/components/App.jsx

import Cart from "./Cart";
import { Product } from "./Product";

const cartData = [
  {id:'1_p', title : 'mina', ptitle :'se more', dis:false},
  {id:'2_p', title : 'sina', dis:true},
  {id:'3_p', title : 'dina', ptitle :'poild', dis:false},
  {id:'4_p', title : 'zina', ptitle :'kigil', dis:true}
  
]

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      {/* <Cart title='mina' ptitle='se more' dis={false} />
      <Cart title='sina' dis={true} />
      <Cart title='mina' ptitle='poild' dis={false} />
      <Cart title='sina' ptitle='kigil' dis={true} /> */}


      {cartData.map((cart) => {
        return (
          <Cart key={cart.id}
            title={cart.title}
            ptitle={cart.ptitle}
            dis={cart.dis}
          
          />
        )
      })}

      {/* <Product
        name="Tacos With Lime"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="<https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640>"
        price={14.29}
      /> */}
    </div>
  );
}






