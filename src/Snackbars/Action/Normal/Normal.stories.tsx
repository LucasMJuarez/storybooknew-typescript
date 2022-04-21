import React from 'react';
import Normal, {Props} from './Normal';

export default {
    title: 'Snackbars/Action/Normal',
    component: 'Normal',
};

export const SnackbarNormal = (args: Props) => <Normal {...args} />;

SnackbarNormal.argTypes = {
    text: {control: 'text'},
    buttonText: {control: 'text'},
    onClick: {action: 'clicked'},
};

SnackbarNormal.args = {
    text: 'Aló Aló',
    buttonText: 'Click me!',
    onClick: () => {
        alert('press alert info button');
    },
};
