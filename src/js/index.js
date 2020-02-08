import React from 'react';
import { render } from 'react-dom';
import '../css/index.css';

import ShoppingList from '../components/shoppingList';


function Welcome() {
    return(
        <div>
            <h1 className="title">Hola desde React.js</h1>
            <p className="pharagraph">Starter kit para trabajar con React.js</p>

            <ShoppingList name="Square" />
        </div>
    )
}

render(
    <Welcome />,
    document.getElementById('app')
);