import React from 'react';
import Amount from '.';

export default {
    title: 'Resources/ListsAmount/Right/Amount',
    component: Amount,
};

export const PositiveAmount = (args: {amount: number; showNegativeSymbol: boolean}) => (
    <Amount showNegativeSymbol={args.showNegativeSymbol} amount={args.amount} />
);

PositiveAmount.argTypes = {
    amount: {control: 'number'},
};

PositiveAmount.args = {
    amount: 33,
};

export const NegativeAmount = (args: {amount: number; showNegativeSymbol: boolean}) => (
    <Amount showNegativeSymbol={args.showNegativeSymbol} amount={args.amount} />
);
NegativeAmount.argTypes = {
    amount: {control: 'number'},
};

NegativeAmount.args = {
    amount: -33,
};
export const StringAmount = (args: {amount: number; showNegativeSymbol: boolean}) => (
    <Amount showNegativeSymbol={args.showNegativeSymbol} amount={args.amount} />
);

StringAmount.argTypes = {
    amount: {control: 'text'},
};

StringAmount.args = {
    amount: '011 443-3556',
};

export const AmountHeadline = (args: {amount: number; isAmountHeadline?: boolean}) => (
    <Amount amount={args.amount} isAmountHeadline={true} />
);

AmountHeadline.argTypes = {
    amount: {control: 'number'},
    isAmountHeadline: {contro: 'boolean'},
};

AmountHeadline.args = {
    amount: 999.9,
    isAmountHeadline: true,
};