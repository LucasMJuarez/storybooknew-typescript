import React from 'react';
import Action, {Props} from './Action';

export default {
    title: 'Snackbars/Critical/Action',
    component: 'Action',
};

export const ActionStories = (args: Props) => <Action {...args} />;

ActionStories.argTypes = {
    text: {control: 'text'},
    buttonText: {control: 'text'},
    onClick: {action: 'clicked'},
};

ActionStories.args = {
    text: 'lorem ipsum dolor sit amet, consectetur adip',
    buttonText: 'Click me!',
    onClick: () => {
        alert('you pressured me!');
    },
};
