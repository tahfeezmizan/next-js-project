import Link from 'next/link';

const Page = () => {
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
    
    console.log(blog);

    return (
        <div className='w-4/5 mx-auto py-20'>
            <h1 className="text-5xl">Blog Page</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
                {blog?.map((blogItem) => (
                    <div key={blogItem.slug} className='bg-gray-50 p-10 rounded-2xl border'>
                        <h1 className='text-2xl pb-2'>{blogItem.title}</h1>
                        <p>{blogItem.description}</p>
                        <button className='bg-red-500 text-white px-5 py-2 mt-4'>
                            <Link href={`/blogs/${blogItem.slug}`}>view details</Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
