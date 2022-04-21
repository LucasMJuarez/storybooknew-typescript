import React from 'react'
import BaseChart from '../BaseChart'
import { assetEnum } from '../../../../Assets/36/AssetOrchester/AssetOrchester'

const TwoL = (
    props : {
        text : string, 
        sub_secondary : string,
        icon : assetEnum
        value : number
    }
) => {
    return <BaseChart {...props} />
}

export default TwoL