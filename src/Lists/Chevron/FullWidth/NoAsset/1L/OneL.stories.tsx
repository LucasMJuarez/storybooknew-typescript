import React from 'react';
import OneL from '.';

export default {
    title: 'Lists/Chevron/FullWidth/NoAsset/1L',
    component: OneL,
};

export const OneLStorie = (args: {
    text: string;
    onClick: Function;
    hideLine?: boolean;
    disable?: boolean;
    ariaLabel?: string;
    role?: string;
    tabIndex?: number;
    grayDown?: boolean;
}) => (
    <OneL
        onClick={args.onClick}
        text={args.text}
        hideLine={args.hideLine}
        disable={args.disable}
        ariaLabel={args.ariaLabel}
        role={args.role}
        tabIndex={args.tabIndex}
        grayDown={args.grayDown}
    />
);

OneLStorie.argTypes = {
    text: { control: 'text' },
    hideLine: { control: 'boolean' },
    disable: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    role: { control: 'text' },
    tabIndex: { control: 'number' },
    grayDown: {control: 'boolean'}
};

OneLStorie.args = {
    text: 'My Super Test',
    onClick: () => alert('Hello There'),
    hideLine: true,
    grayDown: false,
    disable: false,
    ariaLabel: 'OneL etiqueta Aria',
    role: 'button',
    tabIndex: 0,
};
