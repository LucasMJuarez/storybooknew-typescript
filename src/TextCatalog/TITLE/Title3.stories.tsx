import React from 'react';
import Title from '.';

export default {
    title: 'Text Catalog / 3.Title /Title 3 ',
    component: Title,
};

export const CENTER_text_primary = (args: {text: string}) => (
    <Title text={args.text} level={3} align='Center' type='text_primary' />
);

CENTER_text_primary.argTypes = {
    text: {control: 'text'},
};

CENTER_text_primary.args = {
    text: 'My Super Test',
};

export const LEFT_text_primary = (args: {text: string}) => (
    <Title text={args.text} level={3} align='Left' type='text_primary' />
);

LEFT_text_primary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_primary.args = {
    text: 'My Super Test',
};

