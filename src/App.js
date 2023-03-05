import React from "react";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieInfo from "./components/Search/MovieInfo";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/info/:id" element={<MovieInfo />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
