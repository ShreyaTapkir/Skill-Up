import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {

  return (
    
    <>
       <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <i className="ri-macbook-fill"></i>
            <span className="TextOfITag">{props.title}</span>
          </Link>

          

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>

              
            </ul>
            <ul className="navbar-nav">
            <li className="nav-item me-4">
                <Link className="nav-link" href="#">
                  <i className="ri-shopping-cart-fill"></i>
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link" to="/login">
                  <i className="ri-user-fill"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    

      

      
    </>
  );
}
