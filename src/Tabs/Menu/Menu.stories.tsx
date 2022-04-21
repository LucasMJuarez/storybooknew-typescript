import React from 'react';
import Menu from './Menu';
export default {
    title: 'Tabs/Menu',
    component: Menu,
};

interface MenuProps {
    text: string;
    onClick: Function;
    disabled: boolean;
    tabIndex?: number;
    ariaLabel?: string;
}

export const Normal = (args: MenuProps) => <Menu {...args} />;

Normal.args = {
    text: 'Item',
    disabled: false,
    onClick: () => alert('Tab pressed!'),
};

export const Disabled = (args: MenuProps) => <Menu {...args} />;

Disabled.args = {
    text: 'Item',
    disabled: true,
    onClick: () => alert('Tab pressed!'),
};
