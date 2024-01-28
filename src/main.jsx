import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
/*
"React" and ReactDOM are used for building and rendering React components.
"App" is the main component of the application.
"Provider" is a React-Redux component that allows the application to access the Redux store.
"store" is the Redux store that holds the state managment of the application.
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  //We uses ReactDOM.createRoot to create a root for the React application at the HTML element with the ID "root."

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*
we usually Wraps the main "App" component with "Provider" to make the Redux store available to all components in the application.
Wraps the entire part in "React.StrictMode", And it is a tool for highlighting potential problems in the application during development.
*/
