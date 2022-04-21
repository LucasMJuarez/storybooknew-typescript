import React from 'react';
import Secondary14R from '.';

export default {
    title: 'Resources/ListsAmount/Left/Secondary14R',
    component: Secondary14R,
};

export const Secondary_14R = (args: {text: string}) => <Secondary14R text={args.text} />;

Secondary_14R.argTypes = {
    text: {control: 'text'},
};

Secondary_14R.args = {
    text: 'My Super Test',
};
