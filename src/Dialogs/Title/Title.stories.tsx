import React from 'react';
import TitleDesactive from './Title';

export default {
    title: 'Dialogs/Title',
    component: TitleDesactive,
};

export const Title = (args: {
    title: string;
    description: string;
    labelPrimary: string;
    labelSecondary: string;
    onClickPrimary: Function;
    onClickSecondary: Function;
    hideSecondaryButton: boolean;
}) => <TitleDesactive {...args} />;

Title.args = {
    title: 'Centros de atención',
    description: 'Mi Movistar quiere ver tu ubicación actual para darte mejores opciones.',
    labelPrimary: 'Primary Button',
    labelSecondary: 'Secondary Button',
    onClickPrimary: () => {
        alert('My Primary Button');
    },
    onClickSecondary: () => {
        alert('My Secondary Button');
    },
    hideSecondaryButton: false,
};
