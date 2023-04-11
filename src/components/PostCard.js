import React from 'react'
import { NavLink } from 'react-router-dom'

const PostCard = ({ post }) => {

    return (
        <div className='tracking-wide p-5 rounded-md shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-500  '>
            <NavLink to={`/blog/${post.id}`} >
                <h2 className='font-bold text-lg'>{post.title}</h2>
            </NavLink>

            <p className='mt-1 text-sm'>
                By <span className='italic'>{post.author}</span> on
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className='ml-1 font-bold underline'>{post.category}</span>
                </NavLink>
            </p>

            <p className=' text-sm mt-1'>Posted On {post.date}</p>

            <p className=' mt-4' >{post.content}</p>

            <div className='flex flex-wrap gap-x-3 mt-2'>
                {
                    post.tags.map((tag, ind) =>
                        <NavLink key={ind} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                            <span className=' text-blue-700 underline font-bold text-xs' >#{tag}</span>
                        </NavLink>
                    )
                }
            </div>
        </div>
    )
}

export default PostCard