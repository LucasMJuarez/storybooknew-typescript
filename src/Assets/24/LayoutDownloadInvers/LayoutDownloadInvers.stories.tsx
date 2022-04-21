import React from 'react';
import LayoutDownloadInvers from './LayoutDownloadInvers';
import {Props} from './LayoutDownloadInvers';

export default {
    title: 'Assets/24/LayoutDownloadInvers',
    component: LayoutDownloadInvers,
};

export const LayoutDownloadInversIcon = (args: Props) => (
    <div style={{backgroundColor: '#00A8E0'}}>
        <LayoutDownloadInvers {...args} />
    </div>
);

LayoutDownloadInversIcon.args = {
    onClick: () => {
        alert('Press Alert Download File..');
    },
};
