import { useState } from "react";

const title = "Hello World";
const style = { color: "red", backgroundColor: "blue" };
const showtitle = false;

const todos = ["Présenter réact", "Présenter le JSX", "Créer des composants"];

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Compteur: {count}</p>
      <button onClick={increment}>Incrementer</button>
    </>
  );
}

export default App;
