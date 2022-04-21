import React from 'react';
import AskTopupBalance from '../AskTopupBalance';
import CallCircle from '../CallCircle';
import DataCircle from '../DataCircle';
import Gift from '../Gift';
import Purchase from '../Purchase';
import SendBalance from '../SendBalance';
import SendBalanceMagenta from '../SendBalanceMagenta';
import SmsCircle from '../SmsCircle';
import TopupBalance from '../TopupBalance';
import TopupCreditcard from '../TopupCreditcard';
import TopupPrepaidcard from '../TopupPrepaidcard';
import TopupBalanceSos from '../TopupBalanceSos';
import MovBalance from '../MovBalance';
import Mobile from '../Mobile';
import DataGrey from '../../36/DataGrey';
import GSM_GreenGrey from '../../36/GSM_GreenGrey';
import Computer from '../Computer';
import Smartphone from '../Smartphone';
import SupportChat from '../SupportChat';
import Landline from '../Landline';
import Allproducts from '../Allproducts';
import LandlineAndInternet from '../LandlineAndInternet';
import Internet from '../Internet';
import Tv from '../Tv';
import ProductPlaceholder01 from '../ProductPlaceholder01';
import GsmGreen from '../GsmGreen';
import FourG from '../FourG';
import LandLineInvoice from '../LandLineInvoice';
import PassGigabytes from '../PassGigabytes';
import MobilePurple from '../MobilePurple';
import MovistarTv from '../MovistarTv';
import Add from '../Add';
import PlaceholderGallery from '../PlaceholderGallery';


const Assets: {[key: string]: JSX.Element} = {
    Allproducts: <Allproducts />,
    AskTopupBalance: <AskTopupBalance />,
    CallCircle: <CallCircle />,
    DataCircle: <DataCircle />,
    Gift: <Gift />,
    Purchase: <Purchase />,
    SendBalance: <SendBalance />,
    SendBalanceMagenta: <SendBalanceMagenta />,
    SmsCircle: <SmsCircle />,
    TopupBalance: <TopupBalance />,
    TopupCreditcard: <TopupCreditcard />,
    TopupPrepaidcard: <TopupPrepaidcard />,
    TopupBalanceSos: <TopupBalanceSos />,
    Tv: <Tv />,
    LandlineAndInternet: <LandlineAndInternet />,
    MovBalance: <MovBalance />,
    Mobile: <Mobile />,
    MobilePurple: <MobilePurple />,
    DataGrey: <DataGrey />,
    GSM_GreenGrey: <GSM_GreenGrey />,
    Landline: <Landline />,
    Internet: <Internet />,
    Computer: <Computer />,
    Smartphone: <Smartphone />,
    SupportChat: <SupportChat />,
    ProductPlaceholder01: <ProductPlaceholder01 />,
    GsmGreen: <GsmGreen />,
    FourG: <FourG />,
    LandLineInvoice: <LandLineInvoice />,
    PassGigabytes: <PassGigabytes />,
    MovistarTv: <MovistarTv />,
    Add: <Add />,
    PlaceholderGallery: <PlaceholderGallery />
};

export type assetEnum =
    | 'Allproducts'
    | 'AskTopupBalance'
    | 'CallCircle'
    | 'DataCircle'
    | 'Gift'
    | 'Purchase'
    | 'SendBalance'
    | 'SendBalanceMagenta'
    | 'SmsCircle'
    | 'TopupBalance'
    | 'TopupCreditcard'
    | 'TopupPrepaidcard'
    | 'TopupBalanceSos'
    | 'Tv'
    | 'LandlineAndInternet'
    | 'MovBalance'
    | 'Mobile'
    | 'MobilePurple'
    | 'DataGrey'
    | 'GSM_GreenGrey'
    | 'Landline'
    | 'Computer'
    | 'Internet'
    | 'Smartphone'
    | 'ProductPlaceholder01'
    | 'SupportChat'
    | 'GsmGreen'
    | 'FourG'
    | 'LandLineInvoice'
    | 'PassGigabytes'
    | 'MovistarTv'
    | 'Add'
    | 'PlaceholderGallery';

const AssetOrchester = (props: {asset: assetEnum}) => {
    return Assets[props.asset];
};

export default AssetOrchester;
