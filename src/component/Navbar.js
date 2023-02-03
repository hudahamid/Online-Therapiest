import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
   return (
    <nav  className=" px-5 py-5  bg-[#EAF8F9] ">
      <div >
      <ul className="flex   justify-evenly">
        
        <li >
          <Link
            to="/" >
            Home
          </Link>
        </li>

        <li >
          <Link
            to="/blogs" 
          >
            Blogs
          </Link>
        </li>

        <li >
          <Link
            to="/contactUs" 
          >
           Contact
          </Link>
        </li>
        <li >
          <Link
            to="/about" 
          >
           About
          </Link>
        </li>
        
        </ul>
        </div>
 </nav>
  );
}

export default NavBar;
