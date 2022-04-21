import React from 'react';
import Link from './Link';
export default {
    title: 'Buttons/Link',
    component: Link,
};
interface LinkProps {
    text: string;
    onClick: Function;
    disabled?: boolean;
}

export const Normal = (args: LinkProps) => <Link {...args} />;

Normal.args = {
    text: 'My Super Test',
    disabled: false,
    onClick: () => alert('Link Pressed'),
};
export const Disabled = (args: LinkProps) => <Link {...args} />;

Disabled.args = {
    text: 'My Super Test',
    disabled: true,
    onClick: () => alert('Link Pressed'),
};
