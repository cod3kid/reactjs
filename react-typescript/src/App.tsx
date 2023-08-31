import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import User from "./components/User";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeProvider";
import UserContextProvider from "./components/context/UserProvider";
import { User as UserFromContext } from "./components/context/User";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import ClassCounter from "./components/class/Counter";

function App() {
  const names = [
    {
      first: "Sasuke",
      last: "Uchiha",
    },
    { first: "Kisame", last: "Hoshigaki" },
    { first: "Naruto", last: "Uzumaki" },
  ];
  return (
    <div className="App">
      {/* <Greet name="Itachi Uchiha" isLoggedIn={false} /> */}
      {/* <Person name={{ first: "Madara", last: "Uchiha" }} /> */}
      {/* <PersonList names={names} /> */}
      {/* <Status status="success" /> */}
      {/* <Heading>Hello World</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to ... Leonardo Di Caprio</Heading>
      </Oscar> */}
      {/* <Button clicked={(e, id) => console.log(id, " Button Clicked", e)} /> */}
      {/* <Input value="" handleChange={(e) => console.log(e)} /> */}
      {/* <Container
        containerStyles={{
          backgroundColor: "green",
          width: 100,
        }}
      /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <UserFromContext />
      </UserContextProvider> */}
      {/* <DomRef /> */}
      {/* <MutableRef /> */}
      <ClassCounter message="Increment" />
    </div>
  );
}

export default App;
