import React from 'react';
import Display from '.';

export default {
    title: 'Text Catalog / 1.Display /Display 4 ',
    component: Display,
};

export const CENTER_text_primary_inverse = (args: {text: string}) => (
    <div style={{backgroundColor: '#aaa'}}>
        <Display text={args.text} level={4} align='Center' type='text_primary_inverse' />
    </div>
);

CENTER_text_primary_inverse.argTypes = {
    text: {control: 'text'},
};

CENTER_text_primary_inverse.args = {
    text: 'My Super Test',
};
