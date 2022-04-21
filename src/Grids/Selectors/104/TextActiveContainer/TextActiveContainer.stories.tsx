import React from 'react';
import TextActiveChild from '../../../../Resources/Grids/104/TextActive';
import TextActiveContainer from '.';

export default {
    title: 'Grids/Selectors/104/TextActiveContainer',
    component: TextActiveContainer,
};

export const MySuperTest = (args: {amount: number; onClick: Function}) => (
    <TextActiveContainer>
        <TextActiveChild onClick={args.onClick} amount={args.amount} />
        <TextActiveChild onClick={args.onClick} amount={args.amount + 1} />
        <TextActiveChild onClick={args.onClick} amount={args.amount + 2} />
    </TextActiveContainer>
);

MySuperTest.argTypes = {
    amount: {control: 'number'},
};

MySuperTest.args = {
    amount: 5,
    onClick: () => alert('Hello There'),
};
