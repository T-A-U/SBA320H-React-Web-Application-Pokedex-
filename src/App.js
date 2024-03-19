//App.js
import React, { useEffect, useState } from "react";
import './App.css';
import HomePage from "./Pages/HomePage";
import Results from "./Pages/Results";
import Description from "./Components/Description"

// import PokemonThumbnail from "./Components/PokemonThumbnail";
// import Results from "./Pages/Results"
import { Route, Routes } from "react-router-dom";
// import "./styles.css";
// import { useState, useEffect } from "react";

function getRandomPokemon() {
  const randomNumber = Math.floor(Math.random() * 1011);
  console.log("Single pokemon", randomNumber);
  return randomNumber;
}

export default function App() {
  const [singlePokemon, setNewPokemon] = useState({ name: "none" });
  const [pokemonColor, setColor] = useState({name: "none"})
  const [isloading, isLoading] = useState(false);
  const number = getRandomPokemon()
  const getPokemon = async () => {
    isLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${number}`
    );
    const data = await response.json();
    isLoading(false);
    setNewPokemon(data);
  };
  const getPokemonColor = async () => {
    isLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-color/${number}/`
    );
    const data = await response.json();
    isLoading(false);
    setColor(data);
  };
  //https://pokeapi.co/api/v2/pokemon/{id or name}/encounters

  useEffect(() => {
    getPokemon()
  }, []);

  const handleOnClick = () => {
    getPokemon()
  };

  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/description" element={<Description></Description>}></Route>
        {/* <Route path="/description" element={<Description></Description>}></Route> */}
    </Routes>
   
    </>
    
  );
}
