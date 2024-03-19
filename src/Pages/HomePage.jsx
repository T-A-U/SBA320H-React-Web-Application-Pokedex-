
import React from "react";
export default function HomePage() {
    <div className="App">
    <h1>Random Pokemon Generator</h1>
    <section>
      <button onClick={handleOnClick} disabled={isloading}>
        Who's That Pokemon?
      </button>
      {isloading ? <h3>loading</h3> : 
      
      <>
      <h3>It's {singlePokemon.name}!</h3>
      <span>
      Base Experience: {singlePokemon.base_experience} <br></br>
      {/* Color: {pokemonColor} */}
    
      </span>
      </>}
    </section>
    </div>
}
