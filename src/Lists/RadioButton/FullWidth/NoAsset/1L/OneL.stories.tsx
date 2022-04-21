import React from 'react';
import OneL from './OneL';
export default {
    title: 'Lists/RadioButton/FullWidth/NoAsset/1L',
    component: OneL,
};

export const OneLStory = (args: {
    text: string;
    onClick: Function;
    active: boolean;
    showLine: boolean;
    tabIndex?: number;
    role?: string;
    ariaLabel?: string;
    onkeyPress?: React.KeyboardEventHandler;
}) => (
    <OneL
        onClick={args.onClick}
        active={args.active}
        text={args.text}
        showLine={args.showLine}
        tabIndex={args.tabIndex}
        role={args.role}
        ariaLabel={args.ariaLabel}
        onkeyPress={args.onkeyPress}
    />
);

OneLStory.argTypes = {
    text: {control: 'text'},
    active: {control: 'boolean'},
    showLine: {control: 'boolean'},
};

OneLStory.args = {
    text: 'Con DNI',
    active: true,
    showLine: true,
    onClick: () => alert('Hello'),
    tabIndex: 0,
    role: 'button',
    ariaLabel: 'Internet',
    onkeyPress: () => alert('Hello keypress'),
};
