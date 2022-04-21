import React from 'react';
import styles from './OneL.styles';
import {assetEnum} from '../../../../../Assets/40/AssetOrchester/AssetOrchester';
import SlimLineCentered from '../../../../../Dividers/SlimLineCentered';
import Text16R from '../../../../../Resources/ListsChevron/Text16R';
import PlaceHolder from '../../../../../Assets/Placeholder/40';

export default function OneL(props: {
    text: string;
    onClick: Function;
    asset: assetEnum;
    hideLine?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    role?: string;
    ariaHiddenPrimary?: boolean;
    ariaHiddenSecondary?: boolean;
    id?: string;
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
                    <PlaceHolder asset={props.asset} />
                </div>
                <div className={styles.textContainer}>
                    <Text16R text={props.text} ariaHidden={props.ariaHiddenPrimary} id={props.id} />
                </div>
            </div>
            {props.hideLine ? null : <SlimLineCentered />}
        </div>
    );
}
