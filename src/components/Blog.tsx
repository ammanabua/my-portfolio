'use client';

import { React, useEffect } from 'react'
import { blogs } from '@/src/data'
import ImageUploader from './ImageUploader'


// const getBlogs = {
//   // Function to fetch blog posts
//   fetchPosts: async () => {
//     try {
//       const response = await fetch('/api/blogs');
//       if (!response.ok) throw new Error('Network response was not ok');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching blog posts:', error);
//       return [];
//     }
//   }
// }

const Blog = () => {
  return (
    <section id="blog" className='container flex h-screen w-full bg-white'>
      <div className='wrapper flex flex-start w-3/4 bg-gray-400 h-3/4 justify-center'>
        <h2 className='blog-title'>
          Blog
        </h2>

        <div className='grid blog-grid grid-cols-2 w-full'>
        {/* {blogs.map((post) => (
            <div key={post.image} className="p-2 w-full">
              <div className="mx-auto mb-5 flex align-center justify-center" style={{height: "5rem"}}>
                <img src={post.image} alt={post.title} />
                
              </div>
            </div>
          ))} */}

          {/* <ImageUploader /> */}
        </div>
      </div>
    </section>
  )
}

export default Blog