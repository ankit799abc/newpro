import React, { useEffect, useState } from 'react'
import './.css';
import ScrollTrigger from 'react-scroll-trigger';


function Review ({ value, label,show ,showValue }) {
  const [on, setOn]=useState(false);
  console.log(on);
  const ONfun=()=>{
    try{
     if(!on){
      let y=setInterval(() => {
        document.querySelector(`.left${value}`)?.style.setProperty('--leftPercent',Math.ceil((4.72*(100-value))));
        clearInterval(y);
      }, 300); 
     
  
  let counter =0;
  let x=setInterval(() => {
    
    if(show&&counter>showValue || !show && (counter!=0)){
     clearInterval(x);
    }else{
      counter+=1;
      if(show){
      document.getElementById(`number${value}`).innerHTML = counter;    
      }else{
        document.getElementById(`number${value}`).innerHTML = showValue;    
      }
    }
  }, 300); 

  setOn(true);
}
    }catch(error){
     console.log("sdfg")
    }
    }
    const OFFfun = ()=>{
           
    }
 
  return (
      <div className='reviews'> 
     <ScrollTrigger onEnter={()=> ONfun()} onExit={()=> OFFfun()} throttleScroll={10} >
    
   {on && <div className="skill">
      <div className="outer">
        <div className="inner">
          <div id={`number${value}`} style={{"font-weight": "700",
    "color":"#555",
    "font-size": "17px"}}>
              {value}%
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className={`left${value}`}>
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient> 
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round"  style={{"animation": `left${value} 3s linear forwards`}}/>
      </svg>
      
    </div> }
    <div className="rating-label">{label}</div>
    </ScrollTrigger>
    </div>
  )
}

export default Review;