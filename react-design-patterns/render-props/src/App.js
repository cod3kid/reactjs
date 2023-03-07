import "./App.css";
import Input from "./Input";

function App() {
  return (
    <div className="App">
      <Input showValue={(value) => <>This value is {value}</>} />
    </div>
  );
}

export default App;
