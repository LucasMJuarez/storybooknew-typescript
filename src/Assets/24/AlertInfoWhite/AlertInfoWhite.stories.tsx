import React from 'react';
import AlertInfoWhite from './AlertInfoWhite';
import {Props} from './AlertInfoWhite';

export default {
    title: 'Assets/24/AlertInfoWhite',
    component: AlertInfoWhite,
};

export const AlertInfoWhiteIcon = (args: Props) => <AlertInfoWhite {...args} />;

AlertInfoWhiteIcon.args = {
    background: false,
    onClick: () => {
        alert('press alert info button');
    },
};
