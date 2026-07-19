import React,{useState} from 'react';

function UpdateArr(){
    const[student,setstudent]=useState([]);
    const addstudent=(event)=>{
        let id = document.getElementById('idop').value;// these id,name,course should be same bcz if it matches with student only then this executes
        document.getElementById('idop').value=" ";
        let name = document.getElementById('nameop').value;
        document.getElementById('nameop').value=" ";
        let course = document.getElementById('courseop').value;
        document.getElementById('courseop').value=" ";
        // setstudent(s=>({...s,id:ipid,name:nameip,course:courseip}));
        const newstudent={id,name,course};
        setstudent(student=>([...student,newstudent]));
        //console.log(newstudent);
    }
    const removestudent=(index)=>{
        setstudent(s=>s.filter((_,i)=>i!==index));
    }
    
    return(
        <div>
            <ul>
                {student.map((student, index) => (
                <li key={index} onClick={()=>removestudent(index)}>
                    {student.id}
                    {student.name}
                    {student.course}
                </li>
                ))}
            </ul>
            <input type='number' id='idop' />&nbsp;<br/>
            <input type='text'  id='nameop'/>&nbsp;<br/>
            <input type='text'  id='courseop' ></input><br/>
            <button onClick={addstudent}>Add Student</button>
        </div>
    );
}
export default UpdateArr;
// you need to write same key values for new student so that it matches
//  with student only then it adds a array
// key points:.map function,value should not be given in the input elemetn cz it sets the input field with default values so u would be 
// unable to change the input field values
// if u want to write without default values then add each key as const skillfull variable
// and add value for each input and that should be equal to const skillfull variable
//  now newstudent=[id:value,......] and set cars[..s,newstudent] and each const will be passed like setconst_name

//newDate().getFullYear()=>returns the current year