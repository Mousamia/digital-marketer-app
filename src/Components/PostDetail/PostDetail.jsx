import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    console.log(postDetail);
    return (
        <div>
            Im detail
        </div>
    );
};

export default PostDetail;