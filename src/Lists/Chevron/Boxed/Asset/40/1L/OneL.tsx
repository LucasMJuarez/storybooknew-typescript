import React from 'react';
import styles from './OneL.styles';
import AssetOrchester, { assetEnum } from '../../../../../../Assets/40/AssetOrchester/AssetOrchester';
import Text16R from '../../../../../../Resources/ListsChevron/Text16R';
import Checkbox from '../../../../../../Controls/Checkbox';
import Right from '../../../../../../Assets/24/Chevron/Right';

function OneL(props: {
    text: string;
    isSelected: boolean;
    onClick: Function;
    asset: assetEnum;
    tabIndex?: number;
    ariaLabel?: string;
    role?: string;
    showArrow?: boolean;
    onkeyPress?: React.KeyboardEventHandler;
}) {
    return (
        <div className={styles.background}>
            <div
                className={`${styles.container} ${props.isSelected && styles.containerActive}`}
                onClick={() => props.onClick()}
                onKeyPress={props.onkeyPress || function () { }}
                tabIndex={props.tabIndex}
                aria-label={props.ariaLabel}
                role={props.role}
            >
                <div className={styles.textAssetContainer}>
                    <AssetOrchester asset={props.asset} />
                    <div className={styles.textContainer}>
                        <Text16R text={props.text} />
                    </div>
                </div>
                {props.showArrow && !props.isSelected && (
                    <div className={styles.checkboxContainer}>
                        <Right />
                    </div>
                )}

                {props.isSelected && (
                    <div className={styles.checkboxContainer}>
                        <Checkbox />
                    </div>
                )}
            </div>
        </div>
    );
}

export default OneL;
