import React from 'react';
import Password from '.';

export default {
    title: 'InputFields/Password',
    component: Text,
};

export const HelpError = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
    capsLockWarning: boolean;
}) => <Password title={args.title} placeholder={args.placeholder} help={args.help} error={true} capsLockWarning={args.capsLockWarning} />;

HelpError.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
    capsLockWarning: { control: 'boolean' }
};

HelpError.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    help: 'My Help',
    capsLockWarning: true
};

export const InactiveError = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
    capsLockWarning: boolean;
}) => <Password title={args.title} placeholder={args.placeholder} error={true} capsLockWarning={args.capsLockWarning} />;

InactiveError.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
    capsLockWarning: { control: 'boolean' }
};

InactiveError.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    capsLockWarning: true
};

export const InactiveHelp = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
    capsLockWarning: boolean;
}) => <Password title={args.title} placeholder={args.placeholder} help={args.help} capsLockWarning={args.capsLockWarning} />;

InactiveHelp.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
    capsLockWarning: { control: 'boolean' }
};

InactiveHelp.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    help: 'My Help',
    capsLockWarning: true
};

export const Inactive = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
    capsLockWarning: boolean;
}) => <Password title={args.title} placeholder={args.placeholder} value={args.value} capsLockWarning={args.capsLockWarning} />;

Inactive.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
    capsLockWarning: { control: 'boolean' }
};

Inactive.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    capsLockWarning: true
};

export const Focused = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
    capsLockWarning: boolean;
}) => <Password title={args.title} placeholder={args.placeholder} value={args.value} capsLockWarning={args.capsLockWarning} />;

Focused.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
    capsLockWarning: { control: 'boolean' }
};

Focused.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    value: 'My Value',
    capsLockWarning: true
};

export const EmptyFocused = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
    capsLockWarning: boolean;
}) => <Password title={args.title} placeholder={args.placeholder} value={args.value} autoFocus={args.autoFocus} capsLockWarning={args.capsLockWarning} />;

EmptyFocused.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
    capsLockWarning: { control: 'boolean' }
};

EmptyFocused.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    autoFocus: true,
    capsLockWarning: true
};

export const JustNumbersAndMaxLength = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    pattern: string;
    inputMode: any;
    type: string;
    maxLength: number;
    capsLockWarning: boolean;
}) => (
    <Password
        title={args.title}
        placeholder={args.placeholder}
        value={args.value}
        inputMode={args.inputMode}
        type={args.type}
        maxLength={args.maxLength}
        pattern={args.pattern}
        capsLockWarning={args.capsLockWarning}
    />
);

JustNumbersAndMaxLength.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    pattern: { control: 'text' },
    maxLength: { control: 'number' },
    type: { control: 'text' },
    inputMode: { control: 'text' },
    capsLockWarning: { control: 'boolean' }
};

JustNumbersAndMaxLength.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    pattern: '[0-9]*',
    maxLength: 16,
    inputMode: 'numeric',
    type: 'text',
    capsLockWarning: true
};

export const AdornmentElement = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
    adornment?: string;
    capsLockWarning: boolean;
}) => <Password title={args.title} adornment={args.adornment} placeholder={args.placeholder} help={args.help} capsLockWarning={args.capsLockWarning} />;

AdornmentElement.argTypes = {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    autoFocus: { control: 'boolean' },
    capsLockWarning: { control: 'boolean' }
};

AdornmentElement.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    help: 'My Help',
    capsLockWarning: true
};
