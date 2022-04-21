import React from 'react';
import Paragraph16 from '.';

export default {
    title: 'Texts/Basics/Left/Paragraph16',
    component: Paragraph16,
};

export const Paragraph16Storie = (args: {text: string}) => <Paragraph16 {...args} />;

Paragraph16Storie.argTypes = {
    text: {control: 'text'},
    type: {control: 'text'},
};

Paragraph16Storie.args = {
    text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi doloremque, vitae odit iusto saepe quam eos beatae. Sed, accusantium eligendi. Porro quis quisquam asperiores rerum! Qui ut alias assumenda?',
    type: 'text_secondary',
};
