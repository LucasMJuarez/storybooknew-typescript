import React from 'react';
import Dashboard14R from '.';

export default {
    title: 'Texts/Basics/Center/14R_Dashboard',
    component: Dashboard14R,
};

export const Dashboard14RStorie = (args: {text: string}) => <Dashboard14R text={args.text} />;

Dashboard14RStorie.argTypes = {
    text: {control: 'text'},
};

Dashboard14RStorie.args = {
    text: 'Tenés',
};
