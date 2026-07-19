import React, { useEffect, useState } from "react"

function Clock(){

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(interval);
        }
    },[]);


    const display =()=>{
        let hr = time.getHours();
        let minutes = time.getMinutes();
        let sec = time.getSeconds();

        hr = hr % 12 ;

        let extension = (hr >= 12)? "PM" : "AM";

        return `${Zeropath(hr)} : ${Zeropath(minutes)} : ${Zeropath(sec)} :${extension}`;
    }

    const Zeropath =(number)=>{
        return (number > 10)?  number : "0"+number;
    }
    

    return (
        <>
        <p>{display()}</p>
        </>
    )

}


export default Clock;