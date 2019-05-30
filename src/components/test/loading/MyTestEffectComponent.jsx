import React, { useState, useEffect, useReducer } from 'react'

export default function MyTestEffectComponent({name}) {
  const initialState = {
    count: 0,
    step: 1,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  
  function reducer(state, action) {
    const { count, step } = state;
    if (action.type === 'tick') {
      return { count: count + step, step };
    } else if (action.type === 'step') {
      return { count, step: action.step };
    } else {
      throw new Error();
    }
  }


  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' }); // Instead of setCount(c => c + step);
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  
  return (
    <div>
      <p>You clicked {state.count} times</p>
      
    </div>
  );
}
