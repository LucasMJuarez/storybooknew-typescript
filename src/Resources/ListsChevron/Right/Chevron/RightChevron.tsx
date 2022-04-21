import React from 'react'
import Right from '../../../../Assets/24/Chevron/Right'
import styles from './RightChevron.styles'

function RightChevron(props: {item?: JSX.Element}) {
    return (
        <div className={styles.container}>
            {props.item || <Right />}
        </div>
    )
}

export default RightChevron