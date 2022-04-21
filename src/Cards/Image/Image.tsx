import React from 'react';
import styles from './Image.styles';

function Image(props: {
    url: string;
    alt: string;
    onClick?: Function | undefined;
    tabIndex?: number;
    onKeyPress?: React.KeyboardEventHandler;
}) {
    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src={props.url}
                alt={props.alt}
                tabIndex={props.tabIndex}
                onClick={() => props.onClick?.()}
                onKeyPress={props.onKeyPress || function () {}}
            />
        </div>
    );
}

export default Image;
