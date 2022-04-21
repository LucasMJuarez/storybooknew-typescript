import React from 'react'
import styles from './ServiceError.styles'
import TitleServiceError from '../../Resources/ServiceError/TitleServiceError'
import Secondary from '../../Buttons/Secondary'

export default function ServiceError(props: { description: string; onClick: Function; title: string; buttonText: string }) {
    return (
        <div>
            <TitleServiceError text={props.title} />

            <div className={styles.description}>
                {props.description}
            </div>
            <div className={styles.buttonContainer}>
                <Secondary text={props.buttonText} onClick={props.onClick} />
            </div>
        </div>
    )
}
