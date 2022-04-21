import React from 'react'
import styles from './TwoL.styles'
import { assetEnum } from '../../../../../Assets/40/AssetOrchester/AssetOrchester'
import SlimLineCentered from '../../../../../Dividers/SlimLineCentered'
import Text14R from '../../../../../Resources/ListsChevron/Text14R/Secondary'
import Text16R from '../../../../../Resources/ListsChevron/Text16R'
import PlaceHolder from '../../../../../Assets/Placeholder/40'

export default function TwoL(props: { 
    primaryText: string; 
    secondaryText: string; 
    onClick: Function; 
    asset: assetEnum;
    hideLine?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    role?: string;
    ariaHiddenPrimary?: boolean;
    ariaHiddenSecondary?: boolean;
    idPrimary?: string;
    idSecondary?: string;
    ariaLabelledBy?: string;
}) {
    return (
        <div 
            onClick={() => props.onClick()} 
            className={styles.container}
            tabIndex={props.tabIndex}
            aria-label={props.ariaLabel}
            role={props.role}
            aria-labelledby={props.ariaLabelledBy}
        >
            <div className={styles.content}>
                <div className={styles.assetContainer}>
                    <PlaceHolder asset={props.asset}/>
                </div>
                <div className={styles.textContainer}>
                    <Text16R text={props.primaryText} ariaHidden={props.ariaHiddenPrimary} id={props.idPrimary} />
                    <Text14R text={props.secondaryText} ariaHidden={props.ariaHiddenSecondary} id={props.idSecondary} />
                </div>
            </div>
            { props.hideLine ? null : <SlimLineCentered /> }
        </div>
    )
}
