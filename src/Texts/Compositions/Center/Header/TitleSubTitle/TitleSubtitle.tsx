import React from 'react'
import styles from './TitleSubtitle.styles'
import Body from '../../../../../TextCatalog/BODY/Body'
import Sub from '../../../../../TextCatalog/SUB/Sub'

export default function TitleSubtitle(props: { title: string; subtitle: string; }) {
    return (
        <div className={styles.container}>
            <Body text={props.title} level={2} align='Center' type='text_button_primary' />
            <Sub text={props.subtitle} level={1} align='Center' type='text_chip_filter' />
        </div>
    )
}