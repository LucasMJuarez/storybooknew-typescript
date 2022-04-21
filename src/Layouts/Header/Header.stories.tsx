import React from 'react';
import Header from '.';

export default {
    title: 'Layouts/Header',
    component: Header,
};

export const Header_Container = (args: {children: React.ReactNode}) => <Header children={args.children} />;

Header_Container.args = {
    children: <div style={{backgroundColor: 'grey', color: 'white'}}>My Super Children</div>,
};
