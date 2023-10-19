import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Useeffect = () => {
    let [count, setcount] = useState(0);

    useEffect(()=>{
        document.title=count;
    },[count])
    return (
      <>
        <button onClick={() => setcount(count + 1)}>+</button>
        {count}
        <button onClick={() => (count === 0) ? setcount(0) : setcount(count - 1)}>-</button>
      </>
    );
}

export default Useeffect