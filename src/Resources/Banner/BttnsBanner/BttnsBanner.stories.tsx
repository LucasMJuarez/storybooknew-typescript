import React from 'react';
import BttnsBanner from './BttnsBanner';
export default {
    title: 'Resources/Banner/BttnsBanner',
    component: BttnsBanner,
};

export const BttnsBannerNormal = (args: {text: string}) => (
    <BttnsBanner
        primaryAction={{text: 'PrimaryAction', onClick: () => alert('Primary Action alert')}}
        secondaryAction={{text: 'SecondaryAction', onClick: () => alert('Secondary Action alert')}}
    />
);

BttnsBannerNormal.argTypes = {
    text: {control: 'text'},
};

BttnsBannerNormal.args = {
    text: 'Pagar',
};
