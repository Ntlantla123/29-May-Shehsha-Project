import { useEffect,useRef } from "react";
export function useUpdateEffect(callback,dependencies){
    const firstRenderRef = useRef(true)
// the if statement is used to check for the first render and makes it false to prevent the first render
    useEffect( () => {
        if(firstRenderRef.current){
            firstRenderRef.current = false
            return
        }
        return callback()
    }, dependencies )
}