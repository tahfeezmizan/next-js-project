import React from 'react';

const page = ({params}) => {
    const singleBlogs = blog.find((blog) => blog.slug == params.slug)

    return (
        <div className='w-4/5 mx-auto'>
            <h2 className="text-4xl">Blog Details Page</h2>
            
            <div className="p-10 space-y-2">
                <h1 className='text-4xl'>{singleBlogs?.title}</h1>
                <p className='text-xl'>{singleBlogs?.description}</p>
            </div>
        </div>
    );
};

const blog = [
    {
        "slug": 1,
        "title": "How to quickly deploy a static website",
        "description": "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers."
    },
    {
        "slug": 2,
        "title": "Our first project with React",
        "description": "Our journey with React has been incredibly rewarding. Learn about the challenges we faced and how we overcame them to deliver a successful project."
    },
    {
        "slug": 3,
        "title": "Understanding CSS Grid",
        "description": "CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns, and it has many features that make building complex layouts straightforward."
    },
    {
        "slug": 4,
        "title": "Introduction to Docker",
        "description": "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. This blog will help you understand the basics of Docker and its benefits."
    }
];

export default page;