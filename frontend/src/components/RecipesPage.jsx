import React, { useState, useEffect } from 'react';
import Search from './Search';
import Message from './Message';
import RecipesTable from './RecipesTable';

function RecipesPage() {
  const [recipes, setRecipes] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [SearchedItem, setSearchedItem] = useState('');
    const [Result, setResult] = useState(false);
    const [reload, setReload] = useState(false);    

    function changeModal() { 
        setIsOpen(!isOpen);
    }

    function getRecipeList() {
        fetch(`http://localhost:3000/api/showrecipes`) 
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
            });
    }

    useEffect(() => {
        
        SearchedItem == '' ? getRecipeList() : ''
    }, [reload]);

    return (
        <>
            <div className='flex flex-rol m-5 gap-2'>
                <button className='text-blue-800 m-1' onClick={() => changeModal()}>Create</button>
                <Search setSearchedTerm={ setSearchedItem } setRecipes={setRecipes} label={ "recipe"} />
            </div>
             {recipes ? <RecipesTable recipes={!SearchedItem ? recipes : SearchedItem} /> : 'Loading...'}
            {/*{isOpen ? <CreateRecipe isOpen={isOpen} setModal={changeModal} setState={ setResult } /> : ''} */}
            {Result ? <Message style={'bg-green-500'} message={`Item sucefully created!`} setState={setResult} /> : ""}
        </>
    )
}

export default RecipesPage;