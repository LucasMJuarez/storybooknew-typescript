import React from 'react';
import TextActive from '.';
import AmountContainer from '../../../../Grids/Selectors/104/AmountContainer';

export default {
    title: 'Resources/Grids/104/TextActive',
    component: TextActive,
};

export const AmountActive = (args: {amount: number; onClick: Function}) => (
    <AmountContainer>
        <TextActive onClick={args.onClick} amount={args.amount} />
    </AmountContainer>
);

AmountActive.argTypes = {
    amount: {control: 'number'},
};

AmountActive.args = {
    amount: 5,
    onClick: () => alert('Hello There'),
};

export const AmountSelected = (args: {amount: number; onClick: Function}) => (
    <>
        CLICK ON ME TO AMOUNTSELECTED
        <AmountContainer>
            <TextActive onClick={args.onClick} amount={args.amount} />
        </AmountContainer>
    </>
);

AmountSelected.argTypes = {
    amount: {control: 'number'},
};

AmountSelected.args = {
    amount: 5,
    onClick: () => alert('Hello There'),
};
