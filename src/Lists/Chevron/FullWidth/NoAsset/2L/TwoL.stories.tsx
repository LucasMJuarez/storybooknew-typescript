import React from 'react';
import TwoL from '.';

export default {
    title: 'Lists/Chevron/FullWidth/NoAsset/2L',
    compTwont: TwoL,
};

export const TwoLStorie = (args: {
    text: string;
    secondaryText: string;
    onClick: Function;
    hideIcon?: boolean;
    role: string;
    tabIndex: number;
}) => (
    <TwoL
        onClick={args.onClick}
        text={args.text}
        secondaryText={args.secondaryText}
        hideIcon={args.hideIcon}
        role={args.role}
        tabIndex={args.tabIndex}
    />
);

TwoLStorie.argTypes = {
    text: { control: 'text' },
    secondaryText: { control: 'text' },
    hideIcon: { control: 'boolean' },
    role: { control: 'text' },
    tabIndex: { control: 'number' },
};

TwoLStorie.args = {
    text: 'My Super Test',
    secondaryText: 'My Super Test 2',
    onClick: () => alert('Hello There'),
    hideIcon: false,
    role: 'button',
    tabIndex: 0,
};
