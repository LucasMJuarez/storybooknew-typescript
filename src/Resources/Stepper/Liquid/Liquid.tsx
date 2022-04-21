import React from 'react'
import styles from './Liquid.styles';

export default function Liquid(props: { progress: string }) {

    return (
        <>
            <div className={styles.progressBackground}>
                <div className={styles.progress(props.progress)}></div>
            </div>
        </>
    )
}
