import React from 'react';


const getPostData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data
}

const PostPage = async () => {
    const postitem = await getPostData()
    // console.log(postitem);

    return (
        <div className='w-4/5 mx-auto py-10 '>
            <div className="grid grid-cols-3 gap-6 items-center justify-between">
                {
                    postitem.slice(0, 20).map(post => <div key={post.userId} className='p-6 rounded-lg bg-gray-300'>
                        <h2 className="text-xl mb-2">{post.title}</h2>
                        <p className="">{post.body}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PostPage;