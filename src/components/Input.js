import React from 'react';

const Input = ({setNumero}) => {

const leerValor=(e)=>{
setNumero(e.target.value)

}

    return (<>
    <input type="number" onInput={leerValor} ></input> 
    <button onInput>Clear</button>
        </>
     );
}
 
export default Input;