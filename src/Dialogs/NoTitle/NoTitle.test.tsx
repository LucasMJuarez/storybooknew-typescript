/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import NoTitleFeedback from '.';

import Primary from '../../Buttons/Primary/Small/Small';
import Secondary from '../../Buttons/Secondary/Small/Small';
import Paragraph14 from '../../Texts/Basics/Left/Paragraph14';
import TwoButtonSmall from '../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/2Buttons/Small/Small';
import FocusTrap from 'focus-trap-react';

let mockPri = jest.fn();
let mockSec = jest.fn();
const defaultProps = {
    description: 'My Description',
    labelPrimary: 'Primary Button',
    labelSecondary: 'Secondary Button',
    onClickPrimary: mockPri,
    onClickSecondary: mockSec,
};

it('is truthy', () => {
    expect(NoTitleFeedback).toBeTruthy();
});
describe('button integration works ok', () => {
    const wrapper = shallow(
        <TwoButtonSmall
            textPrimary='Primary'
            textSecondary='Secondary'
            onClickPrimary={mockPri}
            onClickSecondary={mockSec}
        />
    );
    it('renders children ok', () => {
        expect(wrapper.find(Primary).length).toEqual(1);
        expect(wrapper.find(Primary).prop('text')).toEqual('Primary');
        expect(wrapper.find(Secondary).length).toEqual(1);
        expect(wrapper.find(Secondary).prop('text')).toEqual('Secondary');
    });
});

it('renders every component', () => {
    const wrapper = shallow(<NoTitleFeedback {...defaultProps} />);
    expect(wrapper.find(FocusTrap).length).toEqual(1);
    expect(wrapper.find(Paragraph14)).toHaveLength(1);
    expect(wrapper.find(TwoButtonSmall)).toHaveLength(1);
});

it('changes props for desktop screen size', () => {
    global.innerWidth = 1000;
    const wrapperDesktop = mount(<NoTitleFeedback {...defaultProps} />);
    expect(wrapperDesktop.find(Primary).prop('text')).toEqual('Primary Button');
    expect(wrapperDesktop.find(Secondary).prop('text')).toEqual('Secondary Button');
    expect(wrapperDesktop.find(Secondary).length).toEqual(1);
    expect(wrapperDesktop.find(Primary).length).toEqual(1);
});

it('changes props for desktop screen size', () => {
    global.innerWidth = 400;
    const wrapperDesktop = mount(<NoTitleFeedback {...defaultProps} />);
    expect(wrapperDesktop.find(Primary).prop('text')).toEqual('Primary Button');
    expect(wrapperDesktop.find(Secondary).prop('text')).toEqual('Secondary Button');
    expect(wrapperDesktop.find(Secondary).length).toEqual(1);
    expect(wrapperDesktop.find(Primary).length).toEqual(1);
});
