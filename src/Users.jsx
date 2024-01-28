import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "./redux/userSlice";

/*
  Functional Component:

  CreateUser is a functional React component.
  The component fetches the users array from the Redux store using the useSelector hook.
  It also gets the dispatch function using the useDispatch hook.
  */
const CreateUser = () => {
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  /*
  HandleDelete Function:-----------------------------------------------------

  The handleDelete function is called when the user clicks the "Delete" buttonfor a specific recipe.

  It shows a confirmation dialog using window.confirm.

  If the user confirms, it sends a DELETE request to the server to delete therecipe with the specified id.Upon successful deletion, 
  it dispatches the deleteUser action with the deleted user's id to update the Redux store.
  */
  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this Recipe?"
    );

    if (shouldDelete) {
      axios
        .delete("http://localhost:3001/deleteuser/" + id)
        .then((res) => {
          dispatch(deleteUser({ id }));
        })
        .catch((err) => console.log(err));
    }
  };

  /*
  Table:---------------------------------------------------------------------
  The users.map function is used to defines the users array and generate table rows for each user.

  Update and Delete Buttons:-------------------------------------------------
  Each row has "Update" and "Delete" buttons.
  Clicking the "Update" button navigates to the edit route for the specific recipe.
  Clicking the "Delete" button triggers the handleDelete function to delete the corresponding recipe.
  */
  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-100 bg-white rounded p-3 mx-2">
          <Link to="/create" className="btn btn-success btn-sm">
            Add a recipe +
          </Link>

          <table className="table ">
            <thead>
              <tr>
                <th>Recipe Name</th>
                <th>Ingredients</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td
                      onClick={() => navigate(`/recipe/${user.id}`)}
                      style={{
                        cursor: "pointer",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                      className="text-secondary"
                    >
                      {user.recipeName}
                    </td>
                    <td>{user.ingredients}</td>
                    <td>{user.description}</td>
                    <td>
                      <Link
                        to={`/edit/${user.id}`}
                        className="btn btn-sm btn-success my-2"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;

/*
Styling:---------------------------------------------------------------------

The component uses Bootstrap classes for styling, such as bg-primary, bg-white, rounded, p-3, etc., to achieve a visually appealing layout.

As an Summary:---------------------------------------------------------------
this component is responsible for rendering a list of recipes, 
providing options to add, update, and delete recipes. 
It interacts with a Redux store to manage the state of the application.
*/
