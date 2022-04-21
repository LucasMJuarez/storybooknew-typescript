import React from 'react';
import Fiber from '../Fiber';
import Call from '../Call';
import Fourg from '../Fourg';
import Close from '../Close';
import AlertInfo from '../AlertInfo';
import Gsm_Blue from '../Gsm_Blue';
import CloseInverse from '../NavBar/CloseInverse';
import Notifications from '../Notifications';
import Lock from '../Lock';
import LogOut from '../LogOut';
import Profile from '../Profile';
import Mobile from '../Mobile';
import LayoutTariffs from '../LayoutTariffs';
import ArmYourPackage from '../ArmYourPackage';
import InternationalVd from '../InternationalVd';
import Multiplica from '../Multiplica';
import Paquetizate from '../Paquetizate';
import Roaming from '../Roaming';
import AdditionalLine from '../AdditionalLine';
import AskGigabytes from '../AskGigabytes';
import ChangeTariff from '../ChangeTariff';
import ClubMovistar from '../ClubMovistar';
import ConnectionTest from '../ConnectionTest';
import Contest from '../Contest';
import Credit from '../Credit';
import DeviceConfiguration from '../DeviceConfiguration';
import DeviceUpgrade from '../DeviceUpgrade';
import Family from '../Family';
import Help from '../Help';
import Notice from '../Notice';
import PassGigabytes from '../PassGigabytes';
import PaymentPlaces from '../PaymentPlaces';
import PremiumSms from '../PremiumSms';
import Shop from '../Shop';
import Talk from '../Talk';
import TestDrive from '../TestDrive';
import TopupInvoice from '../TopupInvoice';
import Warranty from '../Warranty';
import AlertWarning from '../AlertWarning';
import Television from '../Television';
import SaveGigabytes from '../SaveGigabytes';
import RoamingInfo from '../RoamingInfo';
import Bills from '../Bills';
import CreditCardsFee from '../CreditCardsFee';
import Data from '../Data';
import Whatsapp from '../Whatsapp';
import BulletActive from '../BulletActive';
import BulletInactive from '../BulletInactive';
import IdealChip from '../../16/IdealChip';
import LightDown from '../../24/Dropdown/LightDown';
import Bills_2 from '../Bills_2';
import Envelope from '../Envelope';
import Gray from '../Bell/Gray';
import CurrentTariffs from '../CurrentTariffs';
import Gift from '../Gift';
import AlertInfoWhite from '../AlertInfoWhite';
import Others from '../Others';
import CellphoneUnlonck from '../CellphoneUnlonck';
import Bin from '../Bin';
import MobilePurple from '../MobilePurple';
import SmsCircle from '../SmsCircle';
import MovistarTv from '../MovistarTv';
import LayoutDownloadInvers from '../LayoutDownloadInvers';
import Shared_Cloud_Actived2 from '../Shared_Cloud_Actived2';

const Assets: {[key: string]: JSX.Element} = {
    Gsm_Blue: <Gsm_Blue />,
    Fourg: <Fourg />,
    Fiber: <Fiber />,
    Call: <Call />,
    Close: <Close />,
    AlertInfo: <AlertInfo />,
    CloseInverse: <CloseInverse />,
    Notifications: <Notifications />,
    Lock: <Lock />,
    LogOut: <LogOut />,
    Profile: <Profile />,
    Mobile: <Mobile />,
    LayoutTariffs: <LayoutTariffs />,
    ArmYourPackage: <ArmYourPackage />,
    InternationalVd: <InternationalVd />,
    Multiplica: <Multiplica />,
    Paquetizate: <Paquetizate />,
    Roaming: <Roaming />,
    AdditionalLine: <AdditionalLine />,
    AskGigabytes: <AskGigabytes />,
    ChangeTariff: <ChangeTariff />,
    ClubMovistar: <ClubMovistar />,
    ConnectionTest: <ConnectionTest />,
    Contest: <Contest />,
    Credit: <Credit />,
    DeviceConfiguration: <DeviceConfiguration />,
    DeviceUpgrade: <DeviceUpgrade />,
    Family: <Family />,
    Help: <Help />,
    MobilePurple: <MobilePurple />,
    Notice: <Notice />,
    PassGigabytes: <PassGigabytes />,
    PaymentPlaces: <PaymentPlaces />,
    PremiumSms: <PremiumSms />,
    Shop: <Shop />,
    SmsCircle: <SmsCircle />,
    Talk: <Talk />,
    TestDrive: <TestDrive />,
    TopupInvoice: <TopupInvoice />,
    Warranty: <Warranty />,
    AlertWarning: <AlertWarning />,
    Television: <Television />,
    SaveGigabytes: <SaveGigabytes />,
    RoamingInfo: <RoamingInfo />,
    Bills: <Bills />,
    CreditCardsFee: <CreditCardsFee />,
    Data: <Data />,
    Whatsapp: <Whatsapp />,
    BulletActive: <BulletActive />,
    BulletInactive: <BulletInactive />,
    IdealChip: <IdealChip />,
    LightDown: <LightDown />,
    Bills_2: <Bills_2 />,
    Envelope: <Envelope />,
    Gray: <Gray />,
    CurrentTariffs: <CurrentTariffs />,
    Gift: <Gift />,
    AlertInfoWhite: <AlertInfoWhite />,
    CellphoneUnlonck: <CellphoneUnlonck />,
    Others: <Others />,
    Bin: <Bin />,
    MovistarTv: <MovistarTv />,
    LayoutDownloadInvers: <LayoutDownloadInvers />,
    Shared_Cloud_Actived2: <Shared_Cloud_Actived2 />,
};

