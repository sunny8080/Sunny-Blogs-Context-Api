import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PostCard from "./PostCard";

const Blogs = () => {
    const { posts } = useContext(AppContext);

    return (
        <div className="flex flex-col items-center justify-center gap-y-10 py-8 ">
            {
                posts.length === 0 ?
                    (
                        <div>
                            <h2 className=" mt-10 text-lg font-semibold">No Post Found</h2>
                        </div>
                    )
                    :
                    (
                        posts.map((post) => <PostCard key={post.id} post={post} />)
                    )
            }
        </div>

    )
};

export default Blogs;
