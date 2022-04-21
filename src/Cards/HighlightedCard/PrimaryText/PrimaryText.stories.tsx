import React from 'react';
import PrimaryText from './PrimaryText';

export default {
    title: 'Cards/HighlightedCard/PrimaryText',
    component: PrimaryText,
};

const descriptionItems = [
    'Unificá la titularidad y te regalamos $600 en tu plan móvil por 12 meses.'
]

export const PrimaryTextStory = (args: {simpleLabel: string; description: Array<string>; btnText: string; onClick: Function}) => (
    <PrimaryText {...args} />  
);

PrimaryTextStory.args = {
    titleLabel: 'Tengo Internet Movistar en mi casa, pero no está a mi nombre',
    simpleLabel: 'Contratá Internet',
    description: descriptionItems,
    btnText: 'Ver los planes',
    onClick: () => {
        alert('My Button');
    },
};
