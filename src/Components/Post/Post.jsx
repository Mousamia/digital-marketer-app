import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    // console.log(post);
    const id = post.id;
    console.log(id);
    const handleNavigation = () =>{
        const navigate = useNavigate();
        navigate(`/posts/${id}`);
    }
    return (
        <div>

            <h2>Title {post.title}</h2>
            <h3>Body {post.body}</h3>
            <h3 className="text-xl bg-yellow-600">
                <Link to={`/posts/${id}`}>Show post deatils</Link>
            </h3>
            <Link to={`/posts/${id}`}>
                <button onClick={handleNavigation}>
                    Show Button details
                </button>
            </Link>
        </div>
    );
};

export default Post;