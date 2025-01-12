import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]= useState([]);
  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog] 
    setBookmarks(newBookmarks)
  }

  const handleMoreReading = time => {
    const newTime = readingTime + time;
    setReadingTime(newTime)
    
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMoreReading={handleMoreReading}></Blogs>
        <Bookmarks bookmarks= {bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
