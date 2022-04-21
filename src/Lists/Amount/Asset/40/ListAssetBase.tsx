import * as React from 'react';
import styles from './ListAssetBase.styles';
import AssetOrchester from '../../../../Assets/40/AssetOrchester';
import Title from '../../../../Resources/ListsAmount/Left/Primary16R';
import Description from '../../../../Resources/ListsAmount/Left/Secondary14R';
import Amount from '../../../../Resources/ListsAmount/Right/Amount';
import Divider from '../../../../Dividers/SlimLineCentered';
import Info from '../../../../Resources/ListsAmount/Right/Info';
import {assetEnum} from '../../../../Assets/40/AssetOrchester/AssetOrchester';
import Label from '../../../../Labels/Background/Label';
import {labelCategoryEnum} from '../../../../Labels/Background/Label/Label';

function ListAssetBase(props: {
    asset: assetEnum;
    title: string;
    description?: string;
    labelText?: string;
    labelCategory?: labelCategoryEnum;
    amount: number | string;
    touchable?: boolean;
    tabIndex?: number;
    onClick?: Function;
    showNegativeSymbol?: boolean;
}) {
    const handlePress = () => {
        if (props.onClick) {
            return props.onClick();
        } else return;
    };
    let container = props.touchable ? styles.container + ' ' + styles.onHover : styles.container;
    return (
        <>
            <div onClick={handlePress} className={container} tabIndex={props.tabIndex}>
                <div className={styles.icon}>
                    <AssetOrchester asset={props.asset} />
                </div>
                <div className={styles.textContainer}>
                    <Title text={props.title} />
                    {props.description ? <Description text={props.description} /> : null}
                    {props.labelText ? (
                        <div className={styles.labelContainer}>
                            <Label category={props.labelCategory || 'First'} text={props.labelText} />
                        </div>
                    ) : null}
                </div>
                <div className={styles.amountContainer}>
                    <Amount showNegativeSymbol={props.showNegativeSymbol} amount={props.amount} />
                    {props.touchable ? (
                        <div
                            className={`${styles.info} ${props.description && props.labelText ? styles.info3L : null}`}
                        >
                            <Info />
                        </div>
                    ) : null}
                </div>
            </div>
            <Divider />
        </>
    );
}

export default ListAssetBase;
