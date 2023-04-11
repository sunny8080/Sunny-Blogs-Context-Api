import { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';
import PageNotFound from './pages/PageNotFound';

function App() {

  const { fetchBlogPosts } = useContext(AppContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation();


  useEffect(() => {
    const pageNo = searchParams.get("page") ?? 1;

    
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(pageNo), tag)
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(pageNo), null, category)
    } else {
      fetchBlogPosts(Number(pageNo));
    }
  }, [location.pathname, location.search])

  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:blogId' element={<BlogPage />} />
        <Route path='/tags/:tag' element={<TagPage />} />
        <Route path='/categories/:category' element={<CategoryPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </div>
  )
};

export default App;
