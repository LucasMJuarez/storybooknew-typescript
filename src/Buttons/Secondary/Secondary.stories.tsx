import React from 'react';
import Secondary from './Secondary';
export default {
    title: 'Buttons/Secondary',
    component: Secondary,
};
interface SecondaryProps {
    text: string;
    onClick: Function;
    loading?: boolean;
    inverse?: boolean;
    disabled?: boolean;
}
export const Normal = (args: SecondaryProps) => (
    <div
        style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Secondary {...args} />
    </div>
);

Normal.args = {
    text: 'My button!',
    loading: false,
    inverse: false,
    disabled: false,
    onClick: () => alert('Button pressed!'),
};

export const Disabled = (args: SecondaryProps) => (
    <div
        style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Secondary {...args} />
    </div>
);

Disabled.args = {
    text: 'My button!',
    loading: false,
    inverse: false,
    disabled: true,
    onClick: () => alert('Button pressed!'),
};

export const Loading = (args: SecondaryProps) => (
    <div
        style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Secondary {...args} />
    </div>
);

Loading.args = {
    text: 'My button!',
    loading: true,
    inverse: false,
    disabled: false,
    onClick: () => alert('Button pressed!'),
};

export const Inverse_Normal = (args: SecondaryProps) => (
    <div
        style={{
            backgroundColor: '#00A9E0',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Secondary {...args} />
    </div>
);

Inverse_Normal.args = {
    text: 'My button!',
    loading: false,
    inverse: true,
    disabled: false,
    onClick: () => alert('Button pressed!'),
};

export const Inverse_Disabled = (args: SecondaryProps) => (
    <div
        style={{
            backgroundColor: '#00A9E0',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Secondary {...args} />
    </div>
);

Inverse_Disabled.args = {
    text: 'My button!',
    loading: false,
    inverse: true,
    disabled: true,
    onClick: () => alert('Button pressed!'),
};

export const Inverse_Loading = (args: SecondaryProps) => (
    <div
        style={{
            backgroundColor: '#00A9E0',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Secondary {...args} />
    </div>
);

Inverse_Loading.args = {
    text: 'My button!',
    loading: true,
    inverse: true,
    disabled: false,
    onClick: () => alert('Button pressed!'),
};
