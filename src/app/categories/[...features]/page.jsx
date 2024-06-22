import React from 'react';

const FeaturesPage = ({ params }) => {
    console.log(params);

    if (params.features.length === 1)
        return <div className='bg-lime-500 h-96 text-white text-3xl py-10'>{params.features[0]} </div>
    if (params.features.length === 2)
        return <div className='bg-green-300 h-96 text-white text-3xl py-10'>{params.features[1]} </div>
    if (params.features.length === 3)
        return <div className='bg-yellow-400 h-96 text-white text-3xl py-10'>{params.features[2]}</div>
    if (params.features.length === 4)
        return <div className='bg-red-500 h-96 text-white text-3xl py-10'>{params.features[3]}</div>
    if (params.features.length === 5)
        return <div className='bg-blue-500 h-96 text-white text-3xl py-10'>{params.features[4]}</div>
    if (params.features.length === 6)
        return <div className='bg-sky-800 h-96 text-white text-3xl py-10'>{params.features[5]}</div>


    return (
        <div className='h-screen '>
            Features Page
        </div>
    );
};

export default FeaturesPage;