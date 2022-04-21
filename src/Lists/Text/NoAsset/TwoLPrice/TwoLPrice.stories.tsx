import React from 'react';
import TwoLPrice from './TwoLPrice';

export default {
    title: 'Lists/Text/NoAsset/2L&price',
    component: TwoLPrice,
};

interface TwoLPriceProps {
    title: string;
    secondary: string;
    information: string;
    hideLine?: boolean;
    tabIndex?: number;
}

export const TwoLPriceStorie = (args: TwoLPriceProps) => <TwoLPrice {...args} />;

TwoLPriceStorie.args = {
    title: 'Rapipago',
    secondary: 'Juan Bautista Alberdi 3190',
    information: 'A 218m',
    hideLine: true,
};
