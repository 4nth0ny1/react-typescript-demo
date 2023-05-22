import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const PersonName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Diana", last: "Prince" },
  ];

  return (
    <div className="App">
      <h1>React Typescript Demo</h1>
      <Greet name="Anthony" messageCount={10} isLoggedIn={false} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
