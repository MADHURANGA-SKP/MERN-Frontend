import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./redux/userSlice";

const CreateUser = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

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

  return (
    <div>
      <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-100 bg-white rounded p-3 mx-2">
          <Link to="/create" className="btn btn-success btn-sm">
            Add a recipe +
          </Link>
          <table className="table bg-dark">
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
                    <td>{user.recipeName}</td>
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
