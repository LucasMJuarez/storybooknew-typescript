import React from 'react';
import TwoL from './TwoL';
import {assetEnum} from '../../../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/RadioButton/FullWidth/Asset/40/2L',
    component: TwoL,
};

export const TwoLSessionWithCheckbox = (args: {
    primaryText: string;
    secondaryText: string;
    onClick: Function;
    active?: boolean;
    asset: assetEnum;
    hideCheckbox: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    ariaChecked?: boolean;
    role?: string;
    id?: string;
}) => (
    <TwoL
        asset={args.asset}
        onClick={args.onClick}
        active={args.active}
        primaryText={args.primaryText}
        secondaryText={args.secondaryText}
        hideCheckbox={args.hideCheckbox}
        tabIndex={args.tabIndex}
        role={args.role}
        ariaLabel={args.ariaLabel}
    />
);

TwoLSessionWithCheckbox.argTypes = {
    primaryText: {control: 'text'},
    secondaryText: {control: 'text'},
    hideCheckbox: {control: 'boolean'},
    active: {control: 'boolean'},
    asset: {
        control: {
            type: 'select',
            options: [
                'AskTopupBalance',
                'CallCircle',
                'DataCircle',
                'Gift',
                'Purchase',
                'SendBalance',
                'SmsCircle',
                'TopupBalance',
                'TopupCreditcard',
                'TopupPrepaidcard',
                'TopupBalanceSos',
                'MovBalance',
                'Mobile',
                'DataGrey',
                'GSM_GreenGrey',
                'Computer',
                'Smartphone',
            ],
        },
    },
};

TwoLSessionWithCheckbox.args = {
    primaryText: 'Chrome Windows',
    secondaryText: 'Último uso: 15/06/2020',
    onClick: () => alert('Hello There'),
    asset: 'Computer',
    hideCheckbox: false,
    role: 'button',
    ariaLabel: 'Seleccionado',
};

export const TwoLSession = (args: {
    primaryText: string;
    secondaryText: string;
    onClick: Function;
    active?: boolean;
    asset: assetEnum;
    hideCheckbox: boolean;
    ariaLabel?: string;
    ariaChecked?: boolean;
    role?: string;
    id?: string;
}) => (
    <TwoL
        asset={args.asset}
        onClick={args.onClick}
        active={args.active}
        primaryText={args.primaryText}
        secondaryText={args.secondaryText}
        hideCheckbox={args.hideCheckbox}
        role={args.role}
        ariaLabel={args.ariaLabel}
    />
);

TwoLSession.argTypes = {
    primaryText: {control: 'text'},
    secondaryText: {control: 'text'},
    hideCheckbox: {control: 'boolean'},
    active: {control: 'boolean'},
    asset: {
        control: {
            type: 'select',
            options: [
                'AskTopupBalance',
                'CallCircle',
                'DataCircle',
                'Gift',
                'Purchase',
                'SendBalance',
                'SmsCircle',
                'TopupBalance',
                'TopupCreditcard',
                'TopupPrepaidcard',
                'TopupBalanceSos',
                'MovBalance',
                'Mobile',
                'DataGrey',
                'GSM_GreenGrey',
                'Computer',
                'Smartphone',
            ],
        },
    },
};

TwoLSession.args = {
    primaryText: 'Chrome Windows',
    secondaryText: 'Último uso: 15/06/2020',
    asset: 'Computer',
    hideCheckbox: true,
    role: 'button',
};
