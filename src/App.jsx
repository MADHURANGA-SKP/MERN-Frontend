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

/*
"Users", "CreateUser", "UpdateUser" are components defined in other files, likely responsible for rendering different views or pages in your application.

"bootstrap/dist/css/bootstrap.min.css"  imports the Bootstrap CSS stylesheet, providing styling for whole application.

"BrowserRouter", "Routes", "Route" are components from the "react-router-dom" library, used for handling "client-side" routing in React applications.

"useEffect" is a hook in React that allows you to perform side effects in your functional components. In this case, it's used to make an asynchronous request to fetch data.

"axios" It's a library for making HTTP requests. Here, it's used to fetch data from a server.

"useDispatch" It's a hook provided by "react-redux" for accessing the dispatch function. It's used to dispatch actions to the Redux store.

"Navbar" is the component that uses for rendering a navigation bar.

"getUser" is an action creator from the Redux store, possibly defined in "./redux/userSlice". It's used to dispatch an action with fetched user data.
*/

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
