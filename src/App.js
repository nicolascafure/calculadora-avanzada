import { useState, useEffect } from "react";
import Input from "./components/Input";
import Operation from "./components/Operation";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const funcionesCalculadora = [
    "suma",
    "resta",
    "multiplicacion",
    "division",
    "potencia",
    "raiz",
    "hipotenusa",
  ];


  const [numeroA, setnumeroA] = useState(0);
  const [numeroB, setnumeroB] = useState(0);
  const[functions, setFunction]=useState(funcionesCalculadora)
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

  setFunction((funcionesCalculadora)=>reorder(funcionesCalculadora,result.source.index,result.destination.index))
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

 

  useEffect(() => {}, [numeroA, numeroB]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="contenedor-principal">
        <div className="contenedor-numbers">
          <Input key="a" setNumero={setnumeroA} numero={numeroA} />
          <Input key="b" setNumero={setnumeroB} numero={numeroB} />
        </div>

        <Droppable droppableId="operaciones">
          {(droppableP) => (
            <div
              {...droppableP.droppableProps}
              ref={droppableP.innerRef}
              className="contenedor-operaciones"
            >
              {funcionesCalculadora.map((funcion, index) => (
                <Draggable key={funcion} draggableId={funcion} index={index}>
                  {(draggableP) => (
                    <div
                      {...draggableP.draggableProps}
                      ref={draggableP.innerRef}
                      {...draggableP.dragHandleProps}
                    >
                      <Operation
                        numeroA={numeroA}
                        numeroB={numeroB}
                        operation={funcion}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableP.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
