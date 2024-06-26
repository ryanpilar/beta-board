import React from 'react'
// Project Imports
import { Logo } from './Navbar';

/** ================================|| Footer ||=================================== **/

const Footer = (props) => {
    return (
        <footer class="bg-gray-50">
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex justify-center text-teal-600 sm:justify-start">
                        <Logo size='h-14 w-14' />
                    </div>
                    <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; 2024. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 