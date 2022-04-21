import React from 'react';
import TextNumber from '.';

export default {
    title: 'Headers/TextNumber',
    component: TextNumber,
};

export const TextNumberStorie = (args: { primaryText: string; title: string; secondaryText: string; }) => (
    <TextNumber primaryText={args.primaryText} title={args.title} secondaryText={args.secondaryText} />
);

TextNumberStorie.argTypes = {
    primaryText: {control: 'text'},
    title: {control: 'text'},
    secondaryText: {control: 'text'},
};

TextNumberStorie.args = {
    primaryText: 'Número de Reclamo',
    title: '63745848',
    secondaryText: 'Línea 11 4255 1105',
};
