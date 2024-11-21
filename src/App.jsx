import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"



function App() {
  
  const [bookmarks,setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
     <Header />
     <div className="md:flex w-[1200px] mx-auto">
      <Blogs handleAddToBookmark={handleAddToBookmark}/>
      <Bookmarks bookmarks={bookmarks}/>
     </div>
    </>
  )
}

export default App
