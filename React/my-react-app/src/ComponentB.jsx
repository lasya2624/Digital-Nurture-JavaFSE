//consumer component
import Componentc from './ComponentC.jsx';
import React,{useContext} from 'react';
import{familycontext} from'./ComponentA.jsx';


function Componentb(){
    const family = useContext(familycontext);

    return(
        <div className='b'>
            <h1>Component B</h1>
            <p> {`love u ${family}`}</p>
            <Componentc />
        </div>
    );
}
export default Componentb;