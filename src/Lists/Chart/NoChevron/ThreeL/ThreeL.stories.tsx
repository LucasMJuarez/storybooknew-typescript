import React from 'react';
import ThreeL from './ThreeL';
import { assetEnum } from '../../../../Assets/36/AssetOrchester/AssetOrchester'

export default {
    title: 'Lists/Chart/NoChevron/ThreeL',
    component: ThreeL
};

export const ThreeLevel = (props : {
    text : string, 
    sub_primary : string,
    sub_secondary : string,
    icon : assetEnum,
    value : number
}) => (
    <ThreeL {...props}/>
);

ThreeLevel.args = {
    text: 'Ilimitado',
    sub_primary : 'Autorenovable Min Multidestino',
    sub_secondary : 'Vence el 8 Nov',
    icon : 'Data',
    value : 60
};

ThreeLevel.argTypes = {
    text: {control: 'text'},
    sub_primary: {control: 'text'},
    sub_secondary: {control: 'text'},
    icon: {
        control: {
            type: 'select',
            options: [
                'Data',
                'DataGrey',
                'GSM_Green',
                'GSM_GreenGrey',
                'SmsGrey',
                'Sms'
            ],
        },
    },
    value : { control : 'number' }
};

