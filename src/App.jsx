import Users from "./Users";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./CreateUser";
import RecipeDetailsPage from "./RecipeDetailsPage";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import { getUser } from "./redux/userSlice";
import UpdateUser from "./UpdateUser";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001");
        dispatch(getUser(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  //useEffect: This hook is used to execute the fetchData

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/edit/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
/* 
<BrowserRouter> provides the context for the routing in your application.
<Navbar /> Renders the navigation bar component.
<Routes> and <Route> components that define the routes in your application. The element prop specifies the component to render when the route is matched.

defined routes:-----------------------------------------------------------------------
The default route ("/") renders the Users component.
The "/create" route renders the CreateUser component.
The "/edit/:id" route renders the UpdateUser component.
*/
