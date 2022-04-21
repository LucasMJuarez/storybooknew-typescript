import React from 'react';
import Sub from '.';

export default {
    title: 'Text Catalog / 5.Sub /Sub 1 ',
    component: Sub,
};

export const LEFT_text_secondary = (args: {text: string}) => (
    <Sub text={args.text} level={1} align='Left' type='text_secondary' />
);

LEFT_text_secondary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_secondary.args = {
    text: 'My Super Test',
};

export const CENTER_text_primary = (args: {text: string}) => (
    <Sub text={args.text} level={1} align='Center' type='text_primary' />
);

CENTER_text_primary.argTypes = {
    text: {control: 'text'},
};

CENTER_text_primary.args = {
    text: 'My Super Test',
};

export const CENTER_text_secondary = (args: {text: string}) => (
    <Sub text={args.text} level={1} align='Center' type='text_secondary' />
);

CENTER_text_secondary.argTypes = {
    text: {control: 'text'},
};

CENTER_text_secondary.args = {
    text: 'My Super Test',
};

export const CENTER_text_chip_filter = (args: {text: string}) => (
    <div style={{backgroundColor: '#aaa'}}>
        <Sub text={args.text} level={1} align='Center' type='text_chip_filter' />
    </div>
);

CENTER_text_chip_filter.argTypes = {
    text: {control: 'text'},
};

CENTER_text_chip_filter.args = {
    text: 'My Super Test',
};

export const RIGHT_text_primary = (args: {text: string}) => (
    <Sub text={args.text} level={1} align='Right' type='text_primary' />
);

RIGHT_text_primary.argTypes = {
    text: {control: 'text'},
};

RIGHT_text_primary.args = {
    text: 'My Super Test',
};
