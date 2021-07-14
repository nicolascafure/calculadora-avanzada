import {useState} from "react";

import Input from "./components/Input";

function App() {

const [numeroA, setnumeroA] = useState(0)
const [numeroB, setnumeroB] = useState(0)


  return (
    <div className="contenedor-principal">
  <Input key="a" setNumero={setnumeroA} numero={numeroA}/>
  <Input key="b" setNumero={setnumeroB} numero={numeroB}/>
  

  <h2>Suma</h2> {numeroA + numeroB}
  <h2>Resta</h2> {numeroA - numeroB}
  <h2>Multiplicacion</h2> {numeroA * numeroB}
  <h2>Division</h2> {numeroA / numeroB}
  <h2>La raiz cuadrada de {numeroA} es {Math.sqrt(numeroA)}</h2>
  <h2>La raiz cuadrada de {numeroB} es {Math.sqrt(numeroB)}</h2>
  <h2>La potencia de {numeroA} elevado a {numeroB} es {Math.pow(numeroA, numeroB)}</h2>     





  </div>
  );
}

export default App;
