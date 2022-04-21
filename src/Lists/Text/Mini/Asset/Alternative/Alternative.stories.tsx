import React from 'react';
import Alternative from './Alternative';
import {assetEnum} from '../../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Text/Mini/Asset/Alternative',
    component: Alternative,
};

export const AlternativeStorie = (args: {primaryText: string}) => <Alternative primaryText={args.primaryText} />;

AlternativeStorie.argTypes = {
    text: {control: 'text'},
};

AlternativeStorie.args = {
    primaryText: 'Pagos por Internet: Visa Web, Pago mis cuentas y o Link pagos',
};
