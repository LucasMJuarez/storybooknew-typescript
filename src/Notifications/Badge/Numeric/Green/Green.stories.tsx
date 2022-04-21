import React from 'react';
import GreenBadge from '.';

export default {
    title: 'Notifications/Badge/Numeric/Green',
    component: GreenBadge,
};

export const GreenIcon = (args: {text: string}) => <GreenBadge text={args.text} />;

GreenIcon.args = {
    text: '9',
};
