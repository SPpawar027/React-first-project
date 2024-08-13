import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import axiosInstance from "../utils/axios";

import { Loading } from './Loading';

export const Details = () => {

const [products , setproducts] = useState(null);
const {id}= useParams();
 const getSingleProducts =async ()=>{
      try {
        const {data} = await axiosInstance.get(`/products/${id}`);
        setproducts(data)
        console.log(data)
      }
      catch (error) {
        console.log(error)
      }

      
 }
 useEffect(()=>{
  getSingleProducts();
 },[id])
  return (
      products ? (

    <div className="w-[70%] h-screen flex mt-20 mx-auto overflow-hidden">
      <img
        className='w-[50%] h-[60%]'
        src={ `${products.image}`}
        alt=""
      />

      <div className='m-10 ml-20 '>
        <h1 className='text-4xl font-semibold'>{products.title}</h1>
        <h2 className='opacity-60 mt-4'>{products.category}</h2>
        <h2 className='text-xl font-medium mt-3 text-red-400'>price : $ {products.price}</h2>
        <p className='text-zinc-700 font-light mt-3'> description : {products.description}</p>
        <h3 className='mt-4'> rating : {products.rating.rate}</h3>
      <div className='mt-8'>
      <Link className='px-6 py-4 shadow shadow-black-500/40  hover:bg-blue-200 mr-6 font-semibold '>Edit</Link>
      <Link className='px-6 py-4 shadow shadow-black-500  hover:bg-red-200 font-semibold '>Delete</Link>
      </div>
      </div>
    </div>
  )  : (
      <Loading/>
    )
  );
};
