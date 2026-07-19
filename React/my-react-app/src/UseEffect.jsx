import React,{useState,useEffect} from 'react';
function WindowSize(){
    const[height,setheight]=useState(window.innerHeight);
    const[width,setwidth]=useState(window.innerWidth);
    function handleresize(){
        setheight(window.innerHeight);
        setwidth(window.innerWidth);
    }
    useEffect(()=>{
      window.addEventListener("resize",handleresize);
      console.log("event listener added");
      return()=>{
        window.removeEventListener("resize",handleresize);
        console.log("event listener removed");// this is cleaning the code after use 
      }
    },[]);
    useEffect(()=>{
        document.title=` size: ${width}x${height}`;
    },[width,height]);// dependencies refers which values the effect depends on 
// if we use only window statement and console then we 
// get side effect like printing the console for many times
// if we add useEffect this would print only for the no.of times that component mounts
    return(
        <div>
            <p>window width:{width}px</p>
            <p>window height:{height}px</p>
        </div>
    );
}
export default WindowSize;