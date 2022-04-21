import React from 'react';
import styles from './TwoL.styles';
import {assetEnum} from '../../../../../../Assets/40/AssetOrchester/AssetOrchester';
import SlimLineCentered from '../../../../../../Dividers/SlimLineCentered';
import Text14R from '../../../../../../Resources/ListsChevron/Text14R/Secondary';
import Text16R from '../../../../../../Resources/ListsChevron/Text16R';
import PlaceHolder from '../../../../../../Assets/Placeholder/40';
import CheckboxOff from '../../../../../../Controls/CheckboxOff';
import CheckboxOn from '../../../../../../Controls/CheckboxOn';

export default function TwoL(props: {
    primaryText: string;
    secondaryText: string;
    onClick?: Function;
    active?: boolean;
    asset: assetEnum;
    hideCheckbox: boolean;
    tabIndex?: number;
    onKeyPress?: React.KeyboardEventHandler;
    ariaLabel?: string;
    ariaChecked?: boolean;
    role?: string;
    id?: string;
}) {
    return (
        <button
            id={props.id}
            onClick={() => props.onClick?.()}
            className={props.hideCheckbox ? styles.container : styles.containerWithCheckbox}
            aria-label={props.ariaLabel}
            aria-checked={props.ariaChecked}
            role={props.role}
            tabIndex={props.tabIndex}
            onKeyPress={props.onKeyPress || function () {}}
        >
            <div className={styles.content}>
                <div className={styles.subContent}>
                    <div className={styles.assetContainer}>
                        <PlaceHolder asset={props.asset} />
                    </div>
                    <div className={styles.textContainer}>
                        <Text16R text={props.primaryText} />
                        <Text14R text={props.secondaryText} />
                    </div>
                </div>
                {!props.hideCheckbox && (props.active ? <CheckboxOn /> : <CheckboxOff />)}
            </div>
            <SlimLineCentered />
        </button>
    );
}
