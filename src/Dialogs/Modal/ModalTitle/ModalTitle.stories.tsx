import React from 'react';
import ModalTitle from '.';

export default {
    title: 'Dialogs/Modal/ModalTitle',
    component: ModalTitle,
};

export const ModalTitleStorie = (args: {text: string}) => <ModalTitle {...args} />;

ModalTitleStorie.argTypes = {
    text: {control: 'text'},
};

ModalTitleStorie.args = {
    text:
        'Modal Title',
};