import { useState,useCallback,useRef } from "react";

export function useStateWithHistory(defaultValue, {capacity = 10} = {}){
    const [value, setValue] = useState(defaultValue)
    const historyRef = useRef([value])
    const pointerRef = useRef(0)

    const set = useCallback(v => {
        const resolvedValue = typeof v === "function" ? v(value) : v
        if(historyRef.current[pointerRef.current] !== resolvedValue){
            if(pointerRef.current < historyRef.current.length - 1){
                historyRef.current.splice(pointerRef.current + 1)
            }
            historyRef.current.push(resolvedValue)
            
            while(historyRef.current.length > capacity) {
                historyRef.current.shift()
            }
            pointerRef.current = historyRef.current.length - 1
        }
        setValue(resolvedValue)
    },
    [capacity, value]
)
}