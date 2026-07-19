import React,{useState} from 'react';

function Spreadoperator(){
    const[student,setstudent]=useState({id:101,
                                    name:"lasya",
                                    course:"IT"});
    const handleid=(event)=>{
        setstudent(s=>({...student,id:event.target.value}));//id:102// here...student is called spread operator//this is called updated function
    }
    const handlename=(event)=>{
        setstudent(s=>({...student,name:event.target.value}));
    }
    const handlecourse=(event)=>{
        setstudent(s=>({...student,course:event.target.value}));
    }
    return(
        <div>
            <p>Your Identification:{student.id}{student.name}{student.course}</p>
            <input type="number" value={student.id} onChange={handleid}></input>
            <br/>
            <input type='text'value={student.name} onChange={handlename}></input>
            <br/>
            <input type='text'value={student.course} onChange={handlecourse}></input>
        </div>
    );
}
export default Spreadoperator
