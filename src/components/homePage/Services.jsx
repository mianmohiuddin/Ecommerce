import React from 'react'
import ServicesCard from './ServicesCard'
function Services() {
  return (
    <div className='flex gap-16'>
       <ServicesCard
       image={"images/Services.png"}
       title={"FREE AND FAST DELIVERY"}
       discription={"Free delivery for all orders over $140"}/>
              <ServicesCard
       image={"images/Services2.png"}
       title={"24/7 CUSTOMER SERVICE"}
       discription={"Friendly 24/7 customer support"}/>
              <ServicesCard
       image={"images/Services3.png"}
       title={"MONEY BACK GUARANTEE"}
       discription={"We reurn money within 30 days"}/>
    </div>
  )
}

export default Services