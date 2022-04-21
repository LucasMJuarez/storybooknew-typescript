import React from 'react';
import LiquidAccentBullet from './LiquidAccentBullet';

export default {
    title: 'Stepper/LiquidAccentBullet',
    component: LiquidAccentBullet,
};

export const CeroPercentage = () => (
    <LiquidAccentBullet totalSteps={5} currentStep={1} />
);

export const TwentyFivePercentage = () => (
    <LiquidAccentBullet totalSteps={5} currentStep={2} />
);

export const FiftyPercentage = () => (
    <LiquidAccentBullet totalSteps={5} currentStep={3} />
);

export const SeventyFivePercentage = () => (
    <LiquidAccentBullet totalSteps={5} currentStep={4} />
);

export const HundredPercentage = () => (
    <LiquidAccentBullet totalSteps={5} currentStep={5} />
);

CeroPercentage.argTypes = {
    totalSteps: { control: 'number' },
    currentStep: { control: 'number' }
};

CeroPercentage.args = {
    totalSteps: 5,
    currentStep: 1
};