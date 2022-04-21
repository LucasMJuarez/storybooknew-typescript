import React from 'react';
import Data from '../../../../Assets/36/Data';
import TwoL from './TwoL';
import { assetEnum } from '../../../../Assets/36/AssetOrchester/AssetOrchester'

export default {
    title: 'Lists/Chart/NoChevron/TwoL',
    component: TwoL
};

export const TwoLevel = (props : {
    text : string, 
    sub_secondary : string,
    icon : assetEnum
    value : number
}) => (
    <TwoL {...props}/>
);

TwoLevel.args = {
    text: 'Ilimitado',
    sub_secondary : 'Vence el 8 Nov',
    icon : () => ( <Data /> ),
    value : 60
};

TwoLevel.argTypes = {
    text: {control: 'text'},
    sub_secondary: {control: 'text'},
    icon : { control : 'text' },
    value : { control : 'number' }
};

