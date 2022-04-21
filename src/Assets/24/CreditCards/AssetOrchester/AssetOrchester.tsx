import React from 'react';
import American from '../American';
import Amex from '../Amex';
import Mastercard from '../Mastercard';
import Visa from '../Visa';
import Automatica from '../Automatica';
import Cabal from '../Cabal';
import CabalDebit from '../CabalDebit';
import Credencial from '../Credencial';
import Credimas from '../Credimas';
import Da from '../Da';
import Diners from '../Diners';
import Falabella from '../Falabella';
import Kadicard from '../Kadicard';
import Mas from '../Mas';
import Mira from '../Mira';
import Naranja from '../Naranja';
import NaranjaVisa from '../NaranjaVisa';
import Nativa from '../Nativa';
import NativaFirst from '../NativaFirst';
import Nevada from '../Nevada';
import Patagonia from '../Patagonia';
import Qida from '../Qida';
import ShoppingCard from '../ShoppingCard';
import Sol from '../Sol';
import Sucredito from '../Sucredito';
import VisaDebit from '../VisaDebit';


const Assets: { [key: string]: JSX.Element } = {
    Visa: <Visa />,
    Mastercard: <Mastercard />,
    American: <American />,
    Amex: <Amex />,
    Automatica: <Automatica />,
    Cabal: <Cabal />,
    CabalDebit: <CabalDebit />,
    Credencial: <Credencial />,
    Credimas: <Credimas />,
    Da: <Da />,
    Diners: <Diners />,
    Falabella: <Falabella />,
    Kadicard: <Kadicard />,
    Mas: <Mas />,
    Mira: <Mira />,
    Naranja: <Naranja />,
    NaranjaVisa: <NaranjaVisa />,
    Nativa: <Nativa />,
    NativaFirst: <NativaFirst />,
    Nevada: <Nevada />,
    Patagonia: <Patagonia />,
    Qida: <Qida />,
    ShoppingCard: <ShoppingCard />,
    Sol: <Sol />,
    Sucredito: <Sucredito />,
    VisaDebit: <VisaDebit />,
};

export type assetEnum =
    | 'Visa'
    | 'Mastercard'
    | 'American'
    | 'Amex'
    | 'Automatica'
    | 'Cabal'
    | 'CabalDebit'
    | 'Credencial'
    | 'Credimas'
    | 'Da'
    | 'Diners'
    | 'Falabella'
    | 'Kadicard'
    | 'Mas'
    | 'Mira'
    | 'Naranja'
    | 'NaranjaVisa'
    | 'Nativa'
    | 'NativaFirst'
    | 'Nevada'
    | 'Patagonia'
    | 'Qida'
    | 'ShoppingCard'
    | 'Sol'
    | 'Sucredito'
    | 'VisaDebit';

const AssetOrchester = (props: { asset: assetEnum }) => {
    return Assets[props.asset];
};

export default AssetOrchester;
