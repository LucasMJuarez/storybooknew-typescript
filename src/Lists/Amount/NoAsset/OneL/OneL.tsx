import React, { MouseEventHandler } from 'react';
import SlimLineCentered from '../../../../Dividers/SlimLineCentered';
import Primary16R from '../../../../Resources/ListsAmount/Left/Primary16R';
import Amount, { AmountProps } from '../../../../Resources/ListsAmount/Right/Amount';
import AmountType from '../../../../Resources/ListsAmount/Right/AmountType';
import Right from '../../../../Assets/24/Chevron/Right';
import styles from './OneL.styles';

function OneL(props: {
    title: string;
    amount: AmountProps;
    wrapAmount?: boolean;
    hideLine?: boolean;
    showArrow?: boolean;
    ariaLabel?: string;
    role?: string;
    tabIndex?: number;
    idText?: string;
    idAmount?: string;
    ariaHiddenText?: boolean;
    ariaHiddenAmount?: boolean;
    ariaLabelled?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    islink?: boolean;
    onKeyPress?: React.KeyboardEventHandler;
    isAmountHeadline?: boolean;
    isAmountType?: boolean;
    amountTypeText?: string;
    amountTypeLineThrough?: boolean;
    showNegativeSymbol?: boolean;
    isAmountTypePrimary?: boolean;
}) {
    return (
        <div
            onClick={props.onClick}
            className={props.islink ? styles.link : styles.container}
            aria-labelledby={props.ariaLabelled}
            role={props.role}
            tabIndex={props.tabIndex}
            aria-label={props.ariaLabel}
            onKeyPress={props.onKeyPress || function () { }}
        >
            <Primary16R text={props.title} id={props.idText} ariaHidden={props.ariaHiddenText} />
            <span className={props.wrapAmount === false ? styles.no_wrap_amount_container : styles.amount_container}>
                {props.isAmountType ?
                    <AmountType
                        amount={props.amount}
                        text={props.amountTypeText}
                        id={props.idAmount}
                        ariaHidden={props.ariaHiddenAmount}
                        isLinedThrough={props.amountTypeLineThrough}
                        showNegativeSymbol={props.showNegativeSymbol}
                        isPrimaryType={props.isAmountTypePrimary}
                    /> :
                    <Amount
                        amount={props.amount}
                        id={props.idAmount}
                        ariaHidden={props.ariaHiddenAmount}
                        isAmountHeadline={props.isAmountHeadline}
                    />
                }
                {!props.showArrow ? null : <Right />}
            </span>
            {props.hideLine ? null : <SlimLineCentered />}
        </div>
    );
};

export default OneL;