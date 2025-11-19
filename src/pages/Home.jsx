import React from "react";
import AnimalList from "../components/AnimalList";

function Home() {
  return (
    <div>
      <h1>Zoo</h1>
      <p>Bem-vindo ao sistema do Zoo!</p>

      <AnimalList />
    </div>
  );
}

export default Home;
