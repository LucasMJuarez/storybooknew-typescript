import React from 'react';
import Title from '.';

export default {
    title: 'Text Catalog / 3.Title /Title 1 ',
    component: Title,
};

export const LEFT_text_primary = (args: {text: string}) => (
    <Title text={args.text} level={1} align='Left' type='text_primary' />
);
LEFT_text_primary.argTypes = {
    text: {control: 'text'},
};
LEFT_text_primary.args = {
    text: 'My Super Test',
};
export const LEFT_text_primary_special_1 = (args: {text: string}) => (
    <div style={{backgroundColor: 'grey'}}>
        <Title text={args.text} level={1} align='Left' type='text_primary_special_1' />
    </div>
);
LEFT_text_primary_special_1.argTypes = {
    text: {control: 'text'},
};
LEFT_text_primary_special_1.args = {
    text: 'My Super Test',
};

export const LEFT_text_secondary = (args: {text: string}) => (
    <Title text={args.text} level={1} align='Left' type='text_secondary' />
);
LEFT_text_secondary.argTypes = {
    text: {control: 'text'},
};
LEFT_text_secondary.args = {
    text: 'My Super Test',
};
