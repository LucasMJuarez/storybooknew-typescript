import * as React from 'react';
import AssetOrchester from '../../../../Assets/32/AssetOrchester';
import {assetEnum} from '../../../../Assets/32/AssetOrchester/AssetOrchester';
import styles from './IconActive.styles';

export type IconActiveProps = {
    text: string;
    asset: assetEnum;
    onClick?: Function;
    tabIndex?: number;
    role?: string;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
};

function IconActive(props: IconActiveProps) {
    return (
        <div
            data-testid='container'
            className={props.onClick ? `${styles.pointer} ${styles.container}` : styles.container}
            onClick={() => props.onClick?.()}
            tabIndex={props.tabIndex}
            role={props.role}
            aria-label={props.ariaLabel}
            onKeyPress={props.onKeyPress || function () {}}
        >
            <div data-testid='asset' className={styles.asset}>
                <AssetOrchester asset={props.asset} />
            </div>
            <p data-testid='text' className={styles.text}>
                {props.text}
            </p>
        </div>
    );
}

export default IconActive;
