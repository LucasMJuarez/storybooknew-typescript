import React from 'react';
import ModalParagraph from '.';

export default {
    title: 'Dialogs/Modal/ModalParagraph',
    component: ModalParagraph,
};

export const ModalParagraphStorie = (args: {text: string}) => <ModalParagraph {...args} />;

ModalParagraphStorie.argTypes = {
    text: {control: 'text'},
};

ModalParagraphStorie.args = {
    text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi doloremque, vitae odit iusto saepe quam eos beatae. Sed, accusantium eligendi. Porro quis quisquam asperiores rerum! Qui ut alias assumenda?',
};