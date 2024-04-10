import React from "react";
import ReactDOM from "react-dom/client";
import  { Toaster } from 'react-hot-toast';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);
