import { useContext, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';
import Blogs from './components/Blogs'

function App() {

  const { fetchBlogPosts } = useContext(AppContext)

  useEffect(() => {
    fetchBlogPosts();
  }, [])

  return (
    <div className=" font-inter ">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
};

export default App;
