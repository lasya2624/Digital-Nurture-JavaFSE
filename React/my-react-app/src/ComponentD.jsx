
//consumer component
import React,{useContext} from 'react';
import { familycontext } from './ComponentA.jsx';
function Componentd(){
    const family = useContext(familycontext);
    return(
        <div className='d'>
            <h1>Component D</h1>
            <p>{`bye ${family}`}</p>
        </div>
    );
}
export default Componentd;
// here instead family u can use some other word