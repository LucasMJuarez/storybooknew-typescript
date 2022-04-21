import React from 'react';
import TwoL from '.';
import {assetEnum} from '../../../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Chevron/FullWidth/Asset/40/2L',
    component: TwoL,
};

export const TwoLStorie = (args: {
    primaryText: string; 
    secondaryText: string; 
    onClick?: Function; 
    asset: assetEnum; 
    isSelected: boolean; 
    isOverlayController: boolean; 
    hideIcon: boolean;
    dividerFullWidth: boolean;
    hideDivider: boolean;
    ariaLabel?: string;
    role?: string;
    tabIndex?: number;

}) => (
    <TwoL 
        asset={args.asset} 
        onClick={args.onClick} 
        primaryText={args.primaryText} 
        secondaryText={args.secondaryText} 
        isSelected={args.isSelected} 
        isOverlayController={args.isOverlayController} 
        hideIcon={args.hideIcon}
        dividerFullWidth={args.dividerFullWidth}
        hideDivider={args.hideDivider}
        ariaLabel={args.ariaLabel}
        tabIndex={args.tabIndex}
        role={args.role}
    />
);

TwoLStorie.argTypes = {
    text: {control: 'text'},
    isSelected: { control: 'boolean'},
    isOverlayController: { control: 'boolean' },
    hideIcon: { control: 'boolean'},
    dividerFullWidth: { control: 'boolean'},
    hideDivider: { control: 'boolean'},
    ariaLabel: { control: 'text'},
    role: { control: 'text'}
};

TwoLStorie.args = {
    primaryText: '011 699 04455',
    secondaryText: 'Telephone Line',
    onClick: () => alert('Hello There'),
    asset: 'AskTopupBalance',
    ariaLabel: 'Test AriaLabel',
    tabIndex: 0,
    role: 'button',
};
