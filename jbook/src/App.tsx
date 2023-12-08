import { useEffect, useState } from "react";
import * as esbuild from "esbuild-wasm";

function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
    console.log(service);
  };

  useEffect(() => {
    startService();
  }, []);

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)}>
        Hello World
      </textarea>
      <div>
        <button>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export default App;
