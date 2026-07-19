//provider component
import React,{useState, createContext} from 'react';
import Componentb from './ComponentB.jsx';

export const familycontext = createContext();

function Componenta(){
    const[family,setfamily] = useState("umesh"); 

    return(
        <div className='a'>
            <h1>Component A</h1>
            <p> {` hii ${family}`}</p>
            <familycontext.Provider value={family}>
            <Componentb />
            </familycontext.Provider>
        </div>
    );
}
export default Componenta;