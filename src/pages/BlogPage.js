import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { blogUrl } from '../baseUrl';
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import Blogs from '../components/Blogs';
import PostCard from '../components/PostCard';

const BlogPage = () => {
  const { loading, setLoading, setPosts } = useContext(AppContext)
  const [blog, setBlog] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const blogId = location.pathname.split("/").at(-1);


  async function fetchBlogData() {
    setLoading(true)
    const url = `${blogUrl}?blogId=${blogId}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data.blog)
        throw new Error("Something went wrong")
      setBlog(data.blog)
      setPosts(data.relatedBlogs)
    } catch (e) {
      console.log("Error occured in BlogPage")
      setBlog(null)
      setPosts([])
    }
    setLoading(false)
  }

  useEffect(() => {
    if (blogId) fetchBlogData();
  }, [location.pathname, blogId]);

  return (
    <div>
      <Header />
      <div>
        {
          loading ?
            (
              <div className="flex items-center justify-center h-[105vh]">
                <Spinner />
              </div>
            )
            : blog ?
              (
                <div className='my-[100px] w-11/12 max-w-2xl mx-auto'>

                  <div className='flex  items-center gap-x-5'>
                    <button
                      className='border-2 px-4 border-gray-300  py-1 rounded-md hover:border-gray-500 transition-all duration-500'
                      onClick={() => navigate(-1)}>
                      Back
                    </button>

                  </div>

                  <div className='mt-6'>
                    <PostCard post={blog} />
                    <h3 className='font-bold text-3xl mt-14'>Related Blogs</h3>
                  </div>

                  <Blogs />
                </div>
              ) :
              (
                <div className='flex items-center justify-center h-[100vh]'>
                  <h2 className=" text-2xl font-semibold">No Post Found</h2>
                </div>
              )
        }
      </div>

    </div>
  )
}

export default BlogPage