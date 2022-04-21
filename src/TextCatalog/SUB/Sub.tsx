import * as React from 'react';
import styles from './Sub.styles';

function Sub(props: {text: string; level: number; align: string; type: string}) {
    return (
        <div
            className={styles.sub[props.level][props.align][props.type]}
            dangerouslySetInnerHTML={{__html: props.text}}
        />
    );
}

export default Sub;
