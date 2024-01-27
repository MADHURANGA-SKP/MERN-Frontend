import axios from "axios";
import { useEffect, useState } from "react";
import { addUser, updateUser } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();

  const [recipeName, setRecipeName] = useState();
  const [ingredients, setIngredients] = useState();
  const [description, setDescription] = useState();

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const user = users.find((u) => u.id === id);
    setRecipeName(user.recipeName);
    setIngredients(user.ingredients);
    setDescription(user.description);
  }, [users, id]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
