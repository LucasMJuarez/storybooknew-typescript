import React from 'react';
import Text16R from '.';

export default {
    title: 'Resources/ListsChevron/Text16R',
    component: Text16R,
};

export const Text16RStorie = (args: {text: string}) => <Text16R text={args.text} />;

Text16RStorie.argTypes = {
    text: {control: 'text'},
};

Text16RStorie.args = {
    text: 'My Super Test',
};
