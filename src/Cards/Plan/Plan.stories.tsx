import React from 'react';
import Plan from '.';
import { Props } from './Plan';

export default {
    title: 'Cards/Plan',
    component: Plan,
    argTypes: {
        maxTags: {
            defaultValue: 2,
            control: {
                type: 'range',
                min: 0,
                max: 10,
            },
        },
    }
};

export const PlanStory = (args: Props) => <Plan {...args} />;

PlanStory.args = {
    title: 'Plan Full 20GB DLX',
    description: "",
    maxTags: 2,
    tags: ['Llamadas', 'Datos'],
    onClick: () => alert("click me!"),
    tabIndex: 0,
    onKeyPress: () => alert('click me!'),
};
