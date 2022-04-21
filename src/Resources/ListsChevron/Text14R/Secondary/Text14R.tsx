import React from 'react'
import styles from './Text14R.styles'

function Text14R(props: {text: string; id?: string; ariaHidden?: boolean;}) {
    return (
        <div className={styles.text} id={props.id} aria-hidden={props.ariaHidden}>
            {props.text}
        </div>
    )
}

export default Text14R
