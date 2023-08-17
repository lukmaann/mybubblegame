import { create } from 'zustand'

export const useScorestore=create((set)=>({
    score:0,
    setScore:()=>set((state)=>({score:state.score+10}))

}))


export const useRandomNumberStore=create((set)=>({
    randomNumber:Math.floor(Math.random()*9),
    setRandom:()=>set(()=>({randomNumber:Math.floor(Math.random()*9)}))
}))

export const useTimeStore=create((set)=>({
    timeup:false,
    setTime:()=>set({timeup:true})
}))