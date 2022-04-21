import React from 'react';
import Card from './SecondaryText';

export default {
    title: 'Cards/HighlightedCard/Colorful/SecondaryText',
    component: Card,
};

export const SecondaryText = (args: {
    title: string;
    description: string;
    btnText: string;
    onClick: Function;
    tabIndexButton?: number;
    role?: string;
    ariaLabel?: string;
}) => <Card {...args} />;

SecondaryText.args = {
    title: 'Mejorá tu plan con gigas GRATIS',
    description: 'Te proponemos el mejor plan adaptado a tu consumo, ¡con gigas de REGALO!',
    btnText: 'Cambiar de plan',
    onClick: () => {
        alert('My Button');
    },
};
