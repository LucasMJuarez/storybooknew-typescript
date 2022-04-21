import React from 'react';
import NoTitleDesactive from './NoTitle';

export default {
    title: 'Dialogs',
    component: NoTitleDesactive,
};

interface NoTitleProps {
    description: string;
    labelPrimary: string;
    labelSecondary: string;
    onClickPrimary: Function;
    onClickSecondary: Function;
    loadingPrimary?: boolean;
    loadingSecondary?: boolean;
}

export const NoTitle = (args: NoTitleProps) => <NoTitleDesactive {...args} />;

NoTitle.args = {
    description: 'Mi Movistar quiere ver tu ubicación actual para darte mejores opciones.',
    labelPrimary: 'Primary',
    labelSecondary: 'Secondary',
    onClickPrimary: () => {
        alert('My Primary Button');
    },
    onClickSecondary: () => {
        alert('My Secondary Button');
    },
};
