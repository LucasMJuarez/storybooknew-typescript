import React from 'react';
import {render, shallow} from 'enzyme';
import AssetOrchester, {assetEnum} from './AssetOrchester';

const assetList: assetEnum[] = [
    'Au',
    'Be',
    'Bo',
    'Br',
    'Ca',
    'Cl',
    'Co',
    'Cr',
    'De',
    'Ec',
    'Es',
    'Fr',
    'Gr',
    'It',
    'Lx',
    'Mx',
    'Nl',
    'Ny',
    'Pa',
    'Pe',
    'Po',
    'Us',
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
