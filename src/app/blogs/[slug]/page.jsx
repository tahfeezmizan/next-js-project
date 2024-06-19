import React from 'react';

const page = ({ params }) => {
    console.log(params);
    return (
        <div>
            <h2 className="text-4xl">Blog Details Page</h2>
            <div>My Post: {params.slug}</div>
        </div>
    );
};

export default page;