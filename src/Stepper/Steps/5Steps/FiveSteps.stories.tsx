import React from 'react';
import FiveSteps from './FiveSteps';

export default {
    title: 'Stepper/Steps/5Steps',
    component: FiveSteps,
};

export const firstStep = () => (
    <FiveSteps currentStep={1} />
);

export const secondStep = () => (
    <FiveSteps currentStep={2} />
);

export const thirdStep = () => (
    <FiveSteps currentStep={3} />
);

export const fourthStep = () => (
    <FiveSteps currentStep={4} />
);

export const fifthStep = () => (
    <FiveSteps currentStep={5} />
);

firstStep.argTypes = {
    currentStep: { control: 'number' }
};

firstStep.args = {
    currentStep: 1
};