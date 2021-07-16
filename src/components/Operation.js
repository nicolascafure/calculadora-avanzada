import React from 'react';


const Operation = ({numeroA,numeroB, operation}) => {
    function calculator(a, b, ope) {
     Number(a)
     Number(b)
        const operations = {
          suma: (a, b) => (a + b).toFixed(2),
          resta: (a, b) => (a - b).toFixed(2),
          multiplicacion: (a, b) => (a * b).toFixed(2),
          division: (a, b) =>isNaN( a / b) ? 0: (a/b).toFixed(2),
          raiz: (a,b) => `Raiz de ${a} = ${Math.sqrt(a).toFixed(2)}   |   Raiz de ${b} = ${Math.sqrt(b).toFixed(2)}  ` ,
          potencia: (a,b) => Math.pow(a, b).toFixed(2),
          hipotenusa: (a,b) =>  (Math.hypot(a,b)).toFixed(2)
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