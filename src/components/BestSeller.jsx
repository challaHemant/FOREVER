import React ,{ useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Productitem from './Productitem';

const Bestseller = () => {

    const { products } = useContext(ShopContext);
    const [Bestseller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[])
    
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>   
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
            </p>       
        </div>
        <div className='grid grid-cols2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-6'>
            {
                Bestseller.map((item,index)=>(
                    <Productitem key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default Bestseller