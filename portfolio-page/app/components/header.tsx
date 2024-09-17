import React from 'react';

export default function Header(){
    return(
        <header className='text-gray-700 border-b border-gray-200'>
            <div className='container flex flex-col mx-auto p-5 md:flex-row items-center'>
                <a href='#' className='font-medium text-gray-900 mb-4 md:mb-0'>
                    <span className='text-xl ml-3'>codsalmoon</span>
                </a>
                <nav className='md:ml-auto text-base'>
                    <a href='#About' className='mr-5 hover:text-blue-500 duration-300'>About</a>
                    <a href='#GitHub' className='hover:text-blue-500 duration-300'>GitHub</a>
                </nav>
            </div>
        </header>
    );
}