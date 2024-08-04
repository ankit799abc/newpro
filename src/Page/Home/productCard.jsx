import React from 'react'
import './.css';
function ProductCard({product , key , handleOrderClick}) {
  return (
    <div key={key} className="product-card">
        <div className="plan">{product.plan}</div>
        <div className="speed">{product.speed} MBPS</div> 
        <div class="monthly">Effective Monthly Pricing</div>
        <div>{'\u20B9'} <span class="price">{product.price}</span></div>
         <hr class="line"/>
        <div class="feature"><span class="icon"><i class="fas fa-wifi"></i></span> <span className='use'>{product.op1}</span> </div>
        
        <div class="feature"><span class="icon"><i class="fas fa-tv"></i> </span> <span className='use'> OTT @ 99 per month </span> </div>
        
        <div class="feature"><span class="icon"><i class="fas fa-tag"></i> </span> <span className='use'> Pay for 11 months and get 12th month Free</span></div>
        <hr class="line"/>
        <div className='available'> Available in 3,6 and 12 months options</div>
        <div className='charge'> <p>Zero Installation Charges on 6 and 12 months</p><p>No Security Deposit</p></div>
        <button type='button' onClick={() => handleOrderClick(product.plan,product.speed,product.price)} >Order Now</button>
    </div>
  )
}

export default ProductCard