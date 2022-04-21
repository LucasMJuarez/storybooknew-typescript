import React from 'react';
import OneButton from './ButtonLink';
import {ButtonLinkProps} from './ButtonLink';
import ButtonLink from './ButtonLink';
export default {
    title: 'Buttons/ButtonLayouts/ButtonFixedFooterLayout/ButtonLink',
    component: OneButton,
};

export const Button = (args: ButtonLinkProps) => <ButtonLink {...args} />;

Button.args = {
    textButton: 'My button!',
    textLink: 'My Link!',
    onClickButton: () => alert('Button Pressed'),
    onClickLink: () => alert('Link Pressed'),
    isAnchor: false,
    href: '#',
};
