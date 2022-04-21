import React from 'react';
import Right from '.';
import { Props } from './Right';

export default {
    title: 'Assets/40/Carousel/Arrows/Right',
    component: Right,
};

export const ChevronRightIcon = (args: Props) => <Right {...args}/>;

ChevronRightIcon.args = {
    background: false,
    onClick: () => {
        alert('Press right arrow')
    }
};
