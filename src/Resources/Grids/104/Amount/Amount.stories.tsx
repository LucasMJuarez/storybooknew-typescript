import React from 'react';
import Amount from '.';
import AmountContainer from '../../../../Grids/Selectors/104/AmountContainer';

export default {
    title: 'Resources/Grids/104/Amount',
    component: Amount,
};

export const AmountActive = (args: {amount: number; onClick: Function}) => (
    <AmountContainer>
        <Amount onClick={args.onClick} amount={args.amount} />
    </AmountContainer>
);

AmountActive.argTypes = {
    amount: {control: 'number'},
};

AmountActive.args = {
    amount: 50,
    onClick: () => alert('Hello There'),
};

export const AmountThousands = (args: {amount: number; onClick: Function}) => (
    <AmountContainer>
        <Amount onClick={args.onClick} amount={args.amount} />
    </AmountContainer>
);

AmountThousands.argTypes = {
    amount: {control: 'number'},
};

AmountThousands.args = {
    amount: 5050,
    onClick: () => alert('Hello There'),
};

export const AmountDecimals = (args: {amount: number; onClick: Function}) => (
    <AmountContainer>
        <Amount onClick={args.onClick} amount={args.amount} />
    </AmountContainer>
);

AmountDecimals.argTypes = {
    amount: {control: 'number'},
};

AmountDecimals.args = {
    amount: 50.5,
    onClick: () => alert('Hello There'),
};

export const AmountNegative = (args: {amount: number; onClick: Function}) => (
    <AmountContainer>
        <Amount onClick={args.onClick} amount={args.amount} />
    </AmountContainer>
);

AmountNegative.argTypes = {
    amount: {control: 'number'},
};

AmountNegative.args = {
    amount: -50,
    onClick: () => alert('Hello There'),
};

export const AmountSelected = (args: {amount: number; onClick: Function}) => (
    <>
        CLICK ON ME TO AMOUNTSELECTED
        <AmountContainer>
            <Amount onClick={args.onClick} amount={args.amount} />
        </AmountContainer>
    </>
);

AmountSelected.argTypes = {
    amount: {control: 'number'},
};

AmountSelected.args = {
    amount: 50,
    onClick: () => alert('Hello There'),
};
