import Users from "./Users";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./CreateUser";
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

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/createpage" element={<CreateUser />} />
          <Route path="/" element={<Users />} />

          <Route path="/edit/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
