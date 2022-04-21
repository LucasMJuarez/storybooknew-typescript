import React from 'react';
import Boxed from '.';

export default {
    title: 'Layouts/Boxed',
    component: Boxed,
};

export const Boxed_Container = (args: {children: React.ReactNode}) => <Boxed children={args.children} />;

Boxed_Container.args = {
    children: <div> My Super Children </div>,
};
