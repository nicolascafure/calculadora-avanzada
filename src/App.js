import {useState, useEffect} from "react";
import Input from "./components/Input";
import Operation from "./components/Operation";

function App() {

const [numeroA, setnumeroA] = useState(0)
const [numeroB, setnumeroB] = useState(0)
const funcionesCalculadora =["suma","resta","multiplicacion","division","potencia","raiz", "hipotenusa" ]

useEffect(() => {

}, [numeroA,numeroB])

  return (
   
    <div className="contenedor-principal">
  <Input key="a" setNumero={setnumeroA} numero={numeroA} />
  <Input key="b" setNumero={setnumeroB} numero={numeroB} />
{funcionesCalculadora.map(funcion=> <Operation key={funcion} numeroA={numeroA} numeroB={numeroB} operation={funcion}/>)}
  

 </div> );
}

export default App;