export type assetEnum =
    | 'Gsm_Blue'
    | 'Fourg'
    | 'Fiber'
    | 'Call'
    | 'Close'
    | 'CloseInverse'
    | 'AlertInfo'
    | 'Notifications'
    | 'Lock'
    | 'LogOut'
    | 'Profile'
    | 'ArmYourPackage'
    | 'InternationalVd'
    | 'Multiplica'
    | 'Paquetizate'
    | 'Roaming'
    | 'Mobile'
    | 'MobilePurple'
    | 'LayoutTariffs'
    | 'AdditionalLine'
    | 'AskGigabytes'
    | 'ChangeTariff'
    | 'ClubMovistar'
    | 'ConnectionTest'
    | 'Contest'
    | 'Credit'
    | 'DeviceConfiguration'
    | 'DeviceUpgrade'
    | 'Family'
    | 'Help'
    | 'Notice'
    | 'PassGigabytes'
    | 'PaymentPlaces'
    | 'PremiumSms'
    | 'Shop'
    | 'SmsCircle'
    | 'Talk'
    | 'TestDrive'
    | 'TopupInvoice'
    | 'Warranty'
    | 'AlertWarning'
    | 'Television'
    | 'SaveGigabytes'
    | 'RoamingInfo'
    | 'Bills'
    | 'CreditCardsFee'
    | 'Data'
    | 'Whatsapp'
    | 'BulletActive'
    | 'BulletInactive'
    | 'IdealChip'
    | 'LightDown'
    | 'Bills_2'
    | 'Gray'
    | 'Envelope'
    | 'CurrentTariffs'
    | 'Gift'
    | 'AlertInfoWhite'
    | 'CellphoneUnlonck'
    | 'Others'
    | 'Bin'
    | 'MovistarTv'
    | 'LayoutDownloadInvers'
    | 'Shared_Cloud_Actived2';

export const assetArray = [
    'Gsm_Blue',
    'Fourg',
    'Fiber',
    'Call',
    'Close',
    'CloseInverse',
    'AlertInfo',
    'Notifications',
    'Lock',
    'LogOut',
    'Profile',
    'ArmYourPackage',
    'InternationalVd',
    'MobilePurple',
    'Multiplica',
    'Paquetizate',
    'Roaming',
    'Mobile',
    'LayoutTariffs',
    'AdditionalLine',
    'AskGigabytes',
    'ChangeTariff',
    'ClubMovistar',
    'ConnectionTest',
    'Contest',
    'Credit',
    'DeviceConfiguration',
    'DeviceUpgrade',
    'Family',
    'Help',
    'Notice',
    'PassGigabytes',
    'PaymentPlaces',
    'PremiumSms',
    'Shop',
    'SmsCircle',
    'Talk',
    'TestDrive',
    'TopupInvoice',
    'Warranty',
    'AlertWarning',
    'Television',
    'SaveGigabytes',
    'RoamingInfo',
    'Bills',
    'CreditCardsFee',
    'Data',
    'Whatsapp',
    'BulletActive',
    'BulletInactive',
    'IdealChip',
    'LightDown',
    'Bills_2',
    'Envelope',
    'Gray',
    'CurrentTariffs',
    'Gift',
    'AlertInfoWhite',
    'CellphoneUnlonck',
    'Others',
    'Bin',
    'MovistarTv',
    'LayoutDownloadInvers',
    'Shared_Cloud_Actived2',
];

const AssetOrchester = (props: {asset: assetEnum}) => {
    return Assets[props.asset];
};

export default AssetOrchester;
