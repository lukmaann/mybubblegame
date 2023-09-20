import { useEffect, useRef, useState } from "react"
import { useTimeStore } from "../Store";

const Timer=()=>{
    const {setTime}=useTimeStore(state=>state)
    const [countdown,setCountdown]=useState(10);
    const tick=useRef();

    useEffect(()=>{
        tick.current=setInterval(()=>{
            setCountdown((prev)=>prev-1)
        },1000)
    },[])

    useEffect(()=>{
        if(countdown<=1){
            clearInterval(tick.current)
            setTime()

        }
    },[countdown])


    return <h1>Timer:{countdown}s</h1>
}

export default Timer