import React from 'react';
import FullWidth from '.';

export default {
    title: 'Layouts/FullWidth',
    component: FullWidth,
};

export const FullWidth_Container = (args: {children: React.ReactNode}) => <FullWidth children={args.children} />;

FullWidth_Container.args = {
    children: <div style={{backgroundColor: 'grey'}}>My Super Children</div>,
};
