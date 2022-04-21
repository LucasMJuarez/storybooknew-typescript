import React from 'react';
import Paragraph14LinkTerm from '.';

export default {
    title: 'Texts/Basics/Left/Paragraph14LinkTerm',
    component: Paragraph14LinkTerm,
};

export const Paragraph14LinkTermStorie = (args: { text: string }) => <Paragraph14LinkTerm {...args} />;

Paragraph14LinkTermStorie.argTypes = {
    text: { control: 'text' },
    type: { control: 'text' },
    href: { control: 'text' },
    textLink: { control: 'text' },
    openExternalLink: { control: 'boolean' }
};

Paragraph14LinkTermStorie.args = {
    text:
        'Al continuar has leído y aceptás nuestros',
    type: 'text_secondary',
    href: '',
    textLink: 'términos y condiciones',
    openExternalLink: true
};
