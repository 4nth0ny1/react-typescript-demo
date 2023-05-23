import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";

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
      <Greet name="Anthony" messageCount={100} isLoggedIn={true} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Johnny Depp!</Heading>
      </Oscar>
      <Button
        handleClick={(event) => {
          console.log("Button clicked", event);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
        }}
      />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
