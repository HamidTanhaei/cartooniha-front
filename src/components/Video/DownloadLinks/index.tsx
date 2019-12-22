import React from 'react';
import './style.scss';

interface IProps {
    linkString: string;
}

class DownloadLinks extends React.Component<IProps> {
    public render() {
        const { linkString } = this.props;

        return (
            <ul className="dl-list">
                {linkString && linkString.split('|||').map((item, key) => {
                    if (item) {
                        const [title, link] = item.split('###');
                        return (
                            <li key={key}>
                                <a href={process.env.RAZZLE_APP_DOWNLOAD_SERVER + link} target="_blank" className="link-dl">
                                    {title}
                                </a>
                                <a href={process.env.RAZZLE_APP_DOWNLOAD_SERVER + link} target="_blank" className="dl-btn hidden-xs" />
                            </li>
                        );
                    } else {
                                return '';
                    }

                })}
            </ul>);
    }
}

export default DownloadLinks;
