import React from 'react';
import SectionTitle from '.';

export default {
    title: 'Texts/Basics/Left/SectionTitle',
    component: SectionTitle,
};

export const SectionTitleStorie = (args: {text: string; bold: boolean}) => (
    <SectionTitle text={args.text} bold={args.bold} />
);

SectionTitleStorie.argTypes = {
    text: {control: 'text'},
};

SectionTitleStorie.args = {
    text: 'My Super Test',
};

export const SectionTitleStorieHeadline = (args: {text: string; bold: boolean; isHeadline: boolean}) => (
    <SectionTitle text={args.text} bold={args.bold} isHeadline={args.isHeadline}/>
);

SectionTitleStorieHeadline.argTypes = {
    text: {control: 'text'},
    bold: {control: 'boolean'},
    isHeadline: {control: 'boolean'},
};

SectionTitleStorieHeadline.args = {
    text: 'My Super Test',
    bold: false,
    isHeadline: true,
};