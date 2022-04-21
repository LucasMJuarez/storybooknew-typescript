import React from 'react';
import TwoButtons from './TwoButtons';
export default {
    title: 'Buttons/ButtonLayouts/ButtonLayout/TwoButtons',
    component: TwoButtons,
};

export const TwoButtonsNormal = (args: any) => (
    <TwoButtons primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />
);

TwoButtonsNormal.args = {
    primaryButton: {text: 'PrimaryButton', onClick: () => alert('Primary button alert')},
    secondaryButton: {text: 'SecondaryButton', onClick: () => alert('Secondary button alert')},
};

export const TwoButtonsInverse = (args: any) => (
    <div style={{backgroundColor: '#333'}}>
        <TwoButtons primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />
    </div>
);

TwoButtonsInverse.args = {
    primaryButton: {text: 'PrimaryButton', onClick: () => alert('Primary button alert'), inverse: true},
    secondaryButton: {text: 'SecondaryButton', onClick: () => alert('Secondary button alert'), inverse: true},
};

export const TwoButtonsRow = (args: any) => (
    <div style={{flexDirection: 'row'}}>
        <TwoButtons primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />
    </div>
);

TwoButtonsRow.args = {
    primaryButton: {text: 'PrimaryButton', onClick: () => alert('Primary button alert')},
    secondaryButton: {text: 'SecondaryButton', onClick: () => alert('Secondary button alert')},
};
