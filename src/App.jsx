const title = "Hello World";
const style = { color: "red", backgroundColor: "blue" };
const showtitle = false;

const todos = ["Présenter réact", "Présenter le JSX", "Créer des composants"];

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    alert("J'ai cliqué sur le titre");
  };

  return (
    <>
      <Title color="red">Mon Composant</Title>
      {showtitle ? (
        <h1 id="title" className="title" style={style}>
          {title}
        </h1>
      ) : (
        <p>Demo</p>
      )}
      <input type="text" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        assumenda fugit rerum voluptatum nihil corrupti architecto perferendis
        minus itaque laudantium iure quis, laboriosam reiciendis quasi accusamus
        ullam quidem eius voluptatem!
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

function Title({ color, children, hidden }) {
  if (hidden) {
    return null;
  }

  const props = {
    id: "monid",
    className: "maclass",
  };

  return (
    <h1 style={{ color: color }} {...props}>
      {children}
    </h1>
  );
}

export default App;
