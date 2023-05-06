import React from 'react';
import HeaderBanner from './HeaderBanner';
import Chef from './Chef';

const Home = () => {
    return (
        <div className='bg-orange-400'>
            <HeaderBanner></HeaderBanner>
            <Chef></Chef>
        </div>
    );
};

export default Home;