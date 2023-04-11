import React, { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// step 1 : creation
export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [curPageNo, setCurPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);

    async function fetchBlogPosts(pageNo) {
        setLoading(true);
        let url = `${baseUrl}?page=${pageNo}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
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
        fetchBlogPosts(pageNo);
    }

    const value = {
        loading,
        curPageNo,
        setCurPageNo,
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
