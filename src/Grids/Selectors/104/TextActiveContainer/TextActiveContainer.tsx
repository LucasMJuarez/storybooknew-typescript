import * as React from 'react';
import styles from './TextActiveContainer.styles';

function TextActiveContainer(props: {children: React.ReactNode}) {
    return <div className={styles.container}>{props.children}</div>;
}

export default TextActiveContainer;
