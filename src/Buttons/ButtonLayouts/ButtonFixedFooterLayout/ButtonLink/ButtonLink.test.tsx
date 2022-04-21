import * as React from 'react';
import {shallow, render} from 'enzyme';
import ButtonLink from './ButtonLink';
import Link from '../../../Link';
import PrimaryButton from '../../../Primary';

const mockBtn = jest.fn();
const mockLnk = jest.fn();
const props_normal = {
    textLink: 'My Link',
    textButton: 'My Button',
    onClickButton: () => mockBtn(),
    onClickLink: () => mockLnk(),
};

it('renders both buttons', () => {
    const wrapper = shallow(<ButtonLink {...props_normal} />);
    expect(wrapper.find(PrimaryButton)).toHaveLength(1);
    expect(wrapper.find(Link)).toHaveLength(1);
});

it('disables both buttons on disabled state', () => {
    const wrapper = shallow(<ButtonLink {...{...props_normal, disabled: true}} />);
    expect(wrapper.find(PrimaryButton).props().disabled).toBeTruthy();
    expect(wrapper.find(Link).props().disabled).toBeTruthy();
});
