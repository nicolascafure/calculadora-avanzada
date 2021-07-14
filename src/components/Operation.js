import React from 'react';
import { useEffect } from 'react';

const Operation = ({numeroA,numeroB, operation}) => {



    function calculator(a, b, ope) {
  
     Number(a)
     Number(b)
     console.log(a,b)

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

<div className="contenedor-operaciones">
    <h1>{operation}</h1>
    <p>{calculator(numeroA,numeroB,operation)}</p>
</div>

     );
}
 
export default Operation;