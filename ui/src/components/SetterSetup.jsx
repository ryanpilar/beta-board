import React from 'react'

const handleSubmit = async () => {
    console.log('TESTING HANDLE SUBMIT API CALL');
    try {
        const response = await fetch('http://localhost:3000/setter-setup');

        if (!response.ok) {

            throw new Error(`Error: ${response.status}`); 
        }
        console.log('YIPPPPPY', response);

    } catch (error) {            
        console.error('Error fetching data:', error);
    }
}

function SetterSetup() {
    return (
        <div>
            <h1>Setter Setup</h1>
            <form>
            <input name='name' placeholder='put name here'/>
            <button
                onClick={()=>handleSubmit()}
            >
                Click Me Biaaaatch</button>

            </form>
            
        </div>
    )
}

export default SetterSetup

