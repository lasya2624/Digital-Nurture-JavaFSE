import React,{useState} from 'react'

function Colorpicker(){
    const[color,setcolor]=useState("5#ff");
    const handlecolor=(event)=>{
        setcolor(event.target.value);
    }
    return(
        <div className='color-picker'>
            <h1>Color Picker</h1>
            <div style={{backgroundColor: color}} className='selected-color'>
                <p className='color'>Selected Color:{color}</p>
            </div>
            <label className='select-color'>
                Select Color:
                <input type ="color" value={color}onChange={handlecolor}></input>
                
            </label>
        </div>
    );
}
export default Colorpicker;