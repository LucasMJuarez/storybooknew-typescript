import React from 'react';
import OneButton from './OneButton';
export default {
    title: 'Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button',
    component: OneButton,
};

export const Button = (args: {text: string; loading: boolean; inverse: boolean; disabled : boolean}) => (
    <OneButton disabled={args.disabled} inverse={args.inverse} loading={args.loading} text={args.text} onClick={() => alert('kiaceee')} />
);

Button.argTypes = {
    text: {control: 'text'},
    inverse: {control: 'boolean'},
    loading: {control: 'boolean'},
    disabled: {control: 'boolean'}
};

Button.args = {
    text: 'My button!',
    loading: false,
    inverse: false,
    disabled: false
};
