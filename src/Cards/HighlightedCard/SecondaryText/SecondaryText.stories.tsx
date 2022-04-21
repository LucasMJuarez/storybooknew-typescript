import React from 'react';
import SecondaryText from './SecondaryText';

export default {
    title: 'Cards/HighlightedCard/SecondaryText',
    component: SecondaryText,
};

export const SecondaryTextStory = (args: {
    simpleLabel: string;
    description: 'Unificá la titularidad y te regalamos $600 en tu plan móvil por 12 meses.';
    btnText: string;
    onClick: Function;
}) => <SecondaryText {...args} />;

SecondaryTextStory.args = {
    titleLabel: 'Tengo Internet Movistar en mi casa, pero no está a mi nombre',
    simpleLabel: 'Contratá Internet',
    description: 'Unificá la titularidad y te regalamos $600 en tu plan móvil por 12 meses.',
    btnText: 'Ver los planes',
    onClick: () => {
        alert('My Button');
    },
};
