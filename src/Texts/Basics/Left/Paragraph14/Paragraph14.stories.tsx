import React from 'react';
import Paragraph14 from '.';

export default {
    title: 'Texts/Basics/Left/Paragraph14',
    component: Paragraph14,
};

export const Paragraph14Storie = (args: {text: string}) => <Paragraph14 {...args} />;

Paragraph14Storie.argTypes = {
    text: {control: 'text'},
    type: {control: 'text'},
};

Paragraph14Storie.args = {
    text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi doloremque, vitae odit iusto saepe quam eos beatae. Sed, accusantium eligendi. Porro quis quisquam asperiores rerum! Qui ut alias assumenda?',
    type: 'text_secondary',
};
