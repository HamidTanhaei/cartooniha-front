import React from 'react';
import ContentLoader from 'react-content-loader';

function ItemLoading() {
    return (
        <ContentLoader
            height={180}
            width={200}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
        >
            <rect x="0" y="0" rx="10" ry="10" width="200" height="180" />
        </ContentLoader>
    );
}

export default ItemLoading;
