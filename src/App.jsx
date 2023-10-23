import { Fragment } from "react";

const title = "Hello World";

function App() {
  return (
    <>
      <h1 id="title" className="title" auto>
        {title}
      </h1>
      <input type="text" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        assumenda fugit rerum voluptatum nihil corrupti architecto perferendis
        minus itaque laudantium iure quis, laboriosam reiciendis quasi accusamus
        ullam quidem eius voluptatem!
      </p>
    </>
  );
}

export default App;
