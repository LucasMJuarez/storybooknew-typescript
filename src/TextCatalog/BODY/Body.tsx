import * as React from 'react';
import styles from './Body.styles';

function Body(props: {text: string; level: number; align: string; type: string; id?: string; ariaHidden?: boolean}) {
    return (
        <span
            id={props.id}
            aria-hidden={props.ariaHidden}
            className={styles.body[props.level][props.align][props.type]}
            dangerouslySetInnerHTML={{__html: props.text}}
        ></span>
    );
}

export default Body;
