import React from 'react';
import AmountChild from '../../../../Resources/Grids/104/Amount';
import AmountContainer from '.';

export default {
    title: 'Grids/Selectors/104/AmountContainer',
    component: AmountContainer,
};

export const MySuperTest = (args: {amount: number; onClick: Function}) => (
    <AmountContainer>
        <AmountChild onClick={args.onClick} amount={args.amount} />
        <AmountChild onClick={args.onClick} amount={args.amount + 10} />
        <AmountChild onClick={args.onClick} amount={args.amount + 20} />
    </AmountContainer>
);

MySuperTest.argTypes = {
    amount: {control: 'number'},
};

MySuperTest.args = {
    amount: 50,
    onClick: () => alert('Hello There'),
};
