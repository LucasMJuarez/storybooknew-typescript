import React from 'react';
import Left from './Left';
import { Props } from './Left';

export default {
    title: 'Assets/40/Carousel/Arrows/Left',
    component: Left,
};

export const ChevronLeftIcon = (args: Props) => <Left {...args}/>;

ChevronLeftIcon.args = {
    background: false,
    onClick: () => {
        alert("press left arrow")
    },
}
