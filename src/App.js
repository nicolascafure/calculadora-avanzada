import {useState, useEffect} from "react";
import Input from "./components/Input";
import Operation from "./components/Operation";
import { DragDropContext, Droppable , Draggable} from 'react-beautiful-dnd';

function App() {

const [numeroA, setnumeroA] = useState(0)
const [numeroB, setnumeroB] = useState(0)
const funcionesCalculadora =["suma","resta","multiplicacion","division","potencia","raiz", "hipotenusa" ]

useEffect(() => {

}, [numeroA,numeroB])

  return (
    <DragDropContext  >
    <div className="contenedor-principal">
      <div className="contenedor-numbers">
  <Input key="a" setNumero={setnumeroA} numero={numeroA} />
  <Input key="b" setNumero={setnumeroB} numero={numeroB} />
  </div>
  <Droppable droppableId="list">
  <div className="contenedor-operaciones">

{funcionesCalculadora.map(funcion=><Draggable draggableId={funcion} > <Operation key={funcion} numeroA={numeroA} numeroB={numeroB} operation={funcion}/> </Draggable>)}
</div> 
 </Droppable>

 </div> 
 </DragDropContext>);
}

export default App;
