import { useState, useEffect } from "react";
import Input from "./components/Input";
import Operation from "./components/Operation";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import funcionesCalculadora from "./utils/functionList"

function App() {
  const [numeroA, setnumeroA] = useState(0);
  const [numeroB, setnumeroB] = useState(0);
  const [functionsCalculator, setFunctionCalculator] = useState(funcionesCalculadora);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    setFunctionCalculator((funcionesCalculadora) =>
      reorder(
        funcionesCalculadora,
        result.source.index,
        result.destination.index
      )
    );
  };

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
              {functionsCalculator.map((f, index) => (
                <Draggable key={f.title} draggableId={f.title} index={index}>
                  {(draggableP) => (
                    <div
                      {...draggableP.draggableProps}
                      ref={draggableP.innerRef}
                      {...draggableP.dragHandleProps}
                    >
                      <Operation
                        numeroA={numeroA}
                        numeroB={numeroB}
                        operation={f.title}
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
