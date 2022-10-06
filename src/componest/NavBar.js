import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css' 
const seach=<svg xmlns="http://www.w3.org/2000/svg" height="35" width="35"><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></svg>  
const NavBar=()=>{
    return (
        <div className="nav">
            <div className="logo">
                
            <Link to='/s'> 
            <img id="logoImage" src={`https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg`} alt='none'></img>
            </Link>
            </div>

            <Link className="navlinks" to="/miphones">Mi Phone</Link>
            <Link className="navlinks" to="/redmiphones">Redmi Phones</Link>
            <Link className="navlinks" to="/tv">TV</Link>
            <Link className="navlinks" to="/laptops">Laptops</Link>
            <Link className="navlinks" to="/lifestyle">Fitnees & Lifestyle</Link>
            <Link className="navlinks" to="/audio">Home</Link>
            <Link className="navlinks" to="/accessories">Accessories</Link>
            <div className="seachIcon">

            <input placeholder="Search Product" type='text'></input> 
            {seach}
            </div>
        </div>
    )
}

export default NavBar ;