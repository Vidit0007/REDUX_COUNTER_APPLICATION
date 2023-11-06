import React from 'react';
import {useSelector,useDispatch} from 'react'
import {increment,decrement} from './ACTIONS/Counter'

function Counterapp() {
    const count = useSelector((state) => state.count)  //get the value of counter from redux store
    const dispatch=useDispatch();   //to call action creators
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>

    </div>
    
  )
}

export default Counterapp