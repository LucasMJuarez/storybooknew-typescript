import React from 'react';
import Title16Dashboard from '.';

export default {
    title: 'Texts/Basics/Center/Titles/Title16_Dashboard',
    component: Title16Dashboard,
};

export const Title16DashboardStorie = (args: {text: string}) => <Title16Dashboard text={args.text} />;

Title16DashboardStorie.argTypes = {
    text: {control: 'text'},
};

Title16DashboardStorie.args = {
    text: 'Lorem Ipsum',
};
