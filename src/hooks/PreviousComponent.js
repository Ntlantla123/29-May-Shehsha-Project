import React, { useState } from 'react';import { usePrevious } from './usePrevious';

export const PreviousComponent = () => {
    const [count,setCount]= useState(0)
    const [name,setName] = useState("Dildaar = beloved one")
    const previousCount = usePrevious(count)

  return (
    <div>
        <div>
            {count} - {previousCount}
        </div>
        <div>{name}</div>
        <button onClick={() => setCount(currentCount => currentCount + 1)}>increment</button>
        <button onClick={() => setName("Yahya = John")}>change name</button>
    </div>
  )
}
