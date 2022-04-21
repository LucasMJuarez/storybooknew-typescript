import React from 'react';
import Label from '.';

export default {
    title: 'Labels/Background',
    component: Label,
};

export const FirstLabelStorie = (args: {text: string}) => <Label category='First' text={args.text} />;

FirstLabelStorie.argTypes = {
    text: {control: 'text'},
};

FirstLabelStorie.args = {
    text: 'ACTIVO',
};

export const SecondLabelStorie = (args: {text: string}) => <Label category='Second' text={args.text} />;

SecondLabelStorie.argTypes = {
    text: {control: 'text'},
};

SecondLabelStorie.args = {
    text: 'ACTIVO',
};

export const ThirdLabelStorie = (args: {text: string}) => <Label category='Third' text={args.text} />;

ThirdLabelStorie.argTypes = {
    text: {control: 'text'},
};

ThirdLabelStorie.args = {
    text: 'ACTIVO',
};

export const FourthLabelStorie = (args: {text: string}) => <Label category='Fourth' text={args.text} />;

FourthLabelStorie.argTypes = {
    text: {control: 'text'},
};

FourthLabelStorie.args = {
    text: 'ACTIVO',
};

export const FifthLabelStorie = (args: {text: string}) => <Label category='Fifth' text={args.text} />;

FifthLabelStorie.argTypes = {
    text: {control: 'text'},
};

FifthLabelStorie.args = {
    text: 'ACTIVO',
};

export const SixthLabelStorie = (args: {text: string}) => <Label category='Sixth' text={args.text} />;

SixthLabelStorie.argTypes = {
    text: {control: 'text'},
};

SixthLabelStorie.args = {
    text: 'ACTIVO',
};
