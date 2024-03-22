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
  const [singlePokemon, setNewPokemon] = useState({ name: "" });
  // const [pokemonPic, setPokemonPic] = useState({ url: "" });
  const [pokemonColor, setColor] = useState({name: "none"})
  const [isloading, setIsLoading] = useState(false);
  const number = getRandomPokemon()
  const getPokemon = async () => {
    setIsLoading(false); //set back to true
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${number}`
    );
    console.log("POKE NUMBER", number)
    const data = await response.json();
    console.log("POKE DATA", data)
    setIsLoading(false);
    setNewPokemon(data);
    // setPokemonPic(data.sprites.front_default)
    console.log("iktawitii,", singlePokemon)
  };
  const getPokemonSpecies = async () => {
    setIsLoading(false); //set back to true
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${number}/`
    );
    console.log("POKE SPECIES NUMBER", number)
    const data = await response.json();
    console.log("POKE SPECIES DATA", data)
    setIsLoading(false);
    setColor(data);
  };
  //https://pokeapi.co/api/v2/pokemon/{id or name}/encounters

  useEffect(() => {
    getPokemon()
    getPokemonSpecies()
  }, []);

  const handleOnClick = (e) => {
    // e.preventDefault();
    getPokemon()
    getPokemonSpecies()
  };

  return (
    <>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      
    </div>
    <a className="btn btn-ghost text-xl">PokeAPI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
   
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>

   <link href="https://cdn.jsdelivr.net/npm/daisyui@4.7.3/dist/full.min.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>
    <Routes>                                                                      {/*unsure if isLoading*/}
        <Route path="/" element={<HomePage handleOnClick={(e) => handleOnClick()} isloading={isloading} singlePokemon={singlePokemon}></HomePage>}></Route>
        {/* <Route path="/description" element={<Description></Description>}></Route> */}
        {/* <Route path="/description" element={<Description></Description>}></Route> */}
    </Routes>
   
    </>
    
  );
}


// //App.js
// import React, { useEffect, useState } from "react";
// import './App.css';
// import HomePage from "./Pages/HomePage";
// import Results from "./Pages/Results";
// import Description from "./Components/Description"

// // import PokemonThumbnail from "./Components/PokemonThumbnail";
// // import Results from "./Pages/Results"
// import { Route, Routes } from "react-router-dom";
// // import "./styles.css";
// // import { useState, useEffect } from "react";

// function getRandomPokemon() {
//   const randomNumber = Math.floor(Math.random() * 1011);
//   console.log("Single pokemon", randomNumber);
//   return randomNumber;
// }

// export default function App() {
//   const [singlePokemon, setNewPokemon] = useState({ name: "none" });
//   const [pokemonColor, setColor] = useState({name: "none"})
//   const [isloading, isLoading] = useState(false);
//   const number = getRandomPokemon()
//   const getPokemon = async () => {
//     isLoading(true);
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${number}`
//     );
//     const data = await response.json();
//     isLoading(false);
//     setNewPokemon(data);
//   };
//   const getPokemonColor = async () => {
//     isLoading(true);
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon-color/${number}/`
//     );
//     const data = await response.json();
//     isLoading(false);
//     setColor(data);
//   };
//   //https://pokeapi.co/api/v2/pokemon/{id or name}/encounters

//   useEffect(() => {
//     getPokemon()
//   }, []);

//   const handleOnClick = () => {
//     getPokemon()
//   };

//   return (
//     <>
//     <Routes>
//         <Route path="/" element={<HomePage></HomePage>}></Route>
//         <Route path="/description" element={<Description></Description>}></Route>
//         {/* <Route path="/description" element={<Description></Description>}></Route> */}
//     </Routes>
   
//     </>
    
//   );
// }
