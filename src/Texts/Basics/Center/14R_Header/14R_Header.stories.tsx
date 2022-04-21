import React from 'react';
import Header14R from '.';

export default {
    title: 'Texts/Basics/Center/Header14R',
    component: Header14R,
};

export const Header14RStorie = (args: {text: string}) => (
    <div style={{backgroundColor: '#aaa'}}>
        <Header14R text={args.text} />
    </div>
);

Header14RStorie.argTypes = {
    text: {control: 'text'},
};

Header14RStorie.args = {
    text: 'Tenés',
};
