import React from 'react';

const Input = ({setNumero, numero,setError}) => {

const leerValor=(e)=>{
   if(Number(e.target.value)){
setNumero(Number(e.target.value))
setError(false)
}else{
setError(true)
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