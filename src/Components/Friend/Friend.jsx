import React from 'react';

const Friend = ({ friend }) => {
    console.log(friend);
    const { albumId, tittle, url } = friend;
    return (
        <div>
            <h2>
                <span>{albumId}
                </span> {tittle}
            </h2>
            <img src={url} alt="" />
        </div>
    );
};

export default Friend;