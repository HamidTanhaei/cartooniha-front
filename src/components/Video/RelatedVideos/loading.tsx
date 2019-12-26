import React from 'react';
import ContentLoader from 'react-content-loader';

function Loading() {
    return (
        <ContentLoader
            width={277}
            height={91}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
        >
            <rect x="0" y="0" rx="8" ry="8" width="277" height="91" />
        </ContentLoader>
    );
}

export default Loading;