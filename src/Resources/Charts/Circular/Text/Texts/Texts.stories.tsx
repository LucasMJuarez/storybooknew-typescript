import React from 'react';
import Texts from '.';

export default {
    title: 'Resources/Charts/Circular/Text/Texts',
    component: Texts,
};

export const TextsStorie = args => <Texts {...args} />;

TextsStorie.args = {
    headerText: 'Item 12R',
    centerText: 'ITEM 28L',
    bottomText: 'Item 12R',
    centerLevel: '28L',
};
