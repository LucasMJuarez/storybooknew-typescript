import React from 'react';
import Shared_Cloud_Actived2 from './Shared_Cloud_Actived2';
import {Props} from './Shared_Cloud_Actived2';

export default {
    title: 'Assets/24/Shared_Cloud_Actived2',
    component: Shared_Cloud_Actived2,
};

export const Shared_Cloud_Actived2Icon = (args: Props) => (
    <div style={{backgroundColor: '#00A8E0'}}>
        <Shared_Cloud_Actived2 {...args} />
    </div>
);

Shared_Cloud_Actived2Icon.args = {
    onClick: () => {
        alert('Press Alert Download File..');
    },
};
