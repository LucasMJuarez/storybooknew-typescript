/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import {shallow, mount} from 'enzyme';
import TitleFeedback from '.';

import Title20 from '../../Texts/Basics/Left/Titles/Title20';
import Primary from '../../Buttons/Primary';
import Secondary from '../../Buttons/Secondary';
import Paragraph14 from '../../Texts/Basics/Left/Paragraph14';
import TwoButton from '../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/2Buttons';

let mockPri = jest.fn();
let mockSec = jest.fn();
let mockClose = jest.fn();
const defaultProps = {
    title: 'My title',
    description: 'My Description',
    labelPrimary: 'Primary Button',
    labelSecondary: 'Secondary Button',
    onClickPrimary: mockPri,
    onClickSecondary: mockSec,
};

it('is truthy', () => {
    expect(TitleFeedback).toBeTruthy();
});
describe('button integration works ok', () => {
    const wrapper = shallow(
        <TwoButton
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
    const wrapper = shallow(<TitleFeedback {...defaultProps} />);
    expect(wrapper.find(Title20)).toHaveLength(1);
    expect(wrapper.find(Paragraph14)).toHaveLength(1);
    expect(wrapper.find(TwoButton)).toHaveLength(1);
});

it('changes props for desktop screen size', () => {
    global.innerWidth = 1000;
    const wrapperDesktop = mount(<TitleFeedback {...defaultProps} />);
    expect(wrapperDesktop.find(Primary).prop('text')).toEqual('Primary Button');
    expect(wrapperDesktop.find(Secondary).prop('text')).toEqual('Secondary Button');
    expect(wrapperDesktop.find(Secondary).length).toEqual(1);
    expect(wrapperDesktop.find(Primary).length).toEqual(1);
});

it('changes props for desktop screen size', () => {
    global.innerWidth = 400;
    const wrapperDesktop = mount(<TitleFeedback {...defaultProps} />);
    expect(wrapperDesktop.find(Primary).prop('text')).toEqual('Primary Button');
    expect(wrapperDesktop.find(Secondary).prop('text')).toEqual('Secondary Button');
    expect(wrapperDesktop.find(Title20).prop('text')).toEqual('My title');
    expect(wrapperDesktop.find(Secondary).length).toEqual(1);
    expect(wrapperDesktop.find(Primary).length).toEqual(1);
});

it('Passes loading props to buttons', () => {
    const wrapperUndefined = mount(<TitleFeedback {...defaultProps} />);
    expect(wrapperUndefined.find(Primary).prop('loading')).toEqual(undefined);
    expect(wrapperUndefined.find(Secondary).prop('loading')).toEqual(undefined);
    const wrapperFalse = mount(<TitleFeedback loadingPrimary={false} loadingSecondary={false} {...defaultProps} />);
    expect(wrapperFalse.find(Primary).prop('loading')).toEqual(false);
    expect(wrapperFalse.find(Secondary).prop('loading')).toEqual(false);
    const wrapperLoading = mount(<TitleFeedback loadingPrimary={true} loadingSecondary={true} {...defaultProps} />);
    expect(wrapperLoading.find(Primary).prop('loading')).toEqual(true);
    expect(wrapperLoading.find(Secondary).prop('loading')).toEqual(true);
});
