import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmark,handleMoreReading}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex '>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read <button 
                     onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button></span>
                </div>
            </div>
            <h2 className='text-4xl my-4'>{title}</h2>
            <p>
                {
                   hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>) 
                }
            </p>

            <button 
            onClick={() => handleMoreReading(reading_time)}
            className='underline text-blue-800 font-bold'>
            read more time
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMoreReading: PropTypes.func.isRequired
}
export default Blog;