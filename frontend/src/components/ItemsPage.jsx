import React, { useState, useEffect } from 'react';
import ItemsTable from './ItemsTable';
import Message from './Message';
import CreateItem from './CreateItem';

function ItemsPage() {
    const [items, setItems] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [SearchItem, setSearchItem] = useState('');
    const [Result, setResult] = useState(false);

    function changeModal() { 
        setIsOpen(!isOpen);
    }



    useEffect(() => {
        fetch(`http://localhost:3000/api/${SearchItem == '' ?"showItems" : SearchItem}`)
            .then(response => response.json())
            .then(data => {
                setItems(data);
            //    console.log(data);
            });
    }, []);

    return (
        <>
            <div className='flex flex-rol m-5 gap-2'>
                <button className='text-blue-800' onClick={() => changeModal()}>Create</button>
                <button className='text-blue-800'>Search</button>
            </div>
            {items ? <ItemsTable props={items} /> : 'Loading...'}
            {isOpen ? <CreateItem isOpen={isOpen} setModal={changeModal} setState={ setResult } /> : ''}
            {Result ? <Message style={'bg-green-500'} message={`Item sucefully created!`} setState={setResult} /> : ""}
        </>
    )
}

export default ItemsPage;