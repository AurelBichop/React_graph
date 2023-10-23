const title = "Hello World";
const style = { color: "red", backgroundColor: "blue" };

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    alert("J'ai cliqué sur le titre");
  };

  return (
    <>
      <h1 onClick={handleClick} id="title" className="title" style={style}>
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
