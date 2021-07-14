import React from 'react';


const Input = ({setNumero, numero}) => {

const leerValor=(e)=>{
   if(e.target.value ===""||Number(e.target.value)){
setNumero(Number(e.target.value))
}else{
return 
}}

const resetValor =()=>{
    setNumero(0)
   
}

    return (<>
    <input type="text" onInput={leerValor} value={numero} ></input> 
    <button onClick={resetValor}>Clear</button>
        </>
     );
}
 
export default Input;