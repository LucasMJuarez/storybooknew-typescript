import React from 'react';
import Primary16R from '.';

export default {
    title: 'Resources/ListsAmount/Left/Primary16R',
    component: Primary16R,
};

export const Primary16rStorie = (args: {text: string}) => <Primary16R text={args.text} />;

Primary16rStorie.argTypes = {
    text: {control: 'text'},
};

Primary16rStorie.args = {
    text: 'My Super Test',
};
