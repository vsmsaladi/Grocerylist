import React, { useState } from "react";
import axios from 'axios';

const GroceryItems = () => {
    const [groceryItems, setGroceryItems] = useState([
        { name: 'Apples', cost: 0 },
        { name: 'Bananas', cost: 0 },
        { name: 'Coconuts', cost: 0 },
        { name: 'Milk', cost: 0 }
    ]);

    const [cartItems, setCartItems] = useState([]);
    const [TotalCost, setTotalCost] = useState(0);

    
    const addToCart = async (item) => {
        try {
            const response = await axios.get('http://localhost:3000/api/randomnumber');

            const isItemInCart = cartItems.map((cartItem) => cartItem.name === item.name ? true : false);
            console.log(item.name, isItemInCart);

            const updateItem = groceryItems.map((groceryItem) =>
                groceryItem.name === item.name ? { ...groceryItem, cost: response.data.cost } : groceryItem);
            setGroceryItems(updateItem);

            const updateCartItems = [...cartItems, { name: item.name, cost: response.data.cost }];
            setCartItems(updateCartItems);

            const updatedTotalCost = TotalCost + response.data.cost;
            setTotalCost(updatedTotalCost);
        }
        catch (error) {
            console.error("Error fetching item");
        }
    };



    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <section style={{ marginRight: '100px' }}>
                <h1> Available Grocery List </h1>
                <ul>
                    {groceryItems.map((item) => (
                        <li className="itemlink" key={item.name} onClick={() => addToCart(item)} >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h1> Cart List</h1>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.name} >
                            {item.name} - {item.cost}
                        </li>
                    ))}
                </ul>
                Total - {TotalCost}
            </section>
        </div>
    );

};




export default GroceryItems;