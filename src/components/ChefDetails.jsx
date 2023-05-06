import React, { useState } from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { useLoaderData, useParams } from 'react-router-dom';
import ChefRecipe from './ChefRecipe';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { chefName, chefPicture, numRecipes, bio, yearsExperience, likes, recipes } = chefDetails;

    return (
        <div className='container mx-auto pt-16 '>
            <div className="card card-compact w-2/4 bg-base-100 shadow-xl mx-auto">
                <figure><img src={chefPicture} alt="Shoes" className='w-screen h-96' /></figure>
                <div className="card-body text-center">
                    <h1 className='text-4xl'>{chefName}</h1>
                    <h4>{ }</h4>
                    <p>{bio}</p>
                    <p><span className='font-bold text-xl'>Numbers of recipes: </span> {numRecipes}</p>
                    <div className='md:flex mx-auto gap-8'>
                        <p><span className='font-bold'>Experience:</span> {yearsExperience} years</p>
                        <p className='inline-flex gap-1'><span className='font-bold'>Likes:</span> {likes}<HandThumbUpIcon className="h-6 w-6 text-gray-500" /></p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                {
                    recipes.map((recipe, index) => <ChefRecipe
                        key={index}
                        recipe={recipe}
                    ></ChefRecipe>)
                }
            </div>
            {/* <ChefRecipe></ChefRecipe> */}
        </div>
    );
};

export default ChefDetails;