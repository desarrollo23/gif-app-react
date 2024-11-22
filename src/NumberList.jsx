import { useState } from "react"

export const NumberListComponent = ( { numbers }) => {


    const [ numbersState, setNumbers ] = useState( numbers );
    
    function onClickDeleteNumber(index) {
        const newNumbersArray = numbersState.filter( (number, i) => index !== i);

        setNumbers(newNumbersArray);
    }

    return (
        <>
            <ol>
                { numbersState.map( (number, index) => {
                    return <div className="number-wrapper" key={index}> <li >{ number }</li> <button onClick={() => onClickDeleteNumber(index)}>X</button></div>
                })}
            </ol>
        </>
    )
}