import React from 'react';

const Operation = ({numeroA,numeroB, operation}) => {
    function calculator(a, b, ope) {
     Number(a)
     Number(b)
        const operations = {
          suma: (a, b) => a + b,
          resta: (a, b) => a - b,
          multiplicacion: (a, b) => a * b,
          division: (a, b) => a / b,
          raiz: (a,b) => ` ${Math.sqrt(a)}   ${Math.sqrt(b)}  ` ,
          potencia: (a,b) => Math.pow(a, b),
          hipotenusa: (a,b) =>  Math.hypot(a,b)
        };
        return operations[ope]?.(a, b) 
    }
    return ( 

<div className="operacion">
    <h1 className="titulo-operacion">{operation.charAt(0).toUpperCase() + operation.slice(1)}</h1>
    <p className="resultado">{calculator(numeroA,numeroB,operation)}</p>
</div>

     );
}
 
export default Operation;