import React from 'react';
import NSteps from '../NSteps';

export default function FiveStep(props: { currentStep: number }) {
    return <NSteps totalSteps={5} currentStep={props.currentStep} />
}
