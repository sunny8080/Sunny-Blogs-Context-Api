import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import PostCard from "./PostCard";

const Blogs = () => {
    const { loading, posts } = useContext(AppContext);

    return (
        <div>
            {
                loading ?
                    (
                        <div className="flex items-center justify-center h-screen">
                            <Spinner />
                        </div>
                    )
                    :
                    (
                        <div className="my-[70px] mx-auto min-h-screen flex flex-col items-center justify-center gap-y-10 py-8 w-11/12 max-w-[670px]">
                            {
                                posts.length === 0 ? (<div><p>No Post Found</p></div>) :
                                    (
                                        posts.map((post) => <PostCard key={post.id} post={post} />)
                                    )
                            }
                        </div>
                    )
            }

        </div>


    )
};

export default Blogs;
