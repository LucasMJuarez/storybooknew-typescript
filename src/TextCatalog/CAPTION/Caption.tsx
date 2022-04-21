import * as React from 'react';
import styles from './Caption.styles';

function Caption(props: {text: string; level: number; align: string; type: string}) {
    return <div className={styles.caption[props.level][props.align][props.type]}>{props.text}</div>;
}

export default Caption;
