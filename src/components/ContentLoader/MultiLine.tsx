import React from 'react';
import ContentLoader from 'react-content-loader';
const MultiLine = (props: any) => {
    const {height, width} = props.config;
    return(
        <ContentLoader
            height={70}
            width={1000}
            speed={2}
            primaryColor="#dddcdc"
            secondaryColor="#ecebeb"
        >
            <rect x="0" y="0"  rx="5" ry="5" width={1000} height={10} />
            <rect x="0" y="20" rx="5" ry="5" width={1000} height={10} />
            <rect x="0" y="40" rx="5" ry="5" width={1000} height={10} />
            <rect x="0" y="60" rx="5" ry="5" width={1000} height={10} />
        </ContentLoader>
    );
};

export default MultiLine;