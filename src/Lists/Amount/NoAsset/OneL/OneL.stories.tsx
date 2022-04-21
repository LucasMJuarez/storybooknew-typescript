import React from 'react';
import OneL from '.';

export default {
    title: 'Lists/Amount/NoAsset/1L',
    component: OneL,
};

export const OneLStorie = (args: {
    title: string;
    amount: number | string;
    hideLine?: boolean;
    showArrow?: boolean;
    tabIndex?: number;
    onKeyPress?: React.KeyboardEventHandler;
}) => (
    <OneL
        amount={args.amount}
        title={args.title}
        hideLine={args.hideLine}
        showArrow={args.showArrow}
        tabIndex={args.tabIndex}
        onKeyPress={args.onKeyPress}
    />
);

OneLStorie.argTypes = {
    title: { control: 'text' },
    amount: { control: 'number' },
    hideLine: { control: 'boolean' },
    showArrow: { control: 'boolean' },
};

OneLStorie.args = {
    title: 'My Super Test',
    amount: 33,
    hideLine: true,
    showArrow: false,
    tabIndex: 0,
    onKeyPress: () => alert('Hello keypress'),
};

export const OneLStringStorie = (args: {
    title: string;
    amount: number | string;
    hideLine?: boolean;
    showArrow?: boolean;
    tabIndex?: number;
    onKeyPress?: React.KeyboardEventHandler;
}) => (
    <OneL
        amount={args.amount}
        title={args.title}
        hideLine={args.hideLine}
        showArrow={args.showArrow}
        tabIndex={args.tabIndex}
        onKeyPress={args.onKeyPress}
    />
);

OneLStringStorie.argTypes = {
    title: { control: 'text' },
    amount: { control: 'text' },
    hideLine: { control: 'boolean' },
    showArrow: { control: 'boolean' },
};

OneLStringStorie.args = {
    title: 'My Super Test',
    amount: '011 4563-5325',
    hideLine: true,
    showArrow: false,
    tabIndex: 0,
    onKeyPress: () => alert('Hello keypress'),
};

export const OneLStorieHeadline = (args: {
    title: string;
    amount: number | string;
    isAmountHeadline?: boolean;
}) => (
    <OneL
        title={args.title}
        amount={args.amount}
        isAmountHeadline={args.isAmountHeadline}
    />
);

OneLStorieHeadline.argTypes = {
    title: { control: 'text' },
    amount: { control: 'number' },
    isAmountHeadline: { control: 'boolean' },
};

OneLStorieHeadline.args = {
    title: 'My Super Test',
    amount: 999,
    isAmountHeadline: true,
};

export const OneLStorieAmountType = (args: {
    title: string;
    amount: number | string;
    isAmountType?: boolean;
    amountTypeText?: string;
    amountTypeLineThrough?: boolean;
    showNegativeSymbol?: boolean;
    isAmountTypePrimary?: boolean;
}) => (
    <OneL
        title={args.title}
        amount={args.amount}
        isAmountType={args.isAmountType}
        amountTypeText={args.amountTypeText}
        amountTypeLineThrough={args.amountTypeLineThrough}
        showNegativeSymbol={args.showNegativeSymbol}
        isAmountTypePrimary={args.isAmountTypePrimary}
    />
);

OneLStorieAmountType.argTypes = {
    title: { control: 'text' },
    amount: { control: 'number' },
    isAmountType: { control: 'boolean' },
    amountTypeText: { control: 'text' },
    amountTypeLineThrough: { control: 'boolean' },
    showNegativeSymbol: { control: 'boolean' },
    isAmountTypePrimary: { control: 'boolean' },

};

OneLStorieAmountType.args = {
    title: 'My Super Test',
    amount: -999,
    isAmountType: true,
    amountTypeText: '/mes',
    amountTypeLineThrough: false,
    showNegativeSymbol: true,
    isAmountTypePrimary:true,
};