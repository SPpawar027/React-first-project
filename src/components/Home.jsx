import React, { useContext } from 'react';
import { Nav } from './Nav';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { Loading } from './Loading';

export const Home = () => {
  const [products] = useContext(ProductContext);
  console.log(products);

  return (
    products ? 
    <>
      <div className="flex overflow-x-hidden ">
        <Nav /> 
        <div className="w-[80%] pt-10 pl-4 h-screen  flex flex-wrap">
          {products.map((p , i)=>{
          return(
          <Link key={i}
            to={`/Details/${p.id}`}
            className="w-60 h-60  shadow shadow-black-400  cursor-pointer flex flex-col items-center  justify-center  bg-white mt-5 ml-2"
          >
            <div
              className=" w-40 h-40 bg-contain bg-no-repeat hover:scale-110 duration-500 object-cover ml-10 mb-3   "
              style={{
                backgroundImage:
                  `url(${p.image})`
              }}
            >
              {' '}
            </div>
            <h2 className="mt-2 opacity-80 hover:text-blue-800 hover:underline">
            {p.title}
            </h2>
          </Link>

          )  

          })}
        </div>
      </div>
    </>
    : ( 
      <Loading/> 
    )
  );
};
