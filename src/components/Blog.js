import React from 'react'
import { blogs } from '../data'

const Blog = () => {
  return (
    <section id="blog" className='container flex h-screen w-full bg-white'>
      <div className='wrapper flex flex-start w-3/4 bg-gray-400 h-3/4 justify-center'>
        <h2 className='blog-title'>
          Blog
        </h2>

        <div className='grid blog-grid grid-cols-2 w-full'>
        {blogs.map((post) => (
            <div key={post.image} className="p-2 w-full">
              <div className="mx-auto mb-5 flex align-center justify-center" style={{height: "5rem"}}>
                <img src={post.image} alt={post.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog