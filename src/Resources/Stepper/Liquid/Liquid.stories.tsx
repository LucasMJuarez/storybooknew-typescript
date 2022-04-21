import React from 'react';
import Liquid from './Liquid';

export default {
    title: 'Resources/Stepper/Liquid',
    component: Liquid,
};

export const CeroPercentage = () => (
    <Liquid progress={"0%"}/>
);

export const TwentyPercentage = () => (
    <Liquid progress={"20%"}/>
);

export const FortyPercentage = () => (
    <Liquid progress={"40%"}/>
);

export const SixtyPercentage = () => (
    <Liquid progress={"60%"}/>
);

export const EightyPercentage = () => (
    <Liquid progress={"80%"}/>
);

export const HundredPercentage = () => (
    <Liquid progress={"100%"}/>
);

CeroPercentage.argTypes = {
    progress: {control: 'text'}
};

CeroPercentage.args = {
    progress: "0%"
};