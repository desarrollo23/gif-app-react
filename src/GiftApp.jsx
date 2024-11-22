import { useState } from "react"
import { AddCategory, Category } from './components'

export const GiftApp = () => {

    const [ categories, setCategories ] = useState([]);
    const [ counter, setCounter ] = useState(0);

    const onAddCategoryHandler = (newCategory) => {

        const existingCategory = categories.find( category => category === newCategory);

        if(existingCategory) {
            return;
        }

        setCategories( (categories) => [newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gift App</h1>

            <AddCategory 
                onAddNewCategory ={(value) => onAddCategoryHandler(value)}
            />
    
            <div>
                { categories.map( (category) => 
                    <Category key={category} category={category} />)}
                
            </div>
        </>
    )
}