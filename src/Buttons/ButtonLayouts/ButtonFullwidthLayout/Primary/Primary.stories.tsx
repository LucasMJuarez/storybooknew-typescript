import React from 'react';
import Primary from './Primary';
export default {
    title: 'Buttons/ButtonLayouts/ButtonFullwidthLayout/Primary',
    component: Primary,
};

export const ButtonPrimary = (args: {
    text: string;
    loading: boolean;
    inverse: boolean;
    disabled: boolean;
    fullWidth?: boolean;
    buttonFlexEnd?: boolean;
    isAnchor?: boolean;
    href?: string;
    onKeyPress?: React.KeyboardEventHandler;
}) => (
    <Primary
        inverse={args.inverse}
        loading={args.loading}
        disabled={args.disabled}
        text={args.text}
        fullWidth={args.fullWidth}
        buttonFlexEnd={args.buttonFlexEnd}
        onClick={() => alert('kiaceee')}
        isAnchor={args.isAnchor}
        href={args.href}
        onKeyPress={args.onKeyPress}
    />
);

ButtonPrimary.argTypes = {
    text: {control: 'text'},
    inverse: {control: 'boolean'},
    loading: {control: 'boolean'},
    disabled: {control: 'boolean'},
    fullWidth: {control: 'boolean'},
    buttonFlexEnd: {control: 'boolean'},
    isAnchor: {control: 'boolean'},
    href: {control: 'text'}
};

ButtonPrimary.args = {
    text: 'My button!',
    loading: false,
    inverse: false,
    disabled: false,
    fullWidth: false,
    buttonFlexEnd: false,
    isAnchor: false,
    href: '#',
    onKeyPress: () => alert('Hello keypress'),
};
