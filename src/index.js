import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BlogContextProvider } from "./context/blogContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <BlogContextProvider>
        <App />
        <ToastContainer />
      </BlogContextProvider>
    </Router>
  </StrictMode>
);
