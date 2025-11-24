import React from 'react';
import Article from './Article';
import Video from './Video';
import New from './New';
import Popular from './Popular';

function withHighlight(Component) {
    return function WrappedComponent(props) {
        if (props.views >= 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            );
        } else if (props.views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            );
        }
        return <Component {...props} />;
    }
}

function List(props) {
    const HighlightedVideo = withHighlight(Video);
    const HighlightedArticle = withHighlight(Article);

    return props.list.map((item, index) => {
        switch (item.type) {
            case 'video':
                return (
                    <HighlightedVideo key={index} {...item} />
                );

            case 'article':
                return (
                    <HighlightedArticle key={index} {...item} />
                );
                
            default:
                return null;
        }
    });
};

export default List;