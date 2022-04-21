import React from 'react';
import styles from './TwoL.styles';
import AssetOrchester, {assetEnum} from '../../../../../../Assets/40/AssetOrchester/AssetOrchester';
import RightChevron from '../../../../../../Resources/ListsChevron/Right/Chevron';
import Bin from '../../../../../../Assets/24/Bin';
import Text14R from '../../../../../../Resources/ListsChevron/Text14R/Secondary';
import Text16R from '../../../../../../Resources/ListsChevron/Text16R/';

function TwoL(props: {
    primaryText: string;
    secondaryText: string;
    onClick: Function;
    asset: assetEnum;
    onkeyPress?: React.KeyboardEventHandler;
    tabIndex?: number;
    showArrow?: boolean;
    showTrash?: boolean;
    isSelected?: boolean;
}) {
    return (
        <div className={styles.background}>
            <div
                onClick={() => props.onClick()}
                tabIndex={props.tabIndex}
                className={`${styles.container} ${props.isSelected && styles.containerActive}`}
                onKeyDown={props.onkeyPress}
            >
                <div className={styles.textAssetContainer}>
                    <AssetOrchester asset={props.asset} />
                    <div className={styles.textContainer}>
                        <Text16R text={props.primaryText} />
                        <Text14R text={props.secondaryText} />
                    </div>
                </div>
                {props.showArrow && (
                    <div className={styles.chevronContainer}>
                        <RightChevron />
                    </div>
                )}
                {props.showTrash && (
                    <div className={styles.trashContainer}>
                        <Bin />
                    </div>
                )}
            </div>
        </div>
    );
}

export default TwoL;
