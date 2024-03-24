import React, { useState, useEffect } from 'react';
import Search from './Search';
import Message from './Message';
import RecipesTable from './RecipesTable';

function RecipesPage() {
  const [recipes, setRecipes] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [SearchItem, setSearchItem] = useState('');
    const [Result, setResult] = useState(false);
    const [reload, setReload] = useState(false);    

    function changeModal() { 
        setIsOpen(!isOpen);
    }



    useEffect(() => {
        
        fetch(`http://localhost:3000/api/${SearchItem == '' ?"/showrecipes" : SearchItem}`)
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
                console.log(data);
            });
    }, [reload]);

    return (
        <>
            <div className='flex flex-rol m-5 gap-2'>
                <button className='text-blue-800 m-1' onClick={() => changeModal()}>Create</button>
                <Search setRecipes={setRecipes} />
            </div>
             {recipes ? <RecipesTable recipes={recipes} /> : 'Loading...'}
            {/*{isOpen ? <CreateRecipe isOpen={isOpen} setModal={changeModal} setState={ setResult } /> : ''} */}
            {Result ? <Message style={'bg-green-500'} message={`Item sucefully created!`} setState={setResult} /> : ""}
        </>
    )
}

export default RecipesPage;