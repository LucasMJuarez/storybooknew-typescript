import * as React from 'react';
import AmountType from './AmountType';

export default {
    title: 'Resources/ListsAmount/Right/AmountType',
    component: AmountType,
};

type Properties = {
    amount: string | number,
    text?: string,
    id?: string,
    ariaHidden?: boolean,
    showNegativeSymbol?: boolean,
    isLinedThrough?: boolean;
    isPrimaryType?: boolean;
}
const wrapper = (args: Properties): JSX.Element => {
    return (
        <AmountType
            amount={args.amount}
            text={args.text}
            showNegativeSymbol={args.showNegativeSymbol}
            isLinedThrough={args.isLinedThrough}
            isPrimaryType={args.isPrimaryType}
        />
    );
};
export const PositiveAmount = (args: { amount: number; showNegativeSymbol: boolean; text: string; }) => (
    wrapper(args)
);

PositiveAmount.argTypes = {
    amount: { control: 'number' },
    text: { control: 'text' },
};

PositiveAmount.args = {
    amount: 33,
    text: '/month'
};

export const NegativeAmount = (args: { amount: number; showNegativeSymbol: boolean; text: string;}) => (
    wrapper(args)
);
NegativeAmount.argTypes = {
    amount: { control: 'number' },
    text: { control: 'text' },
    showNegativeSymbol: { control: 'boolean' },
};

NegativeAmount.args = {
    amount: -33,
    text: '/mes',
    showNegativeSymbol: true,
};

export const NegativeAmountPrimaryStyle = (args: { amount: number; showNegativeSymbol: boolean; text: string;  isPrimaryType:boolean }) => (
    wrapper(args)
);
NegativeAmountPrimaryStyle.argTypes = {
    amount: { control: 'number' },
    text: { control: 'text' },
    showNegativeSymbol: { control: 'boolean' },
    isPrimaryType: { control: 'boolean' },
};

NegativeAmountPrimaryStyle.args = {
    amount: -33,
    text: '/mes',
    showNegativeSymbol: true,
    isPrimaryType: true,
};
export const StringAmount = (args: { amount: number; text: string; }) => (
    wrapper(args)
);

StringAmount.argTypes = {
    amount: { control: 'text' },
    text: { control: 'text' },
};

StringAmount.args = {
    amount: '011 443-3556',
    text: 'tel.',
};

export const LinedThrough = (args: { amount: number; text: string; isLinedThrough: boolean; }) => (
    wrapper(args)
);

LinedThrough.argTypes = {
    amount: { control: 'number' },
    text: { control: 'text' },
    isLinedThrough: { control: 'boolean' },
};

LinedThrough.args = {
    amount: 33,
    text: '/month',
    isLinedThrough: true,
};