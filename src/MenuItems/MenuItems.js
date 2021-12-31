import React from 'react'
import "./menuItems.css"

const MenuItems = ({ recipes }) => {
    return (
        <div className='menu-container'>
            {recipes.map(item => (
                <div className="card-container">
                    <div className="card-outer">
                        <div className="card">
                            <div className="top">
                                <div className="img">
                                    <img src={item.recipe.image} alt={item.recipe.label} />
                                </div> 
                                <p>{item.recipe.label}</p>
                            </div>
                            <div className="bottom">
                                <ul>
                                {item.recipe.ingredientLines.map(ingredient => (

                                        <li>{ingredient}</li>

                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MenuItems
