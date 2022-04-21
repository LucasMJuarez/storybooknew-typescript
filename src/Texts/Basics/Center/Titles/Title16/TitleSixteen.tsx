import React from 'react'
import styles from './TitleSixteen.styles';

export default function TitleSixteen(props: { text: string }) {
    return (
        <>
            <div className={styles.title}>{props.text}</div>
        </>
    )
}
