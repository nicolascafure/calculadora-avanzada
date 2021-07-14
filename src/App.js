import {useState, useEffect} from "react";
import Input from "./components/Input";
import Operation from "./components/Operation";

function App() {

const [numeroA, setnumeroA] = useState(0)
const [numeroB, setnumeroB] = useState(0)
const[error, setError]= useState(false)

useEffect(() => {

}, [numeroA,numeroB])

  return (
   
    <div className="contenedor-principal">
  <Input key="a" setNumero={setnumeroA} numero={numeroA} setError={setError}/>
  <Input key="b" setNumero={setnumeroB} numero={numeroB} setError={setError}/>

  <Operation numeroA={numeroA} numeroB={numeroB} operation="suma"/>
  
{error? <h1>Ingrese valores correctos</h1>:
<div>
<h2>Suma</h2> {numeroA + numeroB}
  <h2>Resta</h2> {numeroA - numeroB}
  <h2>Multiplicacion</h2> {numeroA * numeroB}
  <h2>Division</h2> {isNaN(numeroA/numeroB)?<h1>No se puede dividir por 0</h1>:numeroA/numeroB}
  <h2>La raiz cuadrada de {numeroA} es {Math.sqrt(numeroA)}</h2>
  <h2>La raiz cuadrada de {numeroB} es {Math.sqrt(numeroB)}</h2>
  <h2>La potencia de {numeroA} elevado a {numeroB} es {Math.pow(numeroA, numeroB)}</h2>     
  <h2>La hipotenusa entre ambos numeros es {Math.hypot(numeroA,numeroB)}</h2>
</div>

}





  </div>
  );
}

export default App;
