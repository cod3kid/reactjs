import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CakeView from "./components/CakeView";
import IcecreamView from "./components/IcecreamView";
import UsersView from "./components/UsersView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CakeView />
      <IcecreamView />
      <UsersView />
    </>
  );
}

export default App;
