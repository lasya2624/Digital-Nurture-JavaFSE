import react,{useState} from 'react';

function Arrayobj(){
    const[friends,setfriends]=useState(["hruthika","jaswi","mounika"]);
   function handlefriend(){
        const friend = document.getElementById('friend').value;
        document.getElementById('friend').value = "";
        //console.log(friend);
        setfriends(f=>([...f,friend]));
    }
    const Removefriend=(index)=>{
        setfriends(friends.filter((_,i)=> i!=index));
    }

    return(
        <div>
            <p>List of Friends</p>
            <ul>
                {friends.map((friends,index)=>
                 <li key={index} onClick={()=>Removefriend(index)}>
                    {friends}
                    </li>)
                }
            </ul>
            <input type="text" id='friend'/>
            <button onClick={handlefriend}>AddFriends</button>
        </div>
    );
}
export default Arrayobj;
//That would call the function immediately when rendering — not what you want.
//onClick={() => Removefriend(index)}
//→ This creates a new function that will run Removefriend(index) only when clicked.
// onClick={handlefriend} is fine because:
// You're not passing any arguments to handlefriend.

// So you can directly reference the function — React will only call it on click.
// <button onClick={handlefriend}>AddFriend</button>
// → Here, handlefriend is just a reference (like a pointer). React will invoke it when the button is clicked.
