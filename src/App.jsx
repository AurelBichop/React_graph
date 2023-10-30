import { useState } from "react";
import { useIncrement } from "./component/hooks/useIncrement";
import { useToggle } from "./component/hooks/useToggle";
import { useDocumentTitle } from "./component/hooks/useDocumentTitle";
import { Input } from "./component/forms/Input";

function App() {
  const [checked, toggleCheck] = useToggle();
  const { count, increment, decrement } = useIncrement({
    base: 0,
    max: 10,
    min: 0,
  });
  const [name, setName] = useState("");

  useDocumentTitle(name ? `Editer + ${name}` : null);

  return (
    <div>
      <Input label="nom" onChange={setName} value={name} />
      <input type="checkbox" value={checked} onChange={toggleCheck} />
      {checked && " Je suis Coché"}
      <div>Compteur : {count}</div>
      <button onClick={increment}>Incrementer</button>
      <button onClick={decrement}>Décrementer</button>
    </div>
  );
}
export default App;
