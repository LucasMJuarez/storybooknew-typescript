import React from 'react';
import Small from '../Small';
export default {
    title: 'Buttons/Secondary/Small',
    component: Small,
};
interface SmallProps {
    text: string;
    onClick: Function;
    inverse?: boolean;
    disabled?: boolean;
}
export const Normal = (args: SmallProps) => (
    <div
        style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Small {...args} />
    </div>
);

Normal.args = {
    text: 'My button!',
    inverse: false,
    disabled: false,
    onClick: () => alert('Button pressed!'),
};

export const Disabled = (args: SmallProps) => (
    <div
        style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Small {...args} />
    </div>
);

Disabled.args = {
    text: 'My button!',
    inverse: false,
    disabled: true,
    onClick: () => alert('Button pressed!'),
};

export const Inverse_Normal = (args: SmallProps) => (
    <div
        style={{
            backgroundColor: '#00A9E0',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Small {...args} />
    </div>
);

Inverse_Normal.args = {
    text: 'My button!',
    inverse: true,
    disabled: false,
    onClick: () => alert('Button pressed!'),
};

export const Inverse_Disabled = (args: SmallProps) => (
    <div
        style={{
            backgroundColor: '#00A9E0',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Small {...args} />
    </div>
);

Inverse_Disabled.args = {
    text: 'My button!',
    inverse: true,
    disabled: true,
    onClick: () => alert('Button pressed!'),
};