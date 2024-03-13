import { useState } from 'react';

export const AddCategory = ({ 
        //setCategories
        onNewCategory
    }) => {
    
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const onSubmit = (event) => {
        //console.log(event)
        event.preventDefault();
        //console.log(inputValue);
        if(inputValue.trim().length <= 1) return;
        //setCategories( c => [ inputValue, ...c]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={ (event2) => onSubmit(event2)}>
            <input
                type="text" 
                placeholder="Buscar gifs" 
                value={ inputValue }
                onChange={ (event1) => onInputChange(event1) }
            />
        </form>

    )
}
