import React from 'react';
import ButtonDesk from '.';
import {EmptyStateIllustrationButtonIllustrationEnum} from './ButtonDesk';

export default {
    title: 'Empty States/Illustration/ButtonDesk',
    component: ButtonDesk,
};

export const ButtonStory = (args: {
    title: string;
    description: string;
    image: EmptyStateIllustrationButtonIllustrationEnum;
}) => <ButtonDesk description={args.description} title={args.title} image={args.image} />;

ButtonStory.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    image: {control: 'text'},
};

ButtonStory.args = {
    title: 'Muy pronto vas a poder acceder a este <br>servicio desde nuestra APP',
    description:
        'Si sos quien administra todos los servicios de tu CUIT, podés gestionarlos desde nuestra Web Mi Cuenta Empresas. Si aún no accediste, contactá a tu asesor por WhatsApp.',
    image: 'WomenDesk',
};
