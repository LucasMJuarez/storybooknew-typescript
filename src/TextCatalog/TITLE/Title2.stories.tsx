import React from 'react';
import Title from '.';

export default {
    title: 'Text Catalog / 3.TITLE /Title 2 ',
    component: Title,
};

export const LEFT_text_primary = (args: {text: string}) => (
    <Title text={args.text} level={2} align='Left' type='text_primary' />
);

LEFT_text_primary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_primary.args = {
    text: 'My Super Test',
};
