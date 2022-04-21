import React from 'react'
import styles from './TitleServiceError.styles';

export default function TitleServiceError(props: { text: string }) {
    return (
        <div className={styles.text}>
            {props.text}
        </div>
    )
}

