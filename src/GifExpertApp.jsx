import { useState } from "react"
//import { AddCategory } from "./components/AddCategory";
import { AddCategory, GifGrid } from "./components";
//import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        //setCategories((c) => c.concat('Valorant'));
        //setCategories([ ...categories, 'Valorant' ]);
        //setCategories( c => [ newCategory, ...c ]);
        if( categories.includes(newCategory) ) return;
        //console.log(newCategory);
        setCategories(c => [ newCategory, ...c ]);
    };
    //console.log(categories);
    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ event => onAddCategory(event) }
            />
            { categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                ))
            }
        </>
    )
}
//IERR8a9NlT1602g9DJvy0cvsIdE2rfTL