import React from 'react';
import AssetOrchester, {assetEnum} from '../../../../../../Assets/24/CreditCards/AssetOrchester/AssetOrchester';
import SlimLineCentered from '../../../../../../Dividers/SlimLineCentered';
import styles from './OneL.styles';
import Body from '../../../../../../TextCatalog/BODY';


export default function OneL(props: {
    text: string;
    asset: assetEnum;
    tabIndex?: number;
    hideLine?: boolean;
    ariaLabel?: string;
    role?: string;
}) {
    return (
        <>
            <div className={styles.container} tabIndex={props.tabIndex} aria-label={props.ariaLabel} role={props.role}>
                <div className={styles.content}>
                    <div className={styles.assetContainer}>
                        <AssetOrchester asset={props.asset} />
                    </div>
                    <Body level={1} align='Left' type='text_primary' text={props.text} />
                </div>
            </div>
            {props.hideLine ? null : <SlimLineCentered />}
        </>
    );
}
