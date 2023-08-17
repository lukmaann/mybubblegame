import { useRandomNumberStore ,useScorestore} from "../Store";

const ButtonBox=()=>{

    const {randomNumber,setRandom}=useRandomNumberStore(state=>state)
    const{setScore}=useScorestore(state=>state);
    const Numbers=[];
    for (let i = 0; i <30; i++) {
        Numbers.push(Math.floor(Math.random()*9))
        
    }



 

    const handleclick=(e)=>{
    e.preventDefault()
    if(e.target.value==randomNumber){
        setRandom();
        setScore();

    }
    }

    
    return <div className="h-[90%] w-[100%] grid grid-cols-5 grid-rows-6">
    {
        Numbers.map((item,index)=>{
            return <button className="m-2 border w-[80%] rounded-full h-[80%] border-black hover:bg-slate-400" onClick={handleclick} key={index} value={item}>{item}</button>
        })
    }
      



    </div>
}

export default ButtonBox