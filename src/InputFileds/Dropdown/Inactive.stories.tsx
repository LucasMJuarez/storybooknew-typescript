import React from 'react';
import Inactive from '.';

export default {
    title: 'InputFields/Dropdown/Inactive',
    component: Inactive,
};

export const InactiveDropdown = (args: {
    title: string;
    onChange: Function;
    items: Array<string>;
    placeholder: string;
}) => <Inactive title={args.title} onChange={args.onChange} items={args.items} placeholder={args.placeholder} />;

InactiveDropdown.argTypes = {
    title: {control: 'text'},
    items: {control: 'array'},
    placeholder: {control: 'text'},
};

InactiveDropdown.args = {
    title: 'Compañia actual',
    onChange: () => alert('Hello There'),
    items: ['Item 1', 'Item 2', 'Item 3'],
    placeholder: '',
};
