import React from 'react';
import { Link } from 'react-router-dom';
//import NavBarIcon from './NavBarIcon.png';



function NavBar() {
  


  return (
    <nav >
      <div >
        <img
          src={NavBarIcon}
          alt="navbar icon"
          className="w-7 h-10 md:h-full md:w-full"
        />

        <Link
          to="/"
         >
          Healing
        </Link>
      </div>

      {/* Deskop Menu */}
      <ul >
        <li >
          <Link
            to="/"
            onClick={() => setActive('')}
          >
            Home
          </Link>
        </li>

        <li >
          <Link
            to="/blogs" onClick={() => setActive('blogs')}
          >
            Blogs
          </Link>
        </li>

        <li >
          <button
            type="button"
           
          >
            About <i  />
            
          </button>
        </li>

        <li >
          <Link
            to="/contact"
            onClick={() => setActive('contact')}
          >
            Contact Us
          </Link>
        </li>

    
      </ul>

      {/* Mobile & Tablet Menus */}
      
      
      
    </nav>
  );
}

export default NavBar;
