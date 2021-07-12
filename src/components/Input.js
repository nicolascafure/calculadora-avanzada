import React from 'react';

const Input = ({setNumero, numero}) => {

const leerValor=(e)=>{
setNumero(e.target.value)
}

const resetValor =()=>{
    setNumero(0)
}

    return (<>
    <input type="number" onInput={leerValor} value={numero} ></input> 
    <button onClick={resetValor}>Clear</button>
        </>
     );
}
 
export default Input;