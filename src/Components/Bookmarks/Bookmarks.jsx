import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-400 m-4 p-4 rounded-2xl">
            <div>
                <h3 className='text-2xl'>Reading Time : {readingTime}</h3>
            </div>
            <h3 className="text-3xl text-center"> Booksmarks Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired
}
export default Bookmarks;