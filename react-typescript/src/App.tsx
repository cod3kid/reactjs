import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      <Greet name="Itachi Uchiha" isLoggedIn={false} />
      {/* <Person name={{ first: "Madara", last: "Uchiha" }} /> */}
      {/* <PersonList names={names} /> */}
      {/* <Status status="success" /> */}
      {/* <Heading>Hello World</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to ... Leonardo Di Caprio</Heading>
      </Oscar> */}
    </div>
  );
}

export default App;
