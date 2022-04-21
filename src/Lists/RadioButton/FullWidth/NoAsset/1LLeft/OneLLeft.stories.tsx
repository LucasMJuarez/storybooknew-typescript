import React from 'react';
import OneLLeft from './OneLLeft';
export default {
    title: 'Lists/RadioButton/FullWidth/NoAsset/1LLeft',
    component: OneLLeft,
};

export const OneLStory = (args: {
    text: string;
    onClick: Function;
    active: boolean;
    role?: string;
    ariaLabel?: string;
    onkeyPress?: React.KeyboardEventHandler;
}) => (
    <OneLLeft
        onClick={args.onClick}
        active={args.active}
        text={args.text}
        role={args.role}
        ariaLabel={args.ariaLabel}
        onkeyPress={args.onkeyPress}
    />
);

OneLStory.argTypes = {
    text: {control: 'text'},
    active: {control: 'boolean'},
};

OneLStory.args = {
    text: 'Con DNI',
    active: true,
    onClick: () => alert('Hello'),
    role: 'button',
    ariaLabel: 'Internet',
    onkeyPress: () => alert('Hello keypress'),
};
