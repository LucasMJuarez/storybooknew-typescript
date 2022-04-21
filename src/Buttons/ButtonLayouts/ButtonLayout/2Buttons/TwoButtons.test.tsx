import React from 'react';
import {shallow} from 'enzyme';
import TwoButtons from './TwoButtons';
import Primary from '../../../Primary';
import Secondary from '../../../Secondary';

it('renders Primary button and Secondary button', () => {
    const wrapper = shallow(
        <TwoButtons
            primaryButton={{text: 'mockText', onClick: () => {}}}
            secondaryButton={{text: 'mockText', onClick: () => {}}}
        />
    );
    expect(wrapper.find(Primary).length).toEqual(1);
    expect(wrapper.find(Secondary).length).toEqual(1);
});

it('TwoButtons forward props', () => {
    const primaryButtonProps = {
        text: 'PrimaryButtonText',
        onClick: (primaryButtonOnClick: any) => {},
        loading: true,
        inverse: false,
        disabled: true,
    };
    const secondaryButtonProps = {
        text: 'SecondaryButtonText',
        onClick: (secondaryButtonOnClick: any) => {},
        loading: false,
        inverse: true,
        disabled: false,
    };
    const wrapper = shallow(<TwoButtons primaryButton={primaryButtonProps} secondaryButton={secondaryButtonProps} />);
    expect(wrapper.find(Primary).props()).toEqual(primaryButtonProps);
    expect(wrapper.find(Secondary).props()).toEqual(secondaryButtonProps);
});
