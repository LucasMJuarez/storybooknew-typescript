import * as React from 'react';
import Right from '../../../../../../Assets/24/Chevron/Right';
import AssetOrchester from '../../../../../../Assets/32/AssetOrchester';
import {assetEnum} from '../../../../../../Assets/32/AssetOrchester/AssetOrchester';
import SlimLineCentered from '../../../../../../Dividers/SlimLineCentered';
import Text16R from '../../../../../../Resources/ListsChevron/Text16R';
import styles from './OneL.styles';

function OneL(props: {
    text: string;
    onClick: Function;
    asset: assetEnum;
    hideLine?: boolean;
    tabIndex?: number;
    colorText?: boolean;
    hideArrow?: boolean;
    onKeyPress?: React.KeyboardEventHandler;
    ariaLabel?: string;
    role?: string;
}) {
    return (
        <div
            onClick={() => props.onClick()}
            className={styles.container}
            tabIndex={props.tabIndex}
            onKeyPress={props.onKeyPress || function () {}}
            aria-label={props.ariaLabel}
            role={props.role}
        >
            <div className={styles.content}>
                <div className={styles.assetConteiner}>
                    <AssetOrchester asset={props.asset} />
                </div>
                <div data-testid='color-text' className={props.colorText ? styles.linkText : ''}>
                    <Text16R text={props.text} />
                </div>
            </div>
            {props.hideArrow ? null : <Right />}
            {props.hideLine ? null : <SlimLineCentered />}
        </div>
    );
}

export default OneL;
