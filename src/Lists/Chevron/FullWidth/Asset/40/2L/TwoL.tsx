import React, {useState} from 'react';
import styles from './TwoL.styles';
import  {assetEnum} from '../../../../../../Assets/40/AssetOrchester/AssetOrchester';
import RightChevron from '../../../../../../Resources/ListsChevron/Right/Chevron';
import Text14R from '../../../../../../Resources/ListsChevron/Text14R/Secondary';
import Text16R from '../../../../../../Resources/ListsChevron/Text16R';
import PlaceHolder from '../../../../../../Assets/Placeholder/40';
import CheckboxBlue from '../../../../../../Controls/CheckboxBlue';
import Top from '../../../../../../Assets/24/Chevron/Top';
import Down from '../../../../../../Assets/24/Chevron/Down';
import SlimLineCentered from '../../../../../../Dividers/SlimLineCentered';
import SlimLineFullWidth from '../../../../../../Dividers/SlimLineFullWidth';

export default function TwoL(props: {
    primaryText: string;
    secondaryText?: string;
    onClick?: Function;
    asset: assetEnum;
    isSelected?: boolean;
    isOverlayController?: boolean;
    hideIcon?: boolean;
    hideDivider?: boolean;
    dividerFullWidth?: boolean;
    tabIndex?: number;
    onkeyPress?: React.KeyboardEventHandler;
    ariaLabel?: string;
    role?: string;
    ariaLabelled?: string;
    ariaHiddenTextPrimary?: boolean;
    ariaHiddenTextSecondary?: boolean;
    idTextPrimary?: string;
    idTextSecondary?: string;
    ariaReadOnly?: boolean;
    ariaHidden?: boolean;
}) {
    const [isActive, setIsActive] = useState(false);

    const handleOnClick = () => {
        setIsActive(!isActive);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        props.onClick ? props.onClick() : null;
    };

    return (
        <div
            onClick={() => (props.isOverlayController ? handleOnClick() : (props.onClick ? props.onClick() : null))}
            className={styles.container}
            tabIndex={props.tabIndex}
            onKeyPress={props.onkeyPress || function () {}}
            aria-label={props.ariaLabel}
            role={props.role}
            aria-labelledby={props.ariaLabelled}
            aria-readonly={props.ariaReadOnly}
            aria-hidden={props.ariaHidden}
        >
            <div className={styles.content}>
                <div className={styles.assetContainer}>
                    <PlaceHolder asset={props.asset} />
                </div>
                <div className={styles.textContainer}>
                    <Text16R text={props.primaryText} id={props.idTextPrimary} ariaHidden={props.ariaHiddenTextPrimary} />
                    {props.secondaryText && <Text14R text={props.secondaryText} id={props.idTextSecondary} ariaHidden={props.ariaHiddenTextSecondary} />}
                </div>
            </div>
            {!props.isOverlayController && !props.hideIcon && !props.isSelected && <RightChevron />}
            {props.isSelected && <RightChevron item={<CheckboxBlue />} />}
            {props.isOverlayController && <RightChevron item={isActive ? <Top /> : <Down />} />}
            {!props.hideDivider && (props.dividerFullWidth ? <SlimLineFullWidth /> : <SlimLineCentered />)}
        </div>
    );
}
