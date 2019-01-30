import React from 'react';
import ContentLoader from 'react-content-loader';
const SingleLine = (props: any) => {
    const {height, width} = props.config;
    return(
        <span style={{width: `${width}px`, height: `${height}px`, display: 'inline-block'}}>
            <ContentLoader
                height={height}
                width={width}
                speed={2}
                primaryColor="#dddcdc"
                secondaryColor="#ecebeb"
            >
                <rect x="0" y="0" rx="5" ry="5" width={width} height={height} />
            </ContentLoader>
        </span>
    );
};

export default SingleLine;