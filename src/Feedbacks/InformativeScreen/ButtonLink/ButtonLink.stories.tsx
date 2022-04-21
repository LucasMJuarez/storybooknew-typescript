import React from 'react';
import ButtonLink from '.';

export default {
    title: 'Feedbacks/InformativeScreen/ButtonLink',
    component: ButtonLink,
};

export const InformativeScreen = (args: {
    title: string;
    description: string;
    buttonLabel: string;
    onClick: Function;
    inverse: boolean;
    terminosText: string;
    markedText: string;
    onClickLink: Function;
}) => (
    <ButtonLink
        inverse={args.inverse}
        title={args.title}
        description={args.description}
        buttonLabel={args.buttonLabel}
        onClick={() => alert('My Super Informative Click')}
        terminosText={args.terminosText}
        markedText={args.markedText}
        onClickLink={() => alert('My Informative ClickLink')}
    />
);

InformativeScreen.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    buttonLabel: {control: 'text'},
    terminosText: {control: 'text'},
    markedText: {control: 'text'},
    inverse: {control: 'boolean'},
};

InformativeScreen.args = {
    title: 'Para continuar...',
    description: 'Recordá tener a mano los siguientes elementos para completar el proceso…',
    buttonLabel: 'Primary Button',
    terminosText: 'Al continuar, confirmás que leíste y aceptás nuestros ',
    markedText: 'términos y condiciones.',
};
