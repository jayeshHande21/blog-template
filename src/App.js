import React, { useContext } from "react";
import { Header } from "./components/Header/header";
import { BlogPost } from "./components/Blog/blogPost";
import { Footer } from "./components/Footer/footer";
import { Login } from "./Login/login";
import { blogContext } from "./context/blogContext";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";

export default function App() {
  const { loggedIn } = useContext(blogContext);

  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={
            loggedIn ? (
              <>
                <Header />
                <BlogPost />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
}
