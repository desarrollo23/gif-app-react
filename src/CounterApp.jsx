import { useState } from "react"

export const CounterApp = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter( counter + 1);
    }

    const decrement = () => {
        setCounter( counter - 1);
    }

    return(
        <>
            <h1>Counter App</h1>
            <h4>{ counter }</h4>
            <button onClick={decrement} disabled={ counter === -10 }>-1</button>
            <button onClick={increment} disabled={ counter === 10 }>+1</button>
        </>
    )
}