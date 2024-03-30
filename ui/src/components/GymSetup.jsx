
import React, { useState } from 'react'
// Project Imports
// 3rd Party Imports
// Styles

/** ================================|| GymSetup ||=================================== **/

const GymSetup = () => {

    const [textContent, setTextContent] = useState('HELLO GYM SETUP')

    const handleSubmit = async () => {
        console.log('TESTING HANDLE SUBMIT API CALL');
        try {

            const response = await fetch('http://localhost:3000/section');

            if (!response.ok) {

                throw new Error(`Error: ${response.status}`); 
            }
            console.log('YIPPPPPY', response);

            console.log('response', response);

        } catch (error) {            
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className=''>
            <h1>Gym Setup</h1>
            <button
                className='bg-blue-300 border-1 border-blue-950 hover:bg-blue-700'
                onClick={() => {
                    handleSubmit()
                }}
                >
                CLICK ME BIOTCH</button>
            <div className='border-2 border-slate-700'>{textContent}</div>
        </div>
    );
};

export default GymSetup;
