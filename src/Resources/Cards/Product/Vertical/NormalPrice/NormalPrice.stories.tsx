import React from 'react';
import NormalPrice from '.';

export default {
    title: 'Resources/Cards/Product/Vertical/NormalPrice',
    component: NormalPrice,
};

export const NormalPriceStory = (args: {text: string}) => <NormalPrice precio={args.text} />;

NormalPriceStory.argTypes = {
    text: {control: 'text'},
};

NormalPriceStory.args = {
    text: '10$',
};
