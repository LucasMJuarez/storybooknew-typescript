import React from 'react';
import Massa, { MassaProps } from './Massa';

export default {
    title: 'Resources/Massa',
    component: Massa,
};

export const MassaContainer = (args: MassaProps) => <Massa {...args} children={args.children} />;

MassaContainer.args = {
    alignLeft: false,
    children: <div>My Example Children</div>,
};