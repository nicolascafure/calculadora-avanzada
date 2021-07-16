import { useState, useEffect } from "react";
import Input from "./components/Input";
import Operation from "./components/Operation";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const [numeroA, setnumeroA] = useState(0);
  const [numeroB, setnumeroB] = useState(0);
  const funcionesCalculadora = [
    "suma",
    "resta",
    "multiplicacion",
    "division",
    "potencia",
    "raiz",
    "hipotenusa",
  ];

  useEffect(() => {}, [numeroA, numeroB]);

  return (
    <DragDropContext onDragEnd={(result) => console.log(result)}>
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
