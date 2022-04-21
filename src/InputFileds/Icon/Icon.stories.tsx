import React from 'react';
import Icon from '.';
import { assetEnum } from '../../Assets/24/AssetOrchester/AssetOrchester';

export default {
    title: 'InputFields/Icon',
    component: Icon,
};

export const HelpError = (args: {
    title: string;
    placeholder: string;
    asset: assetEnum;
    value: string;
    help: string;
    autoFocus: boolean;
}) => <Icon title={args.title} placeholder={args.placeholder} help={args.help} asset={args.asset} error={true} />;

HelpError.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    asset: {
        control: {
            type: 'select',
            options: [
                'Multiplica',
                'Paquetizate',
                'Roaming',
                'Mobile',
                'MobilePurple',
                'LayoutTariffs',
                'AdditionalLine',
            ],
        },
    },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
};

HelpError.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    asset: 'Mobile',
    help: 'My Help',

};

export const InactiveError = (args: {
    title: string;
    placeholder: string;
    asset: assetEnum;
    value: string;
    help: string;
    autoFocus: boolean;
}) => <Icon title={args.title} placeholder={args.placeholder} asset={args.asset} error={true} />;

InactiveError.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    asset: {
        control: {
            type: 'select',
            options: [
                'Multiplica',
                'Paquetizate',
                'Roaming',
                'Mobile',
                'MobilePurple',
                'LayoutTariffs',
                'AdditionalLine',
            ],
        },
    },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
};

InactiveError.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    asset: 'Mobile'
};

export const InactiveHelp = (args: {
    title: string;
    placeholder: string;
    asset: assetEnum;
    value: string;
    help: string;
    autoFocus: boolean;
}) => <Icon title={args.title} placeholder={args.placeholder} asset={args.asset} help={args.help} />;

InactiveHelp.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    asset: {
        control: {
            type: 'select',
            options: [
                'Multiplica',
                'Paquetizate',
                'Roaming',
                'Mobile',
                'MobilePurple',
                'LayoutTariffs',
                'AdditionalLine',
            ],
        },
    },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
};

InactiveHelp.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    asset: 'Mobile',
    help: 'My Help',
};

export const Inactive = (args: {
    title: string;
    placeholder: string;
    asset: assetEnum;
    value: string;
    help: string;
    autoFocus: boolean;
}) => <Icon title={args.title} placeholder={args.placeholder} asset={args.asset} value={args.value} />;

Inactive.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    asset: {
        control: {
            type: 'select',
            options: [
                'Multiplica',
                'Paquetizate',
                'Roaming',
                'Mobile',
                'MobilePurple',
                'LayoutTariffs',
                'AdditionalLine',
            ],
        },
    },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
};

Inactive.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    asset: 'Mobile'
};

export const Focused = (args: {
    title: string;
    placeholder: string;
    asset: assetEnum;
    value: string;
    help: string;
    autoFocus: boolean;
    zIndex: boolean;
}) => <Icon title={args.title} placeholder={args.placeholder} value={args.value} asset={args.asset} zIndex={args.zIndex} />;

Focused.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    asset: {
        control: {
            type: 'select',
            options: [
                'Multiplica',
                'Paquetizate',
                'Roaming',
                'Mobile',
                'MobilePurple',
                'LayoutTariffs',
                'AdditionalLine',
            ],
        },
    },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
    zIndex: { control: 'boolean' },
};

Focused.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    asset: 'Mobile',
    value: 'My Value',
    zIndex: false,
};

export const EmptyFocused = (args: {
    title: string;
    placeholder: string;
    asset: assetEnum;
    value: string;
    help: string;
    autoFocus: boolean;
}) => <Icon title={args.title} placeholder={args.placeholder} value={args.value} asset={args.asset} autoFocus={args.autoFocus} />;

EmptyFocused.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    asset: {
        control: {
            type: 'select',
            options: [
                'Multiplica',
                'Paquetizate',
                'Roaming',
                'Mobile',
                'MobilePurple',
                'LayoutTariffs',
                'AdditionalLine',
            ],
        },
    },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
};

EmptyFocused.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    asset: 'Mobile',
    autoFocus: true,
};

export const JustNumbersAndMaxLength = (args: {
    title: string;
    placeholder: string;
    asset: assetEnum;
    value: string;
    help: string;
    pattern: string;
    inputMode: any;
    type: string;
    maxLength: number;
}) => (
    <Icon
        title={args.title}
        placeholder={args.placeholder}
        value={args.value}
        asset={args.asset}
        inputMode={args.inputMode}
        type={args.type}
        maxLength={args.maxLength}
        pattern={args.pattern}
    />
);

JustNumbersAndMaxLength.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    asset: {
        control: {
            type: 'select',
            options: [
                'Multiplica',
                'Paquetizate',
                'Roaming',
                'Mobile',
                'MobilePurple',
                'LayoutTariffs',
                'AdditionalLine',
            ],
        },
    },
    value: { control: 'text' },
    pattern: { control: 'text' },
    maxLength: { control: 'number' },
    type: { control: 'text' },
    inputMode: { control: 'text' },
};

JustNumbersAndMaxLength.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    asset: 'Mobile',
    pattern: '[0-9]*',
    maxLength: 16,
    inputMode: 'numeric',
    type: 'text',
};

export const AdornmentElement = (args: {
    title: string;
    placeholder: string;
    asset: assetEnum;
    value: string;
    help: string;
    autoFocus: boolean;
    adornment?: string;
    lengthAdornment?: number;
}) => (
    <Icon
        title={args.title}
        adornment={args.adornment}
        placeholder={args.placeholder}
        asset={args.asset}
        help={args.help}
        lengthAdornment={args.lengthAdornment}
    />
);

AdornmentElement.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    asset: 'Mobile',
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
};

AdornmentElement.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    asset: 'Mobile',
    help: 'My Help',
};
