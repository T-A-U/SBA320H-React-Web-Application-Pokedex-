
import React from "react";
import App from "../App"

// import {handleOnClick} from "../App";
// isloading
// singlePokemon


export default function HomePage({handleOnClick,isloading, singlePokemon }) {
  // console.log("Isloading", props.isloading)
  return(
    
    <div className="App">
    <h1 className="h1">Pokemon Generator</h1>
    <section>
      <button className="btn" onClick={handleOnClick} disabled={isloading}>
       Who's That Pokemon? 
      </button>
      {isloading ? <h3> wow loading</h3> : 
      <>
      <br></br>
      <h3 className="h3"><b>It's {singlePokemon.name}!</b></h3>
      <span className="info">
      Base Experience: {singlePokemon.base_experience} <br></br>
      Height: {singlePokemon.height}<br></br>
      Weight: {singlePokemon.weight}
      {/* Pic: {pokemonPic} */}
      {/* Picture: {singlePokemon.sprites.front_default}<br></br> */}
      {/* Abilities: {singlePokemon.abilities[0].ability.name} */}
      </span>
     {/* <span>Abilities: 
      </span> */}
      </>}
    </section>
    </div>
  )
}



// import React from "react";
// export default function HomePage() {
//     <div className="App">
//     <h1>Random Pokemon Generator</h1>
//     <section>
//       <button onClick={handleOnClick} disabled={isloading}>
//         Who's That Pokemon?
//       </button>
//       {isloading ? <h3>loading</h3> : 
      
//       <>
//       <h3>It's {singlePokemon.name}!</h3>
//       <span>
//       Base Experience: {singlePokemon.base_experience} <br></br>
//       {/* Color: {pokemonColor} */}
    
//       </span>
//       </>}
//     </section>
//     </div>
// }
