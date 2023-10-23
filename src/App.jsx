import { useState } from "react";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" defaultValue="my nale" />

        <button>Reset</button>
      </form>
    </>
  );
}

export default App;
