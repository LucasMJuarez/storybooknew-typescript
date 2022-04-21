import React from 'react';
import TwoL from './TwoL';

export default {
    title: 'Lists/RadioButton/Boxed/NoAsset/2L',
    component: TwoL,
};

export const TwoLStorie = (args: {primaryText: string; secondaryText? : string, onClick: Function}) => (
    <TwoL onClick={args.onClick} primaryText={args.primaryText} secondaryText={args.secondaryText} />
);

TwoLStorie.args = {
    primaryText: 'Estado del reclamo',
    secondaryText : 'Abierto',
};
