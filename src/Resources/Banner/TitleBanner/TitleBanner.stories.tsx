import React from 'react';
import TitleBanner from './TitleBanner';

export default {
    title: 'Resources/Banner/TitleBanner',
    component: TitleBanner,
};

export const ConTexto = (args: {text: string}) => <TitleBanner text={args.text} />;

ConTexto.argTypes = {
    text: {control: 'text'},
};

ConTexto.args = {
    text: 'Esto es un ejemplo',
};
