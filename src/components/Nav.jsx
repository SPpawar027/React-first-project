import React from "react";


export const Nav = (()=>{
    return (
    
        <nav className=" w-[20%] flex flex-col px-4 item-center h-screen bg-zinc-300 ">
          <a
            className="m-2 p-2  h-fit mt-5 bg-white text-center text-red-300 font-medium border-[1px] border-red-300"
            href="#"
          >
            Add To Card
          </a>
          <hr className="bg-black w-[90%] ml-5" />
          <h1 className="text-xl font-semibold ml-10 mt-4">Category Filter</h1>

          <ul className="w-[90%] ">
            <li className="ml-14 mt-3">
              <span className="w-3 h-3 rounded-full mr-4 bg-red-400 inline-block"></span>
              card 1
            </li>
            <li className="ml-14 mt-2">
              <span className="w-3 h-3 rounded-full mr-4 bg-green-400 inline-block"></span>
              card 1
            </li>
            <li className="ml-14 mt-2">
              <span className="w-3 h-3 rounded-full mr-4 bg-blue-400 inline-block"></span>
              card 1
            </li>
          </ul>
        </nav>
      
    )


})

