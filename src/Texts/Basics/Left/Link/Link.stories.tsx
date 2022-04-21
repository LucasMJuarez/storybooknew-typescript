import React from 'react';
import Link from '.';

export default {
    title: 'Texts/Basics/Left/Link',
    component: Link,
};

export const LinkStorie = (args: {text: string; onClick: Function}) => <Link {...args} />;

LinkStorie.argTypes = {
    text: {control: 'text'},
    type: {control: 'text'},
    onClick: {action: 'clicked'},
};

LinkStorie.args = {
    text: 'Ver planes más bajos',
    type: 'text_link_2',
    onClick: () => {
        alert('Button Pressed');
    },
};
