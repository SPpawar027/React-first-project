import React, { useContext } from 'react';
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [products] = useContext(ProductContext);
  let dist_cat =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  dist_cat = [...new Set(dist_cat)];
  console.log(dist_cat);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()} , ${(
      Math.random() * 255
    ).toFixed()} ,${(Math.random() * 255).toFixed()} , 0.4)`;
  };
console.log(color())
  return (
    <nav className=" w-[20%] flex flex-col px-4 fixed item-center h-screen bg-zinc-300 ">
      <a
        className="m-2 p-2  h-fit mt-5 bg-white text-center text-red-300 font-medium border-[1px] border-red-300"
        href="#"
      >
        Add To Card
      </a>
      <hr className="bg-black w-[90%] ml-5" />
      <h1 className="text-xl font-semibold ml-10 mt-4">Category Filter</h1>
      <div className="w-[90%] ">
        {dist_cat.map((p, i) => (
          <Link
            key={i}
            to={`/?category=${p}`}
            className="ml-10 mt-2 inline-block"
          >
            <span style={{backgroundColor: color()}} className="w-3 h-3 rounded-full mr-2 inline-block"></span>
            {p}
          </Link>
        ))}
      </div>
    </nav>
  );
};
