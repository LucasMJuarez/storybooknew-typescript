import React from 'react';
import TitleSubtitlea from './';

export default {
    title: 'Texts/Compositions/Center/Dashboard/TitleSubtitle',
    component: TitleSubtitlea,
};

export const TitleSubtitleStorie = (args: {title: string; subtitle: string;}) => (
    <TitleSubtitlea title={args.title} subtitle={args.subtitle} />
);

TitleSubtitleStorie.argTypes = {
    title: {control: 'text'},
    subtitle: {control: 'text'}
};

TitleSubtitleStorie.args = {
    title: 'My Super Test',
    subtitle: 'My Super Test'
};
