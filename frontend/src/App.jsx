import { useState } from "react";
import ButtonPrimary from "./components/Button/ButtonPrimary";

function App() {
  return (
    <div className="flex ">
      <div className="m-auto">
        <h1 className="text-3xl font-bold underline">Hello</h1>
        <ButtonPrimary onClick={() => console.log("Clicked")} />
      </div>
    </div>
  );
}

export default App;
