  import React, { createContext, useEffect, useState } from 'react';
 
 import instance from "./axios"

  export const ProductContext = createContext();

  const Context = (props) => {
    const [products, setproducts] = useState(null);
    const getproducts = async () => {
      try {
        const {data} = await instance.get("/products");
        setproducts(data);
 
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getproducts();
    },[]);
    return (
      <ProductContext.Provider value={[products, setproducts]}>
        {props.children}
      </ProductContext.Provider> 
    );
  };


  export default Context;
