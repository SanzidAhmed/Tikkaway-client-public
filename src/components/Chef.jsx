
import ChefCard from './ChefCard';
import { useLoaderData } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Chef = () => {
    const chefs = useLoaderData();
    return (
        <div className=''>
            <div className='container mx-auto pb-20'>
                <h1 className='text-left md:ml-80 pt-10 font-semibold text-4xl mb-6'>Expert chef are here</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 '>
                    <div className='md:col-span-2 grid md:grid-cols-2 gap-6'>
                        {
                            chefs.map(chef => <ChefCard
                                key={chef.id}
                                chef={chef}
                            ></ChefCard>)
                        }
                    </div>
                    <div className='text-center'>
                        <div className='relative'>
                            <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                            <button className="btn btn-secondary absolute right-24 bg-amber-300 border-white">Search</button>
                        </div>
                        <div className='mt-20 mx-20 p-4 border border-amber-300'>
                            <div className='md:flex gap-8 items-center'>
                                <div className='text-left'>
                                    <h3 className='text-lg font-bold text-black'>AUTHOR</h3>
                                    <h1 className='text-3xl font-bold text-white'>Sandra Fortin</h1>
                                    <p className='hover:text-green-300 text-slate-200'>sandra@chow.com</p>
                                </div>
                                <img className='h-20 w-20 rounded-full' src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
                            </div>
                            <p className='text-left mt-4 '>I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.</p>
                        </div>
                        <div className='mt-12'>
                            <h1 className='mx-20 text-xl font-semibold text-black'>Popular Recipe <hr className='border-amber-300 border-2' /></h1>
                        </div>
                        <div className='mx-10'>
                            <div className='relative mt-20'>
                                <LazyLoadImage src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-48 w-full rounded-md' alt="Image Alt" />
                                <h1 className='absolute text-emerald-600 bg-slate-100 bottom-0 rounded-xl md:-left-10 md:w-96 text-lg p-2'>Roast Chicken With Lemon Gravy</h1>
                            </div>
                            <div className='relative mt-10 '>
                                <LazyLoadImage src="https://images.unsplash.com/photo-1606884285898-277317a7bf12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" className='h-48 w-full rounded-md' alt="Image Alt" />
                                <h1 className='absolute text-emerald-600 md:w-96 bg-slate-100 bottom-0 rounded-xl md:-left-10  text-lg p-2'>Chocolate Cake With Green Tea Cream</h1>
                            </div>
                            <div className='relative mt-20'>
                                <LazyLoadImage src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-48 w-full rounded-md' alt="Image Alt" />

                                <h1 className='absolute text-emerald-600 md:w-96 bg-slate-100 bottom-0 rounded-xl md:-left-10 text-lg p-2'>Sweet Chilli and Lime Chicken Wings</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;