import React from 'react'
import { useArray } from './useArray'

export const ArrayComponent = () => {
  const { array, set, push, remove, filter, update, clear } = useArray([
    0,1,2,3,4,5,6,
  ])
  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>adds anthing to end of array</button>
      <button onClick={() => update(1,100)}>changes the element in the specified position</button>
      <button onClick={() => remove(1)}>removes the specified index positions value</button>
      <button onClick={() => filter(n => n < 3)}>allows you to keep the elements in array that are specified in this case it is nums less than 4 that are kept in array</button>
      <button onClick={() => set([1, 2])}>sets whole array to what is specified in this case it is set to 1,2</button>
      <button onClick={clear}>Clears array completely</button>
    </div>
  )
}