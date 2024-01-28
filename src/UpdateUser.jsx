import axios from "axios";
import { useEffect, useState } from "react";
import { addUser, updateUser } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  // "UpdateUser" component is defined as a functional component named UpdateUser

  const { id } = useParams();
  // it gets the "id" parameter from the URL using React Router's useParams hook.

  const [recipeName, setRecipeName] = useState();
  const [ingredients, setIngredients] = useState();
  const [description, setDescription] = useState();
  //this Manages the component-level state using React

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const user = users.find((u) => u.id === id);
    setRecipeName(user.recipeName);
    setIngredients(user.ingredients);
    setDescription(user.description);
  }, [users, id]);
  // UpdateUser uses "useEffect"  to fetch the user's information from the Redux store when the 'id' changes. It updates the local component state accordingly.

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //It retrieves the dispatch function from React-Redux to dispatch actions and navigate function from React Router for navigation.

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/update/" + id, {
        recipeName,
        ingredients,
        description,
      })
      .then((res) => {
        dispatch(updateUser({ id, recipeName, ingredients, description }));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  //   It handles the form submission for updating the user's information. And Sends a PUT request to the server with updated information, dispatches the updateUser action, and navigates back to the home page.

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update Recipes</h2>
          <div className="mb-2">
            <label htmlFor="">Recipe Name</label>
            <input
              type="text"
              placeholder="Enter Recipe Name"
              className="form-control"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Ingredients</label>
            <input
              type="text"
              placeholder="Enter Igredients"
              className="form-control"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;

/*
  As an Summary:---------------------------------------------------------------
  This component is designed for updating user information in the context of a CRUD application, 
  where it interacts with the Redux store for state management and makes HTTP requests to update data on the server.
*/
