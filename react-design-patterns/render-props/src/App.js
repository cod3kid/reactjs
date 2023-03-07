import "./App.css";
import Input from "./Input";

function App() {
  const showValue = (value) => <>This value is {value}</>;
  return (
    <div className="App">
      <Input showValue={showValue} />
    </div>
  );
}

export default App;
