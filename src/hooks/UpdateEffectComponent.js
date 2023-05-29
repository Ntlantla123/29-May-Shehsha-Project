import React,{useState} from 'react';import {useUpdateEffect} from './useUpdateEffect';

export const UpdateEffectComponent = () => {
    const[count,setCount] = useState(0)
    useUpdateEffect(() => alert(count),[count])
  return (
    <div>
        <div>{count}</div>
        <button onClick={()=> setCount(c => c+1)}>increment</button>
    </div>
  )
}
