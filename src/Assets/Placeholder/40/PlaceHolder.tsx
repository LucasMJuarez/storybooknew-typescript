import React from 'react'
import AssetOrchester, { assetEnum } from '../../40/AssetOrchester/AssetOrchester'
import styles from './PlaceHolder.styles'

export default function PlaceHolder(props: {asset: assetEnum}) {
    return (
        <div className={styles.container}>
            <AssetOrchester asset={props.asset} />
        </div>
    )
}
