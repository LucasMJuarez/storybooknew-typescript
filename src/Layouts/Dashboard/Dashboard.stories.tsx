import React from 'react';
import Dashboard from './Dashboard';

export default {
    title: 'Layouts/Dashboard',
    component: Dashboard,
};

export const Dashboard_Container = (args: {children: React.ReactNode}) => <Dashboard children={args.children} />;

Dashboard_Container.args = {
    children: <div style={{backgroundColor: 'grey'}}>My Super Children</div>,
};
