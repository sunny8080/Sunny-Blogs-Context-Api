import React, { useContext } from 'react'
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";

const Home = () => {
    const { loading } = useContext(AppContext);
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
                            <div className='my-[70px] w-11/12 max-w-[670px] mx-auto'>
                                <Blogs />
                            </div>
                        )
                }
            </div>



            <Pagination />
        </div>
    )
}

export default Home