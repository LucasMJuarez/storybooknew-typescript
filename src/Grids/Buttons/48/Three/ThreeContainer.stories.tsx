import React from 'react';
import ThreeContainer from './ThreeContainer';
import Data_Negative from '../../../../Assets/48/Data_Negative'
import LandLine_Positive from '../../../../Assets/48/LandLine_Positive'
import Sms_Positive from '../../../../Assets/48/Sms_Positive'

export default {
    title: 'Grids/Buttons/48/3',
    component: ThreeContainer,
};

export const ThreeContainerTest = () => (
    <ThreeContainer>
        <Data_Negative />
        <LandLine_Positive />
        <Sms_Positive />
    </ThreeContainer>
);
