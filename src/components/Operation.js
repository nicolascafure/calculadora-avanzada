import React from 'react';

const Operation = () => {
    function operation(a, b, ope) {
        const operations = {
          suma: (a, b) => a + b,
          resta: (a, b) => a - b,
          multi: (a, b) => a * b,
          division: (a, b) => a / b,
          raiz: (a,b) => ` ${Math.sqrt(a)}   ${Math.sqrt(b)}  ` ,
          potencia: (a,b) => Math.pow(a, b),
          hipotenusa: (a,b) =>  Math.hypot(a,b)
        };
        return operations[ope]?.(a, b) 
    }
    return (  );
}
 
export default Operation;