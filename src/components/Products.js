import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        {/* relative link is a link that doesn't start with the forward slash 
& will inherit the closest route in which where they rendered */}
        <Link to="featured">featured</Link>
        <Link to="new">new</Link>
        <Outlet />
      </nav>
    </>
  );
};

export default Products;
