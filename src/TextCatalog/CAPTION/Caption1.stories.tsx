import React from 'react';
import Caption from './Caption';

export default {
    title: 'Text Catalog / 5.Caption /Caption 1 ',
    component: Caption,
};

export const LEFT_text_input_label_error = (args: {text: string}) => (
    <Caption text={args.text} level={1} align='Left' type='text_input_label_error' />
);

LEFT_text_input_label_error.argTypes = {
    text: {control: 'text'},
};

LEFT_text_input_label_error.args = {
    text: 'My Super Test',
};

export const LEFT_text_input_label = (args: {text: string}) => (
    <Caption text={args.text} level={1} align='Left' type='text_input_label' />
);

LEFT_text_input_label.argTypes = {
    text: {control: 'text'},
};

LEFT_text_input_label.args = {
    text: 'My Super Test',
};

export const LEFT_text_secondary_strikethrough = (args: {text: string}) => (
    <Caption text={args.text} level={1} align='Left' type='text_secondary_strikethrough' />
);

LEFT_text_secondary_strikethrough.argTypes = {
    text: {control: 'text'},
};

LEFT_text_secondary_strikethrough.args = {
    text: 'My Super Test',
};

export const LEFT_text_secondary = (args: {text: string}) => (
    <Caption text={args.text} level={1} align='Left' type='text_secondary' />
);

LEFT_text_secondary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_secondary.args = {
    text: 'My Super Test',
};

export const LEFT_text_secondary_special_0 = (args: {text: string}) => (
    <Caption text={args.text} level={1} align='Left' type='text_secondary_special_0' />
);

LEFT_text_secondary_special_0.argTypes = {
    text: {control: 'text'},
};

LEFT_text_secondary_special_0.args = {
    text: 'My Super Test',
};

export const CENTER_text_primary_inverse_2 = (args: {text: string}) => (
    <div style={{backgroundColor: '#8c8c8c'}}>
        <Caption text={args.text} level={2} align='Center' type='text_primary_inverse_2' />
    </div>
);

CENTER_text_primary_inverse_2.argTypes = {
    text: {control: 'text'},
};

CENTER_text_primary_inverse_2.args = {
    text: 'My Super Test',
};

export const RIGHT_text_primary = (args: {text: string}) => (
    <Caption text={args.text} level={2} align='Right' type='text_primary' />
);

RIGHT_text_primary.argTypes = {
    text: {control: 'text'},
};

RIGHT_text_primary.args = {
    text: 'My Super Test',
};
