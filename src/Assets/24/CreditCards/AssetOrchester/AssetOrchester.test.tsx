import React from 'react';
import {render, shallow} from 'enzyme';
import AssetOrchester, {assetEnum} from './AssetOrchester';

const assetList: assetEnum[] = [
     'Visa',
     'Mastercard',
     'American',
     'Amex',
     'Automatica',
     'Cabal',
     'CabalDebit',
     'Credencial',
     'Credimas',
     'Da',
     'Diners',
     'Falabella',
     'Kadicard',
     'Mas',
     'Mira',
     'Naranja',
     'NaranjaVisa',
     'Nativa',
     'NativaFirst',
     'Nevada',
     'Patagonia',
     'Qida',
     'ShoppingCard',
     'Sol',
     'Sucredito',
     'VisaDebit'
];

it('Is an assetName component', () => {
    assetList.map((assetName: assetEnum) => {
        const wrapper = shallow(<AssetOrchester asset={assetName} />);
        expect(wrapper.text()).toEqual(`<${assetName} />`);
    });
});
it('Each asset is an svg', () => {
    assetList.map((assetName: assetEnum) => {
        const renderedWrapper = render(<AssetOrchester asset={assetName} />);
        expect(renderedWrapper.is('svg')).toEqual(true);
    });
});
