import React from 'react';
import Body from '.';

export default {
    title: 'Text Catalog / 4.BODY /Body 1 ',
    component: Body,
};

export const LEFT_text_primary = (args: {text: string}) => (
    <Body text={args.text} level={1} align='Left' type='text_primary' />
);

LEFT_text_primary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_primary.args = {
    text: 'My Super Test',
};

export const LEFT_text_primary_inverse = (args: {text: string}) => (
    <div style={{backgroundColor: '#333'}}>
        <Body text={args.text} level={1} align='Left' type='text_primary_inverse' />
    </div>
);

LEFT_text_primary_inverse.argTypes = {
    text: {control: 'text'},
};

LEFT_text_primary_inverse.args = {
    text: 'My Super Test',
};

export const LEFT_text_disabled = (args: {text: string}) => (
    <Body text={args.text} level={1} align='Left' type='text_disabled' />
);

LEFT_text_disabled.argTypes = {
    text: {control: 'text'},
};

LEFT_text_disabled.args = {
    text: 'My Super Test',
};

export const LEFT_text_secondary = (args: {text: string}) => (
    <Body text={args.text} level={1} align='Left' type='text_secondary' />
);

LEFT_text_secondary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_secondary.args = {
    text: 'My Super Test',
};
