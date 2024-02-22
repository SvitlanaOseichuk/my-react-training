import React from 'react'
import css from './Cart.module.css';
import clsx from 'clsx';
import { FcLikePlaceholder } from "react-icons/fc";

// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };

const Cart = ({title, dis, ptitle='nomim'}) => {

  // const classes = [css.cart, dis ? css.CartProm : ""]
  return (
    <div className={clsx(css.cart, {[css.CartProm]: dis})}>
    
    {/* // <div className={classes.join(" ")}> */}
      <FcLikePlaceholder size="24"/>
        <p 
        // style={{
        //   borderRadius: 30, borderColor:'blue', backgroundColor:'gray', color:"#DDDkkD",}} 
        >{ptitle}</p>
        <h2 className={css.cart} >{title} {dis ? <span> <img src="https://www.care.com/c/wp-content/uploads/sites/2/2023/07/barbie-movie.jpeg.optimal.jpeg" alt='' width="480" />BIG SALE</span> : null} </h2>
                  {/* {dis && <span>BIG SALE</span>} */}
        <img src='https://images.immediate.co.uk/production/volatile/sites/3/2023/07/rev-1-BAR-TT3-0104HighResJPEG-49dab5f-e1689870020914.jpeg?quality=90&resize=980,654' alt='' width="480" />
    </div>
  )
}

export default Cart