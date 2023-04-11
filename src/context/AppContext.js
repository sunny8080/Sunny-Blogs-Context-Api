import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../baseUrl";

// step 1 : creation
export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [curPageNo, setCurPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    async function fetchBlogPosts(pageNo, tag = null, category = null) {
        setLoading(true);
        let url = `${baseUrl}?page=${pageNo}`;
        if (tag) url += `&tag=${tag}`;
        if (category) url += `&category=${category}`

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (!data.posts || data.posts.length === 0)
                throw new Error("Something went wrong")

            // console.log(data);
            setCurPageNo(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        } catch (e) {
            console.log("Error in fetching data");
            setPosts([]);
            setTotalPages(null);
            setCurPageNo(1);
        }

        setLoading(false);
    }



    function handlePageChange(pageNo) {
        navigate({ search: `page=${pageNo}` })
        setCurPageNo(pageNo) // check if it is needed
    }

    const value = {
        loading,
        setLoading,
        curPageNo,
        totalPages,
        posts,
        setPosts,
        fetchBlogPosts,
        handlePageChange,
    };


    // step 2 : send data
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
