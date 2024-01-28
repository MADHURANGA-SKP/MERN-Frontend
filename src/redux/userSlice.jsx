import { createSlice } from "@reduxjs/toolkit";
//imports the createSlice function from the Redux Toolkit

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload.map((user) => {
        return {
          id: user._id,
          recipeName: user.recipeName,
          ingredients: user.ingredients,
          description: user.description,
        };
      });
    },
    //"getUser" updates the state with user data received in the action payload. It transforms the user data structure and assigns it to the users array in the state.

    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    //"addUser" action adds a new user to the "users" array in the state.

    updateUser: (state, action) => {
      const index = state.users.findIndex((x) => x.id === action.payload.id);
      state.users[index] = {
        id: action.payload.id,
        recipeName: action.payload.recipeName,
        ingredients: action.payload.ingredients,
        description: action.payload.description,
      };
    },
    //updateUser updates an existing user in the state based on the user's ID. It finds the index of the user with the matching ID and replaces it with the updated user data from the action payload.

    deleteUser: (state, action) => {
      const id = action.payload.id;
      state.users = state.users.filter((u) => u.id !== id);
    },
    //deleteUser removes a user from the state based on the user's ID.
  },
});

export const { getUser, addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
