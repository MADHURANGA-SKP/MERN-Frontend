import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark justify-content-between">
      <Link to="/" className="navbar-brand btn btn-success text-white mx-2">
        MERN - CRUD
      </Link>
      <form className="form-inline">
        <button className="btn btn-danger mx-2">
          <span className="glyphicon glyphicon-refresh"></span> Refresh
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
