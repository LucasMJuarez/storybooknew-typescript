import React from 'react';
import Text from '.';

export default {
    title: 'InputFields/Text',
    component: Text,
};

export const HelpError = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
}) => <Text title={args.title} placeholder={args.placeholder} help={args.help} error={true} />;

HelpError.argTypes = {
    title: {control: 'text'},
    placeholder: {control: 'text'},
    value: {control: 'text'},
    autoFocus: {control: 'boolean'},
};

HelpError.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    help: 'My Help',
};

export const InactiveError = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
}) => <Text title={args.title} placeholder={args.placeholder} error={true} />;

InactiveError.argTypes = {
    title: {control: 'text'},
    placeholder: {control: 'text'},
    value: {control: 'text'},
    autoFocus: {control: 'boolean'},
};

InactiveError.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
};

export const InactiveHelp = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
}) => <Text title={args.title} placeholder={args.placeholder} help={args.help} />;

InactiveHelp.argTypes = {
    title: {control: 'text'},
    placeholder: {control: 'text'},
    value: {control: 'text'},
    autoFocus: {control: 'boolean'},
};

InactiveHelp.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    help: 'My Help',
};

export const Inactive = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
}) => <Text title={args.title} placeholder={args.placeholder} value={args.value} />;

Inactive.argTypes = {
    title: {control: 'text'},
    placeholder: {control: 'text'},
    value: {control: 'text'},
    autoFocus: {control: 'boolean'},
};

Inactive.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
};

export const Focused = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
    zIndex: boolean;
}) => <Text title={args.title} placeholder={args.placeholder} value={args.value} zIndex={args.zIndex} />;

Focused.argTypes = {
    title: {control: 'text'},
    placeholder: {control: 'text'},
    value: {control: 'text'},
    autoFocus: {control: 'boolean'},
    zIndex: {control: 'boolean'},
};

Focused.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    value: 'My Value',
    zIndex: false,
};

export const EmptyFocused = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
}) => <Text title={args.title} placeholder={args.placeholder} value={args.value} autoFocus={args.autoFocus} />;

EmptyFocused.argTypes = {
    title: {control: 'text'},
    placeholder: {control: 'text'},
    value: {control: 'text'},
    autoFocus: {control: 'boolean'},
};

EmptyFocused.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    autoFocus: true,
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
}) => (
    <Text
        title={args.title}
        placeholder={args.placeholder}
        value={args.value}
        inputMode={args.inputMode}
        type={args.type}
        maxLength={args.maxLength}
        pattern={args.pattern}
    />
);

JustNumbersAndMaxLength.argTypes = {
    title: {control: 'text'},
    placeholder: {control: 'text'},
    value: {control: 'text'},
    pattern: {control: 'text'},
    maxLength: {control: 'number'},
    type: {control: 'text'},
    inputMode: {control: 'text'},
};

JustNumbersAndMaxLength.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    pattern: '[0-9]*',
    maxLength: 16,
    inputMode: 'numeric',
    type: 'text',
};

export const AdornmentElement = (args: {
    title: string;
    placeholder: string;
    value: string;
    help: string;
    autoFocus: boolean;
    adornment?: string;
    lengthAdornment?: number;
}) => (
    <Text
        title={args.title}
        adornment={args.adornment}
        placeholder={args.placeholder}
        help={args.help}
        lengthAdornment={args.lengthAdornment}
    />
);

AdornmentElement.argTypes = {
    title: {control: 'text'},
    placeholder: {control: 'text'},
    value: {control: 'text'},
    autoFocus: {control: 'boolean'},
};

AdornmentElement.args = {
    title: 'My Super Test',
    placeholder: 'My Placeholder',
    help: 'My Help',
};
