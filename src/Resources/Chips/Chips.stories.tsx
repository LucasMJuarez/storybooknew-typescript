import React from 'react';
import Chips from '.';

export default {
    title: 'Resources/Chip/Chips',
    component: Chips,
};

interface ChipsProps {
    title: string;
    onClick: Function;
    showIcon: boolean;
    isSelected: boolean;
}

export const WithIconAndSelected = (args: ChipsProps) => (
    <Chips {...args} />
);

WithIconAndSelected.args = {
    title: '5GB',
    onClick: () => alert('Button pressed!'),
    showIcon: true,
    isSelected: true
};