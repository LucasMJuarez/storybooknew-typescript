import React from 'react';
import AssetOrchester, {assetEnum} from '../../../../../../Assets/24/AssetOrchester/AssetOrchester';
import Right from '../../../../../../Assets/24/Chevron/Right';
import SlimLineCentered from '../../../../../../Dividers/SlimLineCentered';
import Text16R from '../../../../../../Resources/ListsChevron/Text16R';
import styles from './OneL.styles';
export default function OneL(props: {
    text: string;
    onClick: Function;
    asset?: assetEnum;
    tabIndex?: number;
    onkeyPress?: React.KeyboardEventHandler;
    hideLine?: boolean;
    ariaLabel?: string;
    role?: string;
    children?: JSX.Element;
}) {
    return (
        <>
            <div
                onClick={() => props.onClick()}
                className={styles.container}
                tabIndex={props.tabIndex}
                onKeyPress={props.onkeyPress || function () {}}
                aria-label={props.ariaLabel}
                role={props.role}
            >
                <div className={styles.content}>
                    <div className={styles.assetContainer}>
                        {props.asset ? <AssetOrchester asset={props.asset} /> : props.children}
                    </div>
                    <Text16R text={props.text} />
                </div>
                <Right />
            </div>
            {props.hideLine ? null : <SlimLineCentered />}
        </>
    );
}
