import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand btn btn-primary text-white mx-2">
        MERN - CRUD
      </a>
      <form className="form-inline">
        <button className="btn btn-primary mx-2">
          <span className="glyphicon glyphicon-refresh"></span> Refresh
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
