import React from 'react';
import LabelText from './LabelText';

export default {
    title: 'Cards/HighlightedCard/LabelText',
    component: LabelText,
};

const descriptionItems = [
    'Fibra 300Mb, 100Mb y 50Mb.',
    'Instalación sin cargo.',
    'Llamadas ilimitadas a fijos del país.'
]

export const LabelTextStory = (args: {titleLabel: string; simpleLabel: string; description: Array<string>; btnText: string; onClick: Function}) => (
    <LabelText {...args} />  
);

LabelTextStory.args = {
    titleLabel: '¡Te regalamos $600 por 12 meses!',
    simpleLabel: 'Contratá Internet',
    description: descriptionItems,
    btnText: 'Ver los planes',
    onClick: () => {
        alert('My Button');
    },
};
