import PropTypes from 'prop-types';
import './Blog.css'

const Blog = ({blog}) => {
    const {title,cover,author_img,author,posted_date,reading_time} = blog;
    
    return (
        <div>
            <img className='h-[650px] w-full rounded my-4' src={cover} alt={`Cover picture of the titl ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-10 h-10 rounded-full mr-3' src={author_img} alt="" />
                    </div>
                    <div>
                        <h6 className='font-bold text-[24px]'>{author}</h6>
                        <p className='time-color'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                    <p className='time-color mr-2'>{reading_time}</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#9b9b9b"} fill={"none"}>
    <path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl font-bold text-[#11111] my-4'>{title}</h2>
            <p className='font-medium time-color mb-3'>#beginners #programming</p>
            <a href="#" className='mark-read'>Mark as read</a>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;