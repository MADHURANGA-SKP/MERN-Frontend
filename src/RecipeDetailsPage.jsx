import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipeName, setRecipeName] = useState();
  const [ingredients, setIngredients] = useState();
  const [description, setDescription] = useState();

  const users = useSelector((state) => state.users.users);
  const user = users.find((u) => u.id === id);

  useEffect(() => {
    if (user) {
      setRecipeName(user.recipeName);
      setIngredients(user.ingredients);
      setDescription(user.description);
    }
  }, [user]);

  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-100 bg-white rounded p-3 mx-2">
          <div className="fs-4 fw-bold">Recipe Details</div>

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
              {user && (
                <tr key={user.id}>
                  <td>{recipeName}</td>
                  <td>{ingredients}</td>
                  <td>{description}</td>
                  <td>
                    <Link to="/" className="btn btn-sm btn-success my-2">
                      Home
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailsPage;
