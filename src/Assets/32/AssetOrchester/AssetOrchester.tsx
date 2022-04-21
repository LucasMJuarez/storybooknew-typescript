import React from 'react';
import AskTopupBalance from '../AskTopupBalance';
import GestionTickets from '../GestionTickets';
import SendBalance from '../SendBalance';
import SendBalanceMagenta from '../SendBalanceMagenta';
import TopupBalanceSos from '../TopupBalanceSos';
import TopupCreditcard from '../TopupCreditcard';
import TopupMercadopagoBalance from '../TopupMercadopagoBalance';
import TopupPrepaidcard from '../TopupPrepaidcard';
import Bills from '../Bills';
import Bills_2 from '../Bills_2';
import LayoutChatSupport from '../LayoutChatSupport';
import Paquetizate from '../Paquetizate';
import Roaming from '../Roaming';
import RecurringPackages from '../RecurringPackages';
import InternationalVd from '../InternationalVd';
import PackagesSms from '../PackagesSms';
import PackagesMinutes from '../PackagesMinutes';
import Mobile from '../Mobile';
import Multiplica from '../Multiplica';
import ArmYourPackage from '../ArmYourPackage';
import Whatsapp from '../Whatsapp';
import Television from '../Television';
import MovistarPlay from '../MovistarPlay';
import TopupInvoice from '../TopupInvoice';
import Credit from '../Credit';
import CreditCardsFee from '../CreditCardsFee';
import FrequentQuestions from '../FrequentQuestions';
import Landline from '../Landline';
import Internet from '../Internet';
import Shop from '../Shop';
import PassGigabytes from '../PassGigabytes';
import AdditionalLine from '../AdditionalLine';
import AskGigabytes from '../AskGigabytes';
import ChangeTariff from '../ChangeTariff';
import ClubMovistar from '../ClubMovistar';
import Contest from '../Contest';
import Help from '../Help';
import DeviceUpgrade from '../DeviceUpgrade';
import Envelope from '../Envelope';
import Fiber from '../Fiber';
import Notice from '../Notice';
import PaymentPlaces from '../PaymentPlaces';
import RoamingInfo from '../RoamingInfo';
import Talk from '../Talk';
import TestDrive from '../TestDrive';
import Warranty from '../Warranty';
import SaveGigabytes from '../SaveGigabytes';
import CreditWhite from '../CreditWhite';
import SimReplacementWhite from '../SimReplacementWhite';
import Totalization from '../Totalization';
import Family from '../Family';
import AllProducts from '../AllProducts';
import MovistarTv from '../MovistarTv';

const Assets: {[key: string]: JSX.Element} = {
    AskTopupBalance: <AskTopupBalance />,
    GestionTickets: <GestionTickets />,
    SendBalance: <SendBalance />,
    SendBalanceMagenta: <SendBalanceMagenta />,
    TopupBalanceSos: <TopupBalanceSos />,
    TopupCreditcard: <TopupCreditcard />,
    TopupMercadopagoBalance: <TopupMercadopagoBalance />,
    TopupPrepaidcard: <TopupPrepaidcard />,
    Bills: <Bills />,
    Bills_2: <Bills_2 />,
    LayoutChatSupport: <LayoutChatSupport />,
    Paquetizate: <Paquetizate />,
    RecurringPackages: <RecurringPackages />,
    Roaming: <Roaming />,
    InternationalVd: <InternationalVd />,
    PackagesSms: <PackagesSms />,
    PackagesMinutes: <PackagesMinutes />,
    Mobile: <Mobile />,
    Multiplica: <Multiplica />,
    ArmYourPackage: <ArmYourPackage />,
    Whatsapp: <Whatsapp />,
    Television: <Television />,
    MovistarPlay: <MovistarPlay />,
    TopupInvoice: <TopupInvoice />,
    Credit: <Credit />,
    CreditCardsFee: <CreditCardsFee />,
    FrequentQuestions: <FrequentQuestions />,
    Internet: <Internet />,
    Landline: <Landline />,
    Shop: <Shop />,
    PassGigabytes: <PassGigabytes />,
    AdditionalLine: <AdditionalLine />,
    AskGigabytes: <AskGigabytes />,
    ChangeTariff: <ChangeTariff />,
    ClubMovistar: <ClubMovistar />,
    Contest: <Contest />,
    Help: <Help />,
    DeviceUpgrade: <DeviceUpgrade />,
    Envelope: <Envelope />,
    Fiber: <Fiber />,
    Notice: <Notice />,
    PaymentPlaces: <PaymentPlaces />,
    RoamingInfo: <RoamingInfo />,
    Talk: <Talk />,
    TestDrive: <TestDrive />,
    Warranty: <Warranty />,
    SaveGigabytes: <SaveGigabytes />,
    SimReplacementWhite: <SimReplacementWhite />,
    CreditWhite: <CreditWhite />,
    Totalization: <Totalization />,
    Family: <Family />,
    AllProducts: <AllProducts />,
    MovistarTv: <MovistarTv />,
};

