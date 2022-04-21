import React from 'react';
import {shallow} from 'enzyme';
import Banner from './BannerBoxed';
import AssetOrchester from '../../../Assets/24/AssetOrchester';
import Sub from '../../../TextCatalog/SUB';
import BttnsBanner from '../../../Resources/Banner/BttnsBanner';
import { assetEnum } from '../../../Assets/24/AssetOrchester/AssetOrchester';

it('Renders ok', () => {
    const BannerProps = {
        title: 'This is the title',
        buttons: {
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: '', onClick: () => {}},
        },
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper).toBeTruthy();
});

it('Renders forward button props', () => {
    const BannerProps = {
        title: 'This is the title',
        buttons: {
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: '', onClick: () => {}},
        },
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    console.log(wrapper.find(BttnsBanner).prop('text'));
    expect(wrapper.find(BttnsBanner).props().primaryAction.text).toEqual(BannerProps.buttons.primaryAction.text);
});

it("Renders AssetOrchester and is 'MobilePurple' by default ", () => {
    const asset: assetEnum= 'MobilePurple'
    const BannerProps = {
        title: 'This is the title',
        asset: asset,
        buttons: {
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: '', onClick: () => {}},
        },
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(AssetOrchester).length).toEqual(1);
    expect(wrapper.find(AssetOrchester).prop('asset')).toEqual('MobilePurple');
});

it('Renders Sub and text is title ', () => {
    const BannerProps = {
        title: 'This is the title',
        buttons: {
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: '', onClick: () => {}},
        },
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(Sub).length).toEqual(1);
    expect(wrapper.find(Sub).prop('text')).toEqual(BannerProps.title);
});
