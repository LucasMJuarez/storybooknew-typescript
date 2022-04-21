import React from 'react';
import Body from '.';

export default {
    title: 'Text Catalog / 4.Body /Body 2 ',
    component: Body,
};

export const CENTER_text_button_primary = (args: {text: string}) => (
    <div style={{backgroundColor: '#333'}}>
        <Body text={args.text} level={2} align='Center' type='text_button_primary' />
    </div>
);

CENTER_text_button_primary.argTypes = {
    text: {control: 'text'},
};

CENTER_text_button_primary.args = {
    text: 'My Super Test',
};

export const CENTER_text_button_primary_inverse = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Center' type='text_button_primary_inverse' />
);

CENTER_text_button_primary_inverse.argTypes = {
    text: {control: 'text'},
};

CENTER_text_button_primary_inverse.args = {
    text: 'My Super Test',
};
export const CENTER_text_button_secondary = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Center' type='text_button_secondary' />
);

CENTER_text_button_secondary.argTypes = {
    text: {control: 'text'},
};

CENTER_text_button_secondary.args = {
    text: 'My Super Test',
};
export const CENTER_text_button_secondary_pressed = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Center' type='text_button_secondary_pressed' />
);

CENTER_text_button_secondary_pressed.argTypes = {
    text: {control: 'text'},
};

CENTER_text_button_secondary_pressed.args = {
    text: 'My Super Test',
};
export const CENTER_text_button_secondary_disabled = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Center' type='text_button_secondary_disabled' />
);

CENTER_text_button_secondary_disabled.argTypes = {
    text: {control: 'text'},
};

CENTER_text_button_secondary_disabled.args = {
    text: 'My Super Test',
};
export const CENTER_text_button_secondary_inverse = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Center' type='text_button_secondary_inverse' />
);

CENTER_text_button_secondary_inverse.argTypes = {
    text: {control: 'text'},
};

CENTER_text_button_secondary_inverse.args = {
    text: 'My Super Test',
};
export const CENTER_text_button_secondary_inverse_pressed = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Center' type='text_button_secondary_inverse_pressed' />
);

CENTER_text_button_secondary_inverse_pressed.argTypes = {
    text: {control: 'text'},
};

CENTER_text_button_secondary_inverse_pressed.args = {
    text: 'My Super Test',
};
export const CENTER_text_button_secondary_inverse_disabled = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Center' type='text_button_secondary_inverse_disabled' />
);

CENTER_text_button_secondary_inverse_disabled.argTypes = {
    text: {control: 'text'},
};

CENTER_text_button_secondary_inverse_disabled.args = {
    text: 'My Super Test',
};

export const CENTER_text_button_tertiary = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Center' type='text_button_tertiary' />
);

CENTER_text_button_tertiary.argTypes = {
    text: {control: 'text'},
};

CENTER_text_button_tertiary.args = {
    text: 'My Super Test',
};

export const RIGHT_text_primary = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Right' type='text_primary' />
);

RIGHT_text_primary.argTypes = {
    text: {control: 'text'},
};

RIGHT_text_primary.args = {
    text: 'My Super Test',
};

export const RIGHT_text_warning = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Right' type='text_warning' />
);

RIGHT_text_warning.argTypes = {
    text: {control: 'text'},
};

RIGHT_text_warning.args = {
    text: 'My Super Test',
};

export const LEFT_text_primary = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Left' type='text_primary' />
);

LEFT_text_primary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_primary.args = {
    text: 'body left primary',
};

export const CENTER_text_primary_special_0 = (args: {text: string}) => (
    <Body text={args.text} level={2} align='Center' type='text_primary_special_0' />
);

CENTER_text_primary_special_0.argTypes = {
    text: {control: 'text'},
};

CENTER_text_primary_special_0.args = {
    text: 'My Super Test',
};
