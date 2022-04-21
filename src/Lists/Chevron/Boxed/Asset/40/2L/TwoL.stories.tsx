import React from 'react';
import TwoL from '.';
import {assetEnum} from '../../../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Chevron/Boxed/Asset/40/2L',
    component: TwoL,
};

export const TwoLStorie = (args: {
    primaryText: string;
    secondaryText: string;
    onClick: Function;
    asset: assetEnum;
    tabIndex: number;
    onkeyPress: React.KeyboardEventHandler;
    showArrow?: boolean;
    showTrash?: boolean;
    isSelected?: boolean;
}) => (
    <div>
        <TwoL
            asset={args.asset}
            onClick={args.onClick}
            primaryText={args.primaryText}
            secondaryText={args.secondaryText}
            tabIndex={args.tabIndex}
            onkeyPress={args.onkeyPress}
            showArrow={args.showArrow}
            showTrash={args.showTrash}
            isSelected={args.isSelected}
        />
    </div>
);

TwoLStorie.args = {
    primaryText: 'Historial chat de soporte',
    secondaryText: 'Ingresá para ver más info',
    onClick: () => alert('Hello There'),
    asset: 'SupportChat',
    tabIndex: 0,
    onkeyPress: () => alert('Hello There'),
    showArrow: true,
    isSelected: false,
    showTrash: false,
};
