import React from 'react';
import TitleSixteen from './TitleSixteen';

export default {
    title: 'Texts/Basics/Center/Titles/Title16',
    component: TitleSixteen,
};

export const ConTexto = (args: {text: string}) => (
    <TitleSixteen text={args.text}/>
);

ConTexto.argTypes = {
    text: {control: 'text'}
};

ConTexto.args = {
    text: "Esto es un ejemplo"
};