import React from 'react';
import AppNavbar from './Container/AppNavbar';
import Hero from './Container/Hero';
import Teacher from './Container/Teacher';
import Info from './Container/Info';
import One from './Container/One';
import Courses from './Container/Courses';
import DragDrop from './Container/DragDrop';

const App = () => {
    return (
        <div className=" flex flex-col h-screen px-2 md:px-20 text-center space-y-8 overflow-y-auto scrollbar-hide ">
            <AppNavbar />
            <Hero />
            <One />
            <Courses />
            <Info />
            <Teacher />
            {/* <DragDrop /> */}
        </div>
    );
};

export default App;
