import React, { useContext } from 'react';
import { Nav } from './Nav';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { Loading } from './Loading';

export const Home = () => {
  const [products] = useContext(ProductContext);
  

  return (
    products ? 
    <>
      <div >
        <Nav  /> 
        <div className="w-[80%] pt-10 mb-4 pl-4 h-screen ml-[20%] overflow-y-auto flex flex-wrap">
          {products.map((p , i)=>{
          return(
          <Link key={i}
            to={`/Details/${p.id}`}
            className="w-[230px] h-[220px]  shadow shadow-black-400  cursor-pointer flex flex-col items-center  justify-center  bg-white mt-5 ml-2"
          >
            <div
              className=" w-40 h-40 mb-3 bg-contain bg-no-repeat hover:scale-110 duration-500 object-cover ml-10   "
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
