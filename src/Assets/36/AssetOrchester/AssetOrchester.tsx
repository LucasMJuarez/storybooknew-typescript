import React from 'react';
import Data from '../Data';
import DataGrey from '../DataGrey';
import GSM_Green from '../GSM_Green';
import GSM_GreenGrey from '../GSM_GreenGrey';
import SmsGrey from '../SmsGrey';
import Sms from '../Sms';

const Assets: {[key: string]: JSX.Element} = {
    Data: <Data />,
    DataGrey: <DataGrey />,
    GSM_Green: <GSM_Green />,
    GSM_GreenGrey: <GSM_GreenGrey />,
    SmsGrey: <SmsGrey />,
    Sms: <Sms />
};

export type assetEnum =
    | 'Data'
    | 'DataGrey'
    | 'GSM_Green'
    | 'GSM_GreenGrey'
    | 'SmsGrey'
    | 'Sms';

const AssetOrchester = (props: {asset: assetEnum}) => {
    return Assets[props.asset];
};

export default AssetOrchester;
