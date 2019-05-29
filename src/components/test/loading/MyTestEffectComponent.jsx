import React, { useState, useEffect } from 'react'

export default function MyTestEffectComponent({name}) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("useEffect()");
    document.title = `Your name is ${name}`;
  }, [name]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
