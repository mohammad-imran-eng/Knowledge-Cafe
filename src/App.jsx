import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"



function App() {
  
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (time,id) => {
    console.log(id)
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }


  return (
    <>
     <Header />
     <div className="md:flex w-[1200px] mx-auto">
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}/>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
     </div>
    </>
  )
}

export default App
