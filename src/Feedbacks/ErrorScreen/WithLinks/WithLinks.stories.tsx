import React from 'react';
import WithLinksFeedback from '.';

export default {
    title: 'Feedbacks/ErrorScreen/WithLinks',
    component: WithLinksFeedback,
};

export const ErrorFeedback = (args: {
    title: string;
    description: string;
    linksLabel: string[];
    href: string[];
    onClick: Function[];
}) => (
    <WithLinksFeedback
        title={args.title}
        description={args.description}
        linksLabel={args.linksLabel}
        href={args.href}
        onClick={args.onClick}
    />
);

ErrorFeedback.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    linksLabel: {control: 'array'},
    href: {control: 'array'},
    onClick: {control: 'array'},
};

ErrorFeedback.args = {
    title: 'My Error Message',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non nobis ?',
    linksLabel: ['Link1', 'Link2', 'Link3'],
    href: ['Link1', 'Link2', 'Link3'],
    onClick: [() => alert('My Super Error'), () => alert('My Super Error'), () => alert('My Super Error')],
};
