import React from 'react';
import Headline from '.';

export default {
    title: 'Text Catalog / 2.Headline /Headline 3 ',
    component: Headline,
};

export const LEFT_text_primary = (args: {text: string}) => (
    <Headline text={args.text} level={3} align='Left' type='text_primary' />
);

LEFT_text_primary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_primary.args = {
    text: 'My Super Test',
};

export const LEFT_text_primary_special_1 = (args: {text: string}) => (
    <div style={{backgroundColor: '#333'}}>
        <Headline text={args.text} level={3} align='Left' type='text_primary_special_1' />
    </div>
);

LEFT_text_primary_special_1.argTypes = {
    text: {control: 'text'},
};

LEFT_text_primary_special_1.args = {
    text: 'My Super Test',
};

export const LEFT4_text_primary_inverse = (args: {text: string}) => (
    <div style={{backgroundColor: '#333'}}>
        <Headline text={args.text} level={4} align='Left' type='text_primary_inverse' />
    </div>
);

LEFT4_text_primary_inverse.argTypes = {
    text: {control: 'text'},
};

LEFT4_text_primary_inverse.args = {
    text: 'My Super Test',
};
