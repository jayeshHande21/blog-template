import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const blogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
    if (!loggedIn) {
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <blogContext.Provider value={{ loggedIn, setLoggedIn, handleLogin }}>
      {children}
    </blogContext.Provider>
  );
};
