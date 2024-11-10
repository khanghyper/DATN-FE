'use client';
import React, { useEffect, useState } from 'react';
import BlogPostCard from './BlogPostCard';


const BlogSection = () => {
  const [blogs, setBlogs] = useState<any>([]);
  useEffect(() => {
    const getBlog = async () => {
      try {
        const apiBlog = await fetch(`http://vnshop.top/api/posts`);
        const payLoad = await apiBlog.json();
        console.log(payLoad);
        if (apiBlog.ok) {
          setBlogs([...payLoad])
        }
      } catch (error) {
        console.log(error);
      }
    }
    getBlog()
  }, [])

  return (
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-3/4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {
            blogs.map((post: any, index: number) => (
              <BlogPostCard key={index} data={post} />
            ))
          }
        </div>
      </div>
      <div className="w-full lg:w-1/4 px-4 mt-8 lg:mt-0">
        {
          blogs.map((item:any, index:number) => (
            <div key={index} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <img src={item.image} alt={item .title} className="w-full h-auto" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BlogSection;