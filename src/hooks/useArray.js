import { useState } from "react";

export function useArray(defaultValue){
    const [array,setArray] = useState(defaultValue)

    function push(element){
        setArray(a => [...a,element])
    }
    function filter(callback){
        setArray(a => a.filter(callback))
    }
    function update(indexPosition, newElement){
        setArray(a => [
            ...a.slice(0,indexPosition),
            newElement,a.slice(indexPosition + 1, a.length - 1),
        ])
    }
    function remove(indexPosition){
        setArray(a => [
            ...a.slice(0,indexPosition),...a.slice(indexPosition + 1, a.length - 1)
        ])
    }
    function clear(){
        setArray([])
    }
    return {array,set: setArray,push,filter,update,remove,clear}
}