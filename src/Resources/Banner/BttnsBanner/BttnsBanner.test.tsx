import React from 'react';
import {shallow} from 'enzyme';
import Link from '../../../Buttons/Link/Link';
import BttnsBanner from './BttnsBanner';

it('renders Primary action and Secondary action', () => {
    const wrapper = shallow(
        <BttnsBanner
            primaryAction={{text: 'mockText', onClick: () => {}}}
            secondaryAction={{text: 'mockText', onClick: () => {}}}
        />
    );
    expect(wrapper.find(Link).length).toEqual(2);
});

it('BttnsBanner forward props', () => {
    const primaryActionProps = {
        text: 'PrimaryActionText',
        onClick: (primaryActionOnClick: any) => {},
        loading: true,
        inverse: false,
        disabled: true,
    };
    const secondaryActionProps = {
        text: 'SecondaryActionText',
        onClick: (secondaryActionOnClick: any) => {},
        loading: false,
        inverse: true,
        disabled: false,
    };
    const wrapper = shallow(<BttnsBanner primaryAction={primaryActionProps} secondaryAction={secondaryActionProps} />);
    expect(wrapper.find(Link).first().props()).toEqual(secondaryActionProps);
    expect(wrapper.find(Link).last().props()).toEqual(primaryActionProps);
});
