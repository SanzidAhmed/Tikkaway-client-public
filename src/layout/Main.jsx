import React from 'react';
import Header from '../components/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    const navigation = useNavigation()
    return (
        <div className=''>
            <Header></Header>
            <div className='min-h-[980px] bg-orange-400 '>
                <div className='text-center'>
                    {navigation.state === 'loading' ? <button className="btn btn-square loading bg-orange-400 border-orange-400 h-28"></button> : ''}
                </div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;