import { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';
import Blogs from './components/Blogs'

function App() {

  const { fetchBlogPosts } = useContext(AppContext)
  const [firstCall, setFirstCall] = useState(true);


  useEffect(() => {
    if (firstCall) {
      fetchBlogPosts();
      setFirstCall(false);
    }
  }, [firstCall, fetchBlogPosts])

  return (
    <div className=" font-inter ">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
};

export default App;
