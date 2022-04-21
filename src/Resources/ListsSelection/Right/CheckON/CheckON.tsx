import React from 'react'
import styles from './CheckON.styles'
import IcnArrow from '../../../../Assets/24/IcnArrow';

function CheckON(props: {item?: JSX.Element}) {
    return (
        <div className={styles.container}>
            {props.item || <IcnArrow />}
        </div>
    )
}

export default CheckON