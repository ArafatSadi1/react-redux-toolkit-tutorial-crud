import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"} className="nav-link">Home</Link>
        </li>
        <li>
          <Link to={"/show-books"} className="nav-link">Show Books</Link>
        </li>
        <li>
          <Link to={"/add-book"} className="nav-link">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
