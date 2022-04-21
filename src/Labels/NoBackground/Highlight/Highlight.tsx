import * as React from 'react';
import styles from './Highlight.styles';

function Highlight(props: {text: string}) {
    return <div className={styles.container}>{props.text}</div>;
}

export default Highlight;
