import Componentd from './ComponentD.jsx';
import React,{useContext} from 'react';
import { familycontext } from './ComponentA.jsx';

function Componentc(){
    const me = useContext(familycontext);

    return(
        <div className='c'>
            <h1>Component C</h1>
            <p>{`umaaahhhhh ${me}`}</p>
            <Componentd />
        </div>
    );
}
export default Componentc;