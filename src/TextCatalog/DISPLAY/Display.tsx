import * as React from 'react';
import styles from './Display.styles';

function Display(props: {text: string; level: number; align: string; type: string}) {
    return <div className={styles.display[props.level][props.align][props.type]}>{props.text}</div>;
}

export default Display;
