import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
const {id, title, cover, reading_time, author_img, author, posted_date, hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`}></img>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img}></img>
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-2xl text-red-600"><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=><span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className="text-purple-800 font-bold underline">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;