import React from 'react';
import Profile from '.';

export default {
    title: 'Headers/Profile',
    component: Profile,
};

export const ProfileStorie = (args: {primaryText: string; secondaryText: string; onClick: Function}) => (
    <Profile primaryText={args.primaryText} secondaryText={args.secondaryText} onClick={args.onClick} />
);

ProfileStorie.argTypes = {
    primaryText: {control: 'text'},
    secondaryText: {control: 'text'},
};

ProfileStorie.args = {
    primaryText: 'Prueba MovistarUI',
    secondaryText: 'Administrador',
    onClick: () => alert('Hello There'),
};
