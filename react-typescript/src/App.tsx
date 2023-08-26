import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
      <Greet name="Itachi Uchiha" messagesCount={14} isLoggedIn={false} />
      <Person name={{ first: "Madara", last: "Uchiha" }} />
      <PersonList names={names} />
    </div>
  );
}

export default App;
