import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './components/Home';
import { Details } from './components/Details';
import Create from './components/Create';

function App() {
    const {search, pathname}= useLocation();
   
  return (
    <div className="w-screen h-screen ">
        {(pathname != "/" || search.length > 0 ) && 
        
        <Link className= " text-red-300 absolute left-[22%] top-3" to="/">
          Home
        </Link>
        
        }


      <Routes>
        <Route  path='/Create' element={<Create/>} />
        <Route path="/" element={<Home/>}/>
        <Route path='/Details/:id' element={<Details/>}/>
      </Routes>
      </div>
  );
}
export default App;
