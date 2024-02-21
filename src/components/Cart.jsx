import React from 'react'

const Cart = ({title, dis, ptitle='nomim'}) => {
  return (
    <div>
        
        <p>{ptitle}</p>
        <h2>{title} {dis ? <span>BIG SALE</span> : null} </h2>
                  {/* {dis && <span>BIG SALE</span>} */}
        <img src='https://images.immediate.co.uk/production/volatile/sites/3/2023/07/rev-1-BAR-TT3-0104HighResJPEG-49dab5f-e1689870020914.jpeg?quality=90&resize=980,654' alt='' width="480" />
    </div>
  )
}

export default Cart