import BookMark from '../Bookmark/BookMark';
import './BookMarks.css'

const BookMarks = ({bookmarks,readingTime}) => {
    
    return (
        <div className="md:w-1/3 pl-4">
            <div>
                <h1 className="heading">Spent time on read : {readingTime} min</h1>
            </div>
           <div className='bg-gray-100 ml-1 mt-4 p-5 rounded'>
            <h1 className='font-bold text-[24px]'>Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark=> <BookMark bookmark={bookmark} readingTime={readingTime}/>)
            }
           </div>
        </div>
        
    );
};

export default BookMarks;