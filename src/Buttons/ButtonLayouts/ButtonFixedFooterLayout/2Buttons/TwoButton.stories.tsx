import React from 'react';
import TwoButton from './TwoButton';
import type {TwoButtonProps} from './TwoButton';
export default {
    title: 'Buttons/ButtonLayouts/ButtonFixedFooterLayout/2Buttons',
    component: TwoButton,
};

export const Button = (args: TwoButtonProps) => <TwoButton {...args} />;

Button.args = {
    textPrimary: 'My Primary Button',
    textSecondary: 'My Secondary Button',
    onClickPrimary: () => {
        alert('Primary Button Pressed');
    },
    onClickSecondary: () => {
        alert('Secondary Button Pressed');
    },
    loadingPrimary: false,
    loadingSecondary: false,
    inversePrimary: false,
    inverseSecondary: false,
};
