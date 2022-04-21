import React from 'react';
import OneButtonCenter from './OneButtonCenter';
export default {
    title: 'Buttons/ButtonLayouts/ButtonLayout/1Button/Center',
    component: OneButtonCenter,
};
interface OneButtonProps {
    text: string;
    onClick: Function;
    disabled?: boolean;
}

export const ButtonCenter = (args: OneButtonProps) => <OneButtonCenter {...args} />;

ButtonCenter.args = {
    text: 'Pagar',
    disabled: false,
    onClick: () => alert('Button pressed!'),
};

export const Disabled = (args: OneButtonProps) => <OneButtonCenter {...args} />;

Disabled.args = {
    text: 'Pagar',
    disabled: true,
    onClick: () => alert('Button pressed!'),
};
