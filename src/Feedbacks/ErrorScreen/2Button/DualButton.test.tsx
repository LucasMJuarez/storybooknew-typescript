/**
 * @jest-environment jsdom
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import ErrorFeedback from '.';
import NotificationOkPositive from '../../../Assets/64/NotificationOkPositive';
import Title from '../../../TextCatalog/HEADLINE';
import Description from '../../../TextCatalog/TITLE';
import TwoButton from '../../../Buttons/ButtonLayouts/ButtonFullwidthLayout/2Buttons';
import NotificationKo from '../../../Assets/64/NotificationKo';

let mockPri = jest.fn();
let mockSec = jest.fn();
const defaultProps = {
    title: 'My title',
    description: 'My Description',
    labelPrimary: 'Primary Button',
    labelSecondary: 'Secondary Button',
    onClickPrimary: mockPri,
    onClickSecondary: mockSec,
};

it('renders every component', () => {
    const wrapper = shallow(<ErrorFeedback {...defaultProps} />);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(TwoButton)).toHaveLength(1);
});
it('renders correct props for mobile screen size', () => {
    global.innerWidth = 400;
    const wrapperMobile = mount(<ErrorFeedback {...defaultProps} />);
    expect(wrapperMobile.find(Title).prop('type')).toEqual('text_primary');
    expect(wrapperMobile.find(Description).prop('type')).toEqual('text_secondary');
    expect(wrapperMobile.find(NotificationKo)).toBeTruthy();
});
