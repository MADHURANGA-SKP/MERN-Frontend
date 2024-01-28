import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  /*
"handleRefresh" function is defined, and it is attached to the onClick event and uses window.location.reload() to reload the entire page.
*/

  return (
    <nav className="navbar navbar-light bg-dark justify-content-between">
      <Link to="/" className="navbar-brand btn btn-success text-white mx-2">
        MERN - CRUD
      </Link>
      <form className="form-inline">
        <button className="btn btn-danger mx-2" onClick={handleRefresh}>
          <span className="glyphicon glyphicon-refresh"></span> Refresh
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
//this is a simple navigation bar with a web-app name and a refresh button.
//The styling is likely influenced by a front-end framework like Bootstrap.
//The navigation link uses the Link component from react-router-dom to enable client-side navigation within the React application.
