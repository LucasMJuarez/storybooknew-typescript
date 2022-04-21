import React from 'react'
import AssetOrchester, { assetEnum } from '../../36/AssetOrchester/AssetOrchester'

export default function PlaceHolder(props: {asset: assetEnum}) {
    return (
        <div>
            <AssetOrchester asset={props.asset} />
        </div>
    )
}
