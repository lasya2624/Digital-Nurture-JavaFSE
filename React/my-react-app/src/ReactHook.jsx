import React,{useState} from 'react';
function Reacthook(){
    const [clg,setclg] = useState("iit");
    const[age,setage] =  useState(0);
    const[isEmployee,setisEmployee] = useState(false);
    const changeclg=()=>{
        console.log("changed clg");
        setclg ("iiiit");
    }
    const incrementAge=()=>{
        setage(age+1);
    }
    const changeState=()=>{
        console.log("true");
        setisEmployee(!isEmployee);
    }
    return(
        <div>
            <p> clg : {clg}</p>
            <button onClick={changeclg}> changeclg</button>
            <p> age: {age}</p>
            <button onClick={incrementAge}> increment age </button>
            <p> IsEmployee: {isEmployee? "yes":"no"}</p>
            <button onClick={changeState}>Toggle status</button>
        </div>
    );
}
export default Reacthook;