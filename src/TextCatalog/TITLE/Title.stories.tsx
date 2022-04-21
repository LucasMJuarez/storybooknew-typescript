import React from 'react';
import Title from '.';

export default {
    title: 'Text Catalog / 3.Title /Title 0 ',
    component: Title,
};

export const LEFT_text_navigation_bar_primary = (args: {text: string}) => (
    <div style={{backgroundColor: 'grey'}}>
        <Title text={args.text} level={0} align='Left' type='text_navigation_bar_primary' />
    </div>
);

LEFT_text_navigation_bar_primary.argTypes = {
    text: {control: 'text'},
};

LEFT_text_navigation_bar_primary.args = {
    text: 'My Super Test',
};

export const CENTER_text_primary = (args: {text: string}) => (
    <Title text={args.text} level={0} align='Center' type='text_primary' />
);

CENTER_text_primary.argTypes = {
    text: {control: 'text'},
};

CENTER_text_primary.args = {
    text: 'My Super Test',
};
