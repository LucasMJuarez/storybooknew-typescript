import React from 'react';
import styles from './Text14R.styles';


export default function Text14R(props: { text: string; ariaHidden?: boolean }) {
    return (
        <div aria-hidden={props.ariaHidden} className={styles.text} dangerouslySetInnerHTML={{ __html: props.text }}/>
    )
}
