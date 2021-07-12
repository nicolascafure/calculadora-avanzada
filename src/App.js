import {useState} from "react";

import Input from "./components/Input";

function App() {
const [numeroA, setnumeroA] = useState(0)
const [numeroB, setnumeroB] = useState(0)


  return (
    <div className="contenedor-principal">
  <Input key="a" setNumero={setnumeroA} numero={numeroA}/>
  <Input key="b" setNumero={setnumeroB} numero={numeroB}/>
  </div>
  );
}

export default App;
