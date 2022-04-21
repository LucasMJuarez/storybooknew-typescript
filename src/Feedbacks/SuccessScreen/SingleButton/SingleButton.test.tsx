/**
 * @jest-environment jsdom
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import SuccessFeedback from '.';
import NotificationOk from '../../../Assets/64/NotificationOk';
import NotificationOkPositive from '../../../Assets/64/NotificationOkPositive';
import Title from '../../../TextCatalog/HEADLINE';
import Description from '../../../TextCatalog/TITLE';
import Button from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';

let mockFn = jest.fn();
const defaultProps = {
    title: 'My title',
    description: 'My Description',
    buttonLabel: 'My button',
    onClick: mockFn,
};

it('renders every component', () => {
    const wrapper = shallow(<SuccessFeedback {...defaultProps} />);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
});
it('changes props for mobile screen size', () => {
    global.innerWidth = 400;
    const wrapperMobile = mount(<SuccessFeedback {...defaultProps} />);
    expect(wrapperMobile.find(Title).prop('type')).toEqual('text_primary_special_1');
    expect(wrapperMobile.find(Description).prop('type')).toEqual('text_primary_special_1');
    expect(wrapperMobile.find(Button).prop('inverse')).toBeTruthy();
    expect(wrapperMobile.find(NotificationOk)).toBeTruthy();
});
it('changes props for desktop screen size', () => {
    global.innerWidth = 1000;
    const wrapperDesktop = mount(<SuccessFeedback {...defaultProps} />);
    expect(wrapperDesktop.find(Title).prop('type')).toEqual('text_primary');
    expect(wrapperDesktop.find(Description).prop('type')).toEqual('text_secondary');
    expect(wrapperDesktop.find(Button).prop('inverse')).toBeFalsy();
    expect(wrapperDesktop.find(NotificationOkPositive)).toBeTruthy();
});
