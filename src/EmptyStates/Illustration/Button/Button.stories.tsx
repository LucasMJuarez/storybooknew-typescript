import React from 'react';
import Button from '.';
import {EmptyStateIllustrationButtonIllustrationEnum} from './Button';

export default {
    title: 'Empty States/Illustration/Button',
    component: Button,
};

export const ButtonStory = (args: {
    title: string;
    description: string;
    image: EmptyStateIllustrationButtonIllustrationEnum;
}) => <Button description={args.description} title={args.title} image={args.image} />;

ButtonStory.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    image: {control: {
        type: 'select',
        options: ['WithoutRecomendations', 'Options'],
        },
    },
};

ButtonStory.args = {
    title: 'Consulta tu servicio en la web </br>Mi cuenta Empresas',
    description:
        'Muy pronto vas a poder gestionar tu línea fija en esta App. Mientras tanto, hacé tu consulta sobre tu línea fija o servicio de Internet en Mi Cuenta Empresas.',
    image: 'WithoutRecomendations',
};
