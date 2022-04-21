import React from 'react';
import NSteps from './NSteps';

export default {
    title: 'Stepper/Steps/NSteps',
    component: NSteps,
};

export const ThreeSteps = () => (
    <NSteps totalSteps={3} currentStep={1} />
);

export const FourSteps = () => (
    <NSteps totalSteps={4} currentStep={2} />
);

export const FiveSteps = () => (
    <NSteps totalSteps={5} currentStep={3} />
);

export const SixSteps = () => (
    <NSteps totalSteps={6} currentStep={4} />
);

export const SevenSteps = () => (
    <NSteps totalSteps={7} currentStep={5} />
);