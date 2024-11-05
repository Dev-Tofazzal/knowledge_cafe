import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark,handleMoreReading}) => {
    const [blogs,setBolgs] = useState([])

    useEffect(() =>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBolgs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleAddToBookmark={handleAddToBookmark}
                    handleMoreReading={handleMoreReading}
                    ></Blog> )
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMoreReading: PropTypes.func.isRequired
}
export default Blogs;