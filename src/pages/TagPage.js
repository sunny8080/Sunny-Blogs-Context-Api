import React, { useContext } from 'react'
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import { useLocation, useNavigate } from 'react-router-dom';

const TagPage = () => {
  const { loading } = useContext(AppContext);
  const navigate = useNavigate()
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

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
            :
            (
              <div className='my-[100px] w-11/12 max-w-2xl mx-auto'>

                <div className='flex flex-wrap gap-y-4 gap-x-2 items-center'>
                  <button
                    className='border-2 px-4 border-gray-300  py-1 rounded-md hover:border-gray-500 transition-all duration-500'
                    onClick={() => navigate(-1)}>
                    Back
                  </button>

                  <h3 className='text-xl font-bold'>Blogs Tagged</h3>
                  <h2 className='text-xl font-bold text-blue-700 underline'>#{tag}</h2>
                </div>


                <Blogs />
              </div>
            )
        }
      </div>



      <Pagination />
    </div>
  )
}

export default TagPage