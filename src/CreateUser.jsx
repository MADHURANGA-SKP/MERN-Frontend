import axios from "axios";
import { useState } from "react";
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//"useNavigate" is a hook from react-router-dom used for navigation in React applications.

function CreateUser() {
  //"CreateUser" initializes state variables using the "useState" hook to manage the inputs for "recipename", "ingredients", and "description".
  const [recipeName, setRecipeName] = useState();
  const [ingredients, setIngredients] = useState();
  const [description, setDescription] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", {
        recipeName,
        ingredients,
        description,
      })
      .then((res) => {
        dispatch(addUser(res.data));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  /*
  "handleSubmit" function is called when the form is submitted. 
   It prevents the default form submission behavior, 
   then uses Axios to send a POST request to the server at "http://localhost:3001/create" with the recipe data (recipeName, ingredients, description). 
   Upon a successful response, it dispatches the addUser action with the received data and navigates to the root ("/") route.
  */

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Recipe Name</label>
            <input
              type="text"
              placeholder="Recipe Name"
              className="form-control"
              onChange={(e) => setRecipeName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Ingredients</label>
            <input
              type="text"
              placeholder="Enter Ingredients"
              className="form-control"
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;

/*
As an Summary:---------------------------------------------------------------
This component provides a form for users to input recipe details, 
sends a POST request to a server endpoint using Axios, 
dispatches a Redux action with the received data, 
and navigates to the home page upon successful submission.
*/
