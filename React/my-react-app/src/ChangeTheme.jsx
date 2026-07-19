import React,{useState} from 'react';
function Changetheme(){
    const [theme ,settheme]=useState("light");
    const changetheme =()=>{
        if(theme == "light"){
            settheme("dark");
            document.body.style.backgroundColor = "black";
            console.log(theme);
        }
        else{
            settheme("light");
            document.body.style.backgroundColor = "white";
            console.log(theme);    
        }
    }
    return(
        <button onClick={changetheme}>
            ChangeTheme
        </button>
    );
}
export default Changetheme