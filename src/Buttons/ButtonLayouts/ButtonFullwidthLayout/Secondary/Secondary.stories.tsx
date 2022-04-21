import React from 'react';
import Secondary from './Secondary';
export default {
    title: 'Buttons/ButtonLayouts/ButtonFullwidthLayout/Secondary',
    component: Secondary,
};

export const ButtonSecondary = (args: {
    text: string;
    onClick: Function;
    loading: boolean;
    inverse: boolean;
    disabled: boolean;
    fullWidth?: boolean;
    buttonFlexEnd?: boolean;
}) => (
    <Secondary
        inverse={args.inverse}
        loading={args.loading}
        disabled={args.disabled}
        text={args.text}
        fullWidth={args.fullWidth}
        buttonFlexEnd={args.buttonFlexEnd}
        onClick={() => alert('Click!')}
    />
);

ButtonSecondary.argTypes = {
    text: {control: 'text'},
    inverse: {control: 'boolean'},
    loading: {control: 'boolean'},
    disabled: {control: 'boolean'},
    fullWidth: {control: 'boolean'},
    buttonFlexEnd: {control: 'boolean'},
};

ButtonSecondary.args = {
    text: 'My button!',
    loading: false,
    inverse: false,
    disabled: false,
    fullWidth: false,
    buttonFlexEnd: false,
};
