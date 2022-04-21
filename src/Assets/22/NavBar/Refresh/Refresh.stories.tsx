import React from 'react';
import Refresh from './Refresh';
import {Props} from './Refresh';

export default {
    title: 'Assets/22/NavBar/Refresh',
    component: Refresh,
};

export const RefreshIcon = (args: Props) => <Refresh {...args} />;

RefreshIcon.args = {
    onClick: () => {
        alert('Press Refreshhh fresh..');
    },
};
