import React from 'react';

const ChefRecipe = ({ recipe }) => {

    const { recipeName, cookingMethod, rating, ingredients } = recipe;
    return (
        <div className='my-10'>
            <div className="card w-96 min-h-full bg-violet-800 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title text-center">Food name: {recipeName}</h2>
                    <ol>
                        <h5 className='text-lg font-bold underline'>Ingredients:</h5>
                        {
                            ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                        }
                    </ol>
                    <h5 className='text-lg font-bold underline'>Cooking method</h5>
                    <p>{cookingMethod}</p>
                    <p><span  className='text-lg font-bold'>Rating:</span> {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;