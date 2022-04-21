import React from 'react';
import AmountHeader40R from '.';

export default {
    title: 'Texts/Basics/Center/AmountHeader40R',
    component: AmountHeader40R,
};

export const AmountHeader40RStorie = (args: {text: string}) => (
    <div style={{backgroundColor: '#aaa'}}>
        <AmountHeader40R text={args.text} />
    </div>
);

AmountHeader40RStorie.argTypes = {
    text: {control: 'text'},
};

AmountHeader40RStorie.args = {
    text: 'Tenés',
};
