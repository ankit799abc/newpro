import React, { useState } from 'react'
import Header from '../Header/header'
import ProductCard from './productCard'
import Review from './review'
import './.css'
import Footer from './footer/Footer.js'
import Servicecard from './servicecard/Servicecard.js'
import Imgslider from './imgslider/Imgslider.jsx'
import Modal from './Modal/Modal.jsx'

const products =[
  {id:1,plan:"Beginners Plan 1",speed:40,price:425,op1:"WiFi Router Free To Use"},
  {id:4,plan:"Binging Plan 2",speed:100,price:525, op1:"5Ghz Dual Band Router Free To Use"},
  {id:3,plan:"WFH Plan",speed:150,price:625, op1:"5Ghz Dual Band Router Free To Use"},
]
const product2=[
  {id:2,plan:"Family Plan 1",speed:200,price:725, op1:"5Ghz Dual Band Router Free To Use"},
  {id:6,plan:"Family Plan 2",speed:250,price:825, op1:"5Ghz Dual Band Router Free To Use"},
  {id:5,plan:"Premium Plan",speed:300,price:925, op1:"5Ghz Dual Band Router Free To Use"},
]
const attributes = [
  { label: 'Active Customers', value: 85 ,show:false,showValue:"2k"},
  { label: 'Total Clients', value: 61 ,show:false,showValue:"2.5k"},
  { label: 'Coverage Area', value: 71 ,show:true,showValue:10},
  { label: 'Years Of Experience', value: 81 ,show:true,showValue:11},
  // Add more attributes as needed
];
function Home() {
  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const handleOrderClick = (plan, speed, price) => {
    setProductDetails({ plan, speed, price });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(productDetails);
    handleCloseModal();
  };

  return (
    <div>
    <Header/>
    
       
      <div class="autoimg">
      <Imgslider/>
      <div class="contact-icons">
      <a href="https://wa.me/9870420711" target="_blank" class="whatsapp-icon">
        <i class="fab fa-whatsapp"></i>
      </a>
      <a href="tel:+7827070883" class="call-icon">
            <i class="fas fa-phone"></i>
      </a>
      </div>
      </div>

     
        <div class="foryou">
           <h1>Which Plan Is Right For You</h1>
           <p className='span'>Connect all your devices and access high speed Internet with ease</p>
        </div>
      

      <div class="product">
      {products?.map((product)=>(
        <ProductCard 
        product={product}
        key={product.id}
        handleOrderClick={handleOrderClick}

        />
      ))}
      </div>
      <div class="product">
      {product2?.map((product)=>(
        <ProductCard 
        product={product}
        key={product.id}
        handleOrderClick={handleOrderClick}
        />
      ))}
      </div>

   <Modal show={showModal} handleClose={handleCloseModal} handleSubmit={handleSubmit} productDetails={productDetails} />
    <div className='review-section'>
      <div className='static'>
        <h1>Statistics</h1>
        <p>Royal Broadband benchmarks of customer experience in the Najafgarh.</p>
      </div>
      <div className='rating'>
      { attributes.map((att)=><Review  value={att.value} label={att.label} show={att.show} showValue={att.showValue}  />)
          }
          </div>
    </div> 

    <div className='review-section'>
      <div className='static'>
        <h1>WHAT MAKES OUR BROADBAND SERVICE BEST?</h1>
        <p>With the power of incredibly fast internet, comes the world of incredible entertainment!</p>
      </div>
      <div className='rating'>
      
      <Servicecard 
          iconClass="fas fa-tachometer-alt" 
          title="Speed" 
          description="Royal broadband allows you to test speed before paying."
        />
        <Servicecard 
          iconClass="fas fa-shield-alt" 
          title="Security" 
          description="We update our network to keep your network protected"
        />
        <Servicecard 
          iconClass="fas fa-headset" 
          title="Support" 
          description="Our support staff happy to assist you"
        />
        <Servicecard 
          iconClass="fas fa-thumbs-up" 
          title="Reliability" 
          description="Enjoy unbeatable internet service with our fiber-optic lines"
        />
      
      </div>
    </div> 
    
 
    <Footer/>
    </div>
  )
}

export default Home