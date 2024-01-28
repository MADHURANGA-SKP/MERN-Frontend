import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
export default store;
/*
Redux store with userReducer that manages the state related to "users". 
The store is then exported for use in other parts of the application. 
And it allows you to manage and update the state of your application in a efficently using Redux.
*/
