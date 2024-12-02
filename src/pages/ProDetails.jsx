import React from 'react'
import ProductsPage from '../components/product/ProductsPage'
import Relates from '../components/product/Relates'

export const ProDetails = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <ProductsPage/>
        <Relates/>
        
        
    </div>
  )
}
export default ProDetails