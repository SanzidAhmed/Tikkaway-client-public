import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChefCard = ({ chef }) => {
    const { id, chefName, chefPicture, yearsExperience, likes, recipes, numRecipes } = chef;

    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <LazyLoadImage className="rounded-xl md:h-48 md:w-full" src={chefPicture}  alt="Image Alt"/>
                </figure>
                
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl text-yellow-400">{chefName}</h2>
                    <p><span className='font-bold'>Numbers of recipes: </span> {numRecipes}</p>
                    <ol className=' ml-0'>
                        <h1 className='font-semibold text-base underline'>Special Recipe</h1>
                        {
                            recipes.map((recipe, index) => <li key={index}>{recipe.recipeName}</li>)
                        }
                    </ol>
                    <div className='md:flex md:gap-10'>
                        <p><span className='font-bold'>Experience:</span> {yearsExperience} years</p>
                        <p className='inline-flex gap-1'><span className='font-bold'>Likes:</span> {likes}<HandThumbUpIcon className="h-6 w-6 text-gray-500" /></p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/chef/${id}`}><button className="btn btn-primary  bg-amber-300 border-white">View details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;