import React from 'react';
import Sub from '.';

export default {
    title: 'Text Catalog / 5.Sub /Sub 2 ',
    component: Sub,
};

export const LEFT_text_secondary = (args: {text: string}) => (
    <Sub text={args.text} level={2} align='Left' type='text_secondary' />
);

LEFT_text_secondary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_secondary.args = {
    text: 'My Super Test',
};

export const LEFT_text_primary = (args: {text: string}) => (
    <Sub text={args.text} level={2} align='Left' type='text_primary' />
);

LEFT_text_primary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_primary.args = {
    text: 'My Super Test',
};

export const CENTER_text_link = (args: {text: string}) => (
    <Sub text={args.text} level={2} align='Center' type='text_link' />
);

CENTER_text_link.argTypes = {
    text: {control: 'text'},
};

CENTER_text_link.args = {
    text: 'My Super Test',
};

export const CENTER_text_link_disabled = (args: {text: string}) => (
    <Sub text={args.text} level={2} align='Center' type='text_link_disabled' />
);

CENTER_text_link_disabled.argTypes = {
    text: {control: 'text'},
};

CENTER_text_link_disabled.args = {
    text: 'My Super Test',
};

export const LEFT_text_link = (args: {text: string}) => (
    <Sub text={args.text} level={2} align='Left' type='text_link' />
);

LEFT_text_link.argTypes = {
    text: {control: 'text'},
};

LEFT_text_link.args = {
    text: 'My Super Test',
};

export const LEFT_text_link_disabled = (args: {text: string}) => (
    <Sub text={args.text} level={2} align='Left' type='text_link_disabled' />
);

LEFT_text_link_disabled.argTypes = {
    text: {control: 'text'},
};

LEFT_text_link_disabled.args = {
    text: 'My Super Test',
};