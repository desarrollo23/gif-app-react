import { useState } from "react"

export const AddCategory = ({ onAddNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newInputValue = inputValue.trim();

        if(newInputValue === '' || newInputValue.length <= 2) {
            return;
        }

        onAddNewCategory(newInputValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                        type="text" 
                        name="add-category" 
                        id="add-category"
                        placeholder="Search..." 
                        value={inputValue}
                        onChange={onChangeInputValue}/>
            </form>
            
        </>
    )
}