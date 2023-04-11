import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    // step 3 : use context variable
    const { curPageNo, totalPages, handlePageChange } = useContext(AppContext)

    return (
        <div className='w-full  bg-white  border-t-2  border-t-gray-300 fixed bottom-0 '>
            <div className='w-11/12 py-2 max-w-[670px] mx-auto flex justify-between items-center'>
                <div className='flex gap-x-2'>
                    {
                        curPageNo > 1 &&
                        (<button
                            className='border-2 px-4 py-1 rounded-md'
                            onClick={() => handlePageChange(curPageNo - 1)}>Previous</button>)
                    }

                    {
                        curPageNo < totalPages &&
                        (<button
                            className='border-2 px-4 py-1 rounded-md'
                            onClick={() => handlePageChange(curPageNo + 1)}>Next</button>)
                    }
                </div>

                <p className='font-bold'>
                    Page {curPageNo} of {totalPages}
                </p>
            </div>
        </div>
    );
};

export default Pagination