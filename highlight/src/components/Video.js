import React from 'react';

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={props.title}></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

export default Video;