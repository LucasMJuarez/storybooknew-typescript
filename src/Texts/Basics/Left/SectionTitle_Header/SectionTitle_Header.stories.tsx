import React from 'react';
import SectionTitle_Header from '.';

export default {
    title: 'Texts/Basics/Left/SectionTitle_Header',
    component: SectionTitle_Header,
};

export const SectionTitle_HeaderStorie = (args: {text: string}) => <SectionTitle_Header text={args.text} />;

SectionTitle_HeaderStorie.argTypes = {
    text: {control: 'text'},
};

SectionTitle_HeaderStorie.args = {
    text: 'My Super Test',
};
