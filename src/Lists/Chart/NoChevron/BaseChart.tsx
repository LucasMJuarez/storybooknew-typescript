import React from 'react'
import styles from './BaseChart.styles'
import Body from '../../../TextCatalog/BODY'
import Sub from '../../../TextCatalog/SUB'
import Placeholder from '../../../Assets/Placeholder/36'
import { assetEnum } from '../../../Assets/36/AssetOrchester/AssetOrchester'

const BaseChart = (
    props : { 
        text : string, 
        sub_primary? : string, 
        sub_secondary : string,
        icon : assetEnum,
        value : number
    }
) => {

    const { text, sub_primary, sub_secondary, icon, value } = props;

    const MAX : number = 138.23007675795088

    let porcentaje = MAX * (value / 100)

    let color = (value <= 20) ? '#EB7434' : '#5BC500'

    return (
        <div className={styles.card}>
            <div className={styles.boxedRowAccordion}>
                <div className={styles.imageContainer} >	
                    <svg className={styles.circle} xmlns="http://www.w3.org/2000/svg"  height="50" width="50" role="presentation" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="22" fill="none" stroke="#EEEEEE" strokeWidth="2" strokeDasharray={`${MAX}`} strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90, 24, 24)"></circle>
                    </svg>
                    <svg className={styles.circle} xmlns="http://www.w3.org/2000/svg"  height="50" width="50" role="presentation" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="22" fill="none" stroke={`${color}`} strokeWidth="2" strokeDasharray={`${porcentaje}, ${MAX}`} strokeDashoffset="1.478829384871176" strokeLinecap="round" transform="rotate(-90, 24, 24)"></circle>
                    </svg>
                    <div className={styles.icon}>
                        <Placeholder asset={icon} />
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <Body text={text} level={1} align='Left' type='text_primary' />
                    {(sub_primary) && <Sub text={sub_primary} level={1} align='Left' type='text_primary' />}
                    <Sub text={sub_secondary} level={1} align='Left' type='text_secondary' />
                </div>
            </div>
        </div>
    )
}

export default BaseChart;