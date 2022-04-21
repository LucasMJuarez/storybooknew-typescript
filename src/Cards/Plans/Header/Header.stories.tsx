import React from 'react';
import Header from '.';

export default {
    title: 'Cards/Plans/Header',
    component: Header,
};

export const HeaderStory = (args) => <Header {...args} />;


HeaderStory.args = {
    showLabel: true,
    textLabel: '30% OFF X 12 MESES',
    categoryLabel: 'Seventh',
    textTitle: 'Plan Control',
    textDisplay: '5GB',
}