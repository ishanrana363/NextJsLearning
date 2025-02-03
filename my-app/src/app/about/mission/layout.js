import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='my-10' >
            <Navbar></Navbar>
            {
                children
            }
        </div>
    );
};

export default layout;