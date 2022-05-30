import React, { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0);

    const handleButtonclick = () => {
        setCounter(counter+1);
    }

  return (
      <>
        <div>Counter Check</div>
        <div>
            <button onClick={handleButtonclick}>Increment Counter</button>
        </div>
        <div>
            Counter value is at : <span data-testid="counter-value">{counter}</span>
        </div>
      </>
  )
}

export default Counter