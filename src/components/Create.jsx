import React, { useContext, useState } from 'react';
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [Title, setTitle] = useState('');
  const [Imagelink, setImagelink] = useState('');
  const [category, setcategory] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');

  const AddProductHandler = e => {
    e.preventDefault();
    if (
      Title.trim().length < 5 ||
      Imagelink.trim().length < 5 ||
      price.trim().length < 1 ||
      category.trim().length < 5 ||
      description.trim().length < 5
    ) {
      alert('each and every input must have atleast 4 characters');
      return;
    }
    const product = {
      id: nanoid(),
      Title,
      Imagelink,
      category,
      price,
      description,
    };

    setproducts([...products, product]);
    localStorage.setItem('products', JSON.stringify(products , product));
    navigate('/');
  };
  console.log(products);

  return (
    <form
      onSubmit={AddProductHandler}
      className="w-[70%] h-[100%] mx-auto mt-10 mb-6 "
    >
      <h1 className=" text-3xl m-3 text-center font-semibold">
        Add New Products
      </h1>
      <input
        onChange={e => setImagelink(e.target.value)}
        type="text"
        placeholder="Image Link"
        value={Imagelink}
        className=" w-[70%] rounded-sm bg-zinc-100 text-xl border  p-2  mt-4 ml-[15%]"
      />
      <input
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        value={Title}
        className=" w-[70%] rounded-sm bg-zinc-100 text-xl border  p-2  mt-4 ml-[15%]"
      />
      <input
        onChange={e => setcategory(e.target.value)}
        type="text"
        placeholder="Category"
        value={category}
        className=" w-[34%] inline rounded-sm bg-zinc-100 text-xl border  p-2  mt-4 ml-[15%]"
      />
      <input
        onChange={e => setprice(e.target.value)}
        type="number"
        placeholder="Price"
        value={price}
        className=" w-[34%] inline  rounded-sm bg-zinc-100 text-xl border  p-2  mt-4 ml-4"
      />
      <textarea
        onChange={e => setdescription(e.target.value)}
        name=""
        className="w-[70%] h-40 bg-zinc-100 ml-[15%] block mt-4 p-4 text-xl rounded-sm"
        id=""
        placeholder="Enter the description of the product"
        value={description}
      ></textarea>
      <button className="m-2 pl-4 pr-4 pt-2 pb-2 h-fit mt-4 ml-[15%] bg-white text-center text-red-300 font-medium border-[1px] border-red-300">
        Add To Card
      </button>
    </form>
  );
};
export default Create;
