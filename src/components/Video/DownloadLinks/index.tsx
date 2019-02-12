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
                        const current = item.split('###');
                        return (
                            <li key={key}>
                                <a href={current[1]} target="_blank" className="link-dl">
                                    {current[0]}
                                </a>
                                <a href={current[1]} target="_blank" className="dl-btn hidden-xs" />
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