export type assetEnum =
    | 'AskTopupBalance'
    | 'GestionTickets'
    | 'SendBalance'
    | 'SendBalanceMagenta'
    | 'TopupBalanceSos'
    | 'TopupCreditcard'
    | 'TopupMercadopagoBalance'
    | 'TopupPrepaidcard'
    | 'Bills'
    | 'Bills_2'
    | 'LayoutChatSupport'
    | 'Paquetizate'
    | 'RecurringPackages'
    | 'Roaming'
    | 'InternationalVd'
    | 'PackagesSms'
    | 'Mobile'
    | 'PackagesMinutes'
    | 'Multiplica'
    | 'ArmYourPackage'
    | 'Whatsapp'
    | 'Television'
    | 'MovistarPlay'
    | 'Credit'
    | 'CreditCardsFee'
    | 'TopupInvoice'
    | 'FrequentQuestions'
    | 'Internet'
    | 'Landline'
    | 'Shop'
    | 'PassGigabytes'
    | 'PassGigabytes'
    | 'AdditionalLine'
    | 'AskGigabytes'
    | 'ChangeTariff'
    | 'ClubMovistar'
    | 'Contest'
    | 'Help'
    | 'DeviceUpgrade'
    | 'Envelope'
    | 'Fiber'
    | 'Notice'
    | 'PaymentPlaces'
    | 'RoamingInfo'
    | 'Talk'
    | 'TestDrive'
    | 'Warranty'
    | 'SaveGigabytes'
    | 'SimReplacementWhite'
    | 'CreditWhite'
    | 'Totalization'
    | 'Family'
    | 'AllProducts'
    | 'MovistarTv';

export const assetArray = [
    'AskTopupBalance',
    'GestionTickets',
    'SendBalance',
    'SendBalanceMagenta',
    'TopupBalanceSos',
    'TopupCreditcard',
    'TopupMercadopagoBalance',
    'TopupPrepaidcard',
    'Bills',
    'Bills_2',
    'LayoutChatSupport',
    'Paquetizate',
    'RecurringPackages',
    'Roaming',
    'InternationalVd',
    'PackagesSms',
    'Mobile',
    'PackagesMinutes',
    'Multiplica',
    'ArmYourPackage',
    'Whatsapp',
    'Television',
    'MovistarPlay',
    'Credit',
    'CreditCardsFee',
    'TopupInvoice',
    'FrequentQuestions',
    'Internet',
    'Landline',
    'Shop',
    'PassGigabytes',
    'PassGigabytes',
    'AdditionalLine',
    'AskGigabytes',
    'ChangeTariff',
    'ClubMovistar',
    'Contest',
    'Help',
    'DeviceUpgrade',
    'Envelope',
    'Fiber',
    'Notice',
    'PaymentPlaces',
    'RoamingInfo',
    'Talk',
    'TestDrive',
    'Warranty',
    'SaveGigabytes',
    'SimReplacementWhite',
    'CreditWhite',
    'Totalization',
    'Family',
    'AllProducts',
    'MovistarTv',
];

const AssetOrchester = (props: {asset: assetEnum}) => {
    return Assets[props.asset];
};

export default AssetOrchester;
