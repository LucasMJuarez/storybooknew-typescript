import React from 'react';
import {shallow} from 'enzyme';
import Banner from './Banner';
import BttnsBanner from '../../Resources/Banner/BttnsBanner';
import AssetOrchester from '../../Assets/24/AssetOrchester';
import Sub from '../../TextCatalog/SUB';
import Close from '../../Assets/24/Close';
import TitleBanner from '../../Resources/Banner/TitleBanner';

it('Renders ok', () => {
    const BannerProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        permanent: true,
        buttons: {
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: 'Secondary Action', onClick: () => alert('Secondary Action')},
        },
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper).toBeTruthy();
});

it('Renders forward buttons props', () => {
    const BannerProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        permanent: true,
        buttons: {
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: 'Secondary Action', onClick: () => alert('Secondary Action')},
        },
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(BttnsBanner).props()).toEqual(BannerProps.buttons);
});

it("Renders AssetOrchester and is 'AlertInfo' by default ", () => {
    const BannerProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        permanent: true,
        buttons: {
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: 'Secondary Action', onClick: () => alert('Secondary Action')},
        },
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(AssetOrchester).length).toEqual(1);
    expect(wrapper.find(AssetOrchester).prop('asset')).toEqual('AlertInfo');
});

it('Renders Sub and text is description ', () => {
    const BannerProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        permanent: true,
        buttons: {
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: 'Secondary Action', onClick: () => alert('Secondary Action')},
        },
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(Sub).length).toEqual(1);
    expect(wrapper.find(Sub).prop('text')).toEqual(BannerProps.description);
});

it('Renders Close button if isnt permanent and if it is pressed the component disappear', () => {
    const BannerProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        buttons: {
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: 'Secondary Action', onClick: () => alert('Secondary Action')},
        },
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(Close).length).toEqual(1);
    wrapper.find(Close).parent().simulate('click');
    expect(wrapper.text()).toEqual('');
});

it('Dont renders Close button if is permanent', () => {
    const BannerProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        permanent: true,
        buttons: {
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: 'Secondary Action', onClick: () => alert('Secondary Action')},
        },
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(Close).length).toEqual(0);
});

it('Dont render BttnsBanner on props.buttons = undefined', () => {
    const BannerProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        permanent: true,
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(BttnsBanner).length).toEqual(0);
});

it('Renders custom asset', () => {
    const BannerProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        asset: 'Fiber',
        permanent: true,
    };
    //@ts-ignore
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(AssetOrchester).prop('asset')).toEqual(BannerProps.asset);
});

it('Renders TitleBanner if props.title and send text property', () => {
    const BannerProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        permanent: true,
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(TitleBanner).length).toEqual(1);
    expect(wrapper.find(TitleBanner).prop('text')).toEqual(BannerProps.title);
});

it('Dont renders TitleBanner if props.title is undefined', () => {
    const BannerProps = {
        description: 'This is the description. Max 3 lines.',
        permanent: true,
    };
    const wrapper = shallow(<Banner {...BannerProps} />);
    expect(wrapper.find(TitleBanner).length).toEqual(0);
});
