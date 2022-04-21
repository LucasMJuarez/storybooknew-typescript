import React from 'react';
import Primary from './Primary';
export default {
    title: 'Buttons/Primary',
    component: Primary,
};
interface PrimaryProps {
    text: string;
    onClick: Function;
    loading?: boolean;
    inverse?: boolean;
    disabled?: boolean;
}
export const Normal = (args: PrimaryProps) => <Primary {...args} />;

Normal.args = {
    text: 'My button!',
    loading: false,
    inverse: false,
    disabled: false,
    onClick: () => alert('Button pressed!'),
};

export const Disabled = (args: PrimaryProps) => <Primary {...args} />;

Disabled.args = {
    text: 'My button!',
    loading: false,
    inverse: false,
    disabled: true,
    onClick: () => alert('Button pressed!'),
};

export const Loading = (args: PrimaryProps) => <Primary {...args} />;

Loading.args = {
    text: 'My button!',
    loading: true,
    inverse: false,
    disabled: false,
    onClick: () => alert('Button pressed!'),
};

export const Inverse_Normal = (args: PrimaryProps) => <Primary {...args} />;

Inverse_Normal.args = {
    text: 'My button!',
    loading: false,
    inverse: true,
    disabled: false,
    onClick: () => alert('Button pressed!'),
};

export const Inverse_Disabled = (args: PrimaryProps) => <Primary {...args} />;

Inverse_Disabled.args = {
    text: 'My button!',
    loading: false,
    inverse: true,
    disabled: true,
    onClick: () => alert('Button pressed!'),
};

export const Inverse_Loading = (args: PrimaryProps) => <Primary {...args} />;

Inverse_Loading.args = {
    text: 'My button!',
    loading: true,
    inverse: true,
    disabled: false,
    onClick: () => alert('Button pressed!'),
};
