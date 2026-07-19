import React,{useState} from 'react';
function Change(){
    const [name,setname]=useState("");
    const[quantity,setquantity]=useState();
    const[content,setcontent]=useState("");
    const[opt,setopt]=useState();
    const[radio,setradio]=useState();
    const eventhandler =(event)=>{// input
        setname(event.target.value);
    }
    const handlequantity=(event)=>{//input number
        setquantity(event.target.value);
    }
    const handlecontent=(event)=>{// textarea
        setcontent(event.target.value);
    }
    const handleoptions=(event)=>{//select
        setopt(event.target.value);
    }
    const handleradio=(event)=>{//select
        setradio(event.target.value);
    }

    return(<div>
        <input value={name} onChange={eventhandler}/>
        <p> Name:{name}</p>
        <input value={quantity} type = "number" onChange={handlequantity}/>
        <p> Quantity:{quantity}</p>
        <textarea value={content} onChange={handlecontent} placeholder='enter your content'></textarea>
        <p> Content: {content}</p>
        <select value={opt} onChange={handleoptions}>
            <option value=" ">select an option</option>
            <option value="phn pe">phn pe</option>
            <option value="Net Banking">Net Banking</option>
            <option value="Handcash">Handcash</option>
            <option value="EMI">EMI</option>
        </select>
        <p> selected: {opt} </p>
        <radio></radio>

    </div>);
}
export default Change;