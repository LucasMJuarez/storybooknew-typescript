import * as React from 'react';
import styles from './Headline.styles';

function Headline(props: {text: string; level: number; align: string; type: string}) {
    return <div className={styles.headline[props.level][props.align][props.type]}>{props.text}</div>;
}

export default Headline;
