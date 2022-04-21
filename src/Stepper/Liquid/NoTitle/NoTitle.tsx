import React from 'react'
import Liquid from '../../../Resources/Stepper/Liquid';
import styles from './NoTitle.styles';

export default function NoTitle(props: { progress: string }) {

    return (
        <>
            <div className={styles.stepperBackground}>
                <Liquid progress={props.progress}/>
            </div>
        </>
    )
}
