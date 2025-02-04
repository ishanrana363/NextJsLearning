import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='my-text' >About page</h1>
            <Image src={"/images/blgo.png"} alt='' width={300} height={200} />
        </div>
    );
};

export default page;