import { useScorestore } from "../Store";
import { useRandomNumberStore } from "../Store";
import ButtonBox from "./ButtonBox";
import Timer from "./TImer";
import { useTimeStore } from "../Store";



const Box=()=>{
    const {timeup}=useTimeStore(state=>state)
    const {score}=useScorestore(state=>state)
    const {randomNumber}=useRandomNumberStore(state=>state)
   



  

  
    return <div className="w-[30%] h-[95vh] max-sm:h-[80vh] rounded-lg bg-slate-200 max-sm:w-[90%]">
    <div className="w-[100%] h-[10%] bg-yellow-400 flex items-center justify-between px-3 border-white border-2">
    <button onClick={()=>window.location.reload()} className="bg-black text-white rounded-lg font-bold px-2">Reset</button>
    <h1 className="font-semibold bg-yellow-700 text-white px-2 rounded-lg">Hit {randomNumber}</h1>
    <Timer/>

    <h1 className="font-bold"> score : {score}</h1>

    
   
    </div>
    {!timeup?<ButtonBox/>:<div className="flex flex-col bg-w justify-center items-center font-bold"><h1 >TIMEsUP</h1>
    <h2 className="font-bold">Your Score is {score}</h2>
    <button onClick={()=>window.location.reload()} className="bg-black p-2 px-4 rounded-xl m-2 text-white">PLAY AGAIN</button>
    </div>}
    

    </div>
}

export default Box;