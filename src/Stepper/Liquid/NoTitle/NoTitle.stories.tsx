import React from 'react';
import NoTitle from './NoTitle';

export default {
    title: 'Stepper/Liquid/NoTitle',
    component: NoTitle,
};

export const CeroPercentage = () => (
    <NoTitle progress={"0%"}/>
);

export const TwentyPercentage = () => (
    <NoTitle progress={"20%"}/>
);

export const FortyPercentage = () => (
    <NoTitle progress={"40%"}/>
);

export const SixtyPercentage = () => (
    <NoTitle progress={"60%"}/>
);

export const EightyPercentage = () => (
    <NoTitle progress={"80%"}/>
);

export const HundredPercentage = () => (
    <NoTitle progress={"100%"}/>
);

CeroPercentage.argTypes = {
    progress: {control: 'text'}
};

CeroPercentage.args = {
    progress: "0%"
};