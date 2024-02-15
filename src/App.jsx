import React, { useState } from "react";
import Nav from "./Components/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import Form from "./Components/Form";
import FormHook from "./Components/FormHook";

import Movie from "./Components/Movie";
import Parent from "./Components/Parent";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MovieDet from "./Components/MovieDet";
import Auth from "./Components/Auth";
import { counterContext } from "./context/counterContext";
import Fav from "./Components/Fav";
function App() {

  const [count, setCount] = useState(1);
  return (
    <counterContext.Provider value={{ count, setCount }}>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<FormHook />} />
        <Route path="/fav" element={<Fav />} />
        <Route element={<Auth />}>
          <Route path="/movie" element={<Movie />} />
          <Route path="/moviedet/:id" element={<MovieDet />} />
        </Route>
        <Route path="/mui" element={<Parent />} />
      </Routes>

    </counterContext.Provider>
  )
}

export default App
