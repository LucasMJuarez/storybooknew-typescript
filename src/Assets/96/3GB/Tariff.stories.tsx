import React from 'react';
import Tariff from './Tariff';
import {Props} from './Tariff';

export default {
    title: 'Assets/96/Tariff',
    component: Tariff,
};

export const TariffIcon = (args: Props) => <Tariff {...args} />;

TariffIcon.args = {
    title: '10GB',
};
