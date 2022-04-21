import React from 'react';
import MassaGreySlim from '.';

export default {
    title: 'Resources/MassaGreySlim/slim',
    component: MassaGreySlim,
};

export const MassaGreySlimContainer = (args: {children: React.ReactNode}) => <MassaGreySlim children={args.children} />;

MassaGreySlimContainer.args = {
    children: <div>My Example Children</div>,
};
