import React from 'react';

const allpost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}

const PostDetailsPage = async({ params }) => {
    const post = await allpost(params.id)
    console.log(post);

    return (
        <div className='w-4/5 mx-auto py-20'>
            <h2 className="text-xl mb-2">{post.title}</h2>
            <p className="">{post.body}</p>
        </div>
    );
};

export default PostDetailsPage;