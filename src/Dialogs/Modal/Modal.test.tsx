/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import ModalFeedback from '.';
import Primary from '../../Buttons/Primary';
import Secondary from '../../Buttons/Secondary';
import Close from '../../Assets/24/Close';
import FocusTrap from 'focus-trap-react';
import ModalTitle from './ModalTitle';
import ModalParagraph from './ModalParagraph';

const mockPri = jest.fn();
const mockSec = jest.fn();
const mockClose = jest.fn();

const defaultProps = {
    title: 'My title',
    description: 'My Description',
    labelPrimary: 'Primary Button',
    labelSecondary: 'Secondary Button',
    disabledPrimary: false,
    disabledSecondary: true,
    onClickPrimary: mockPri,
    onClickSecondary: mockSec,
    onClickClose: mockClose,
};

const oneButtonProps = {
    title: 'My title',
    description: 'My Description',
    labelPrimary: 'Primary Button',
    disabledPrimary: false,
    onClickPrimary: mockPri,
    onClickClose: mockClose,
}

const noTitleProps = {
    description: 'My Description',
    labelPrimary: 'Primary Button',
    labelSecondary: 'Secondary Button',
    disabledPrimary: false,
    disabledSecondary: true,
    onClickPrimary: mockPri,
    onClickSecondary: mockSec,
    onClickClose: mockClose,
}

const noDescriptionProps = {
    title: 'My title',
    labelPrimary: 'Primary Button',
    labelSecondary: 'Secondary Button',
    disabledPrimary: false,
    disabledSecondary: true,
    onClickPrimary: mockPri,
    onClickSecondary: mockSec,
    onClickClose: mockClose,
}

it('is truthy', () => {
    expect(ModalFeedback).toBeTruthy();
});
it('renders every component', () => {
    const wrapper = shallow(<ModalFeedback {...defaultProps} />);
    expect(wrapper.find(FocusTrap)).toHaveLength(1);
    expect(wrapper.find(ModalTitle)).toHaveLength(1);
    expect(wrapper.find(Close)).toHaveLength(1);
    expect(wrapper.find(ModalParagraph)).toHaveLength(1);
    expect(wrapper.find(Primary)).toHaveLength(1);
    expect(wrapper.find(Secondary)).toHaveLength(1);
});

it('renders only primary button component', () => {
    const wrapper = shallow(<ModalFeedback {...oneButtonProps}/>);
    expect(wrapper.find(Primary)).toHaveLength(1);
    expect(wrapper.find(Secondary)).toHaveLength(0);
});

it('renders modal without title', () => {
    const wrapper = shallow(<ModalFeedback {...noTitleProps}/>);
    expect(wrapper.find(ModalTitle)).toHaveLength(0);
});

it('renders modal without description', () => {
    const wrapper = shallow(<ModalFeedback {...noDescriptionProps}/>);
    expect(wrapper.find(ModalParagraph)).toHaveLength(0);
});

it('modal components primary and secondary contains default props', () => {
    const wrapper = shallow(<ModalFeedback {...defaultProps} />);
    expect(wrapper.find(Primary).prop('text')).toEqual(defaultProps.labelPrimary);
    expect(wrapper.find(Primary).prop('disabled')).toEqual(defaultProps.disabledPrimary);
    expect(wrapper.find(Primary).prop('onClick')).toEqual(defaultProps.onClickPrimary);
    expect(wrapper.find(Secondary).prop('text')).toEqual(defaultProps.labelSecondary);
    expect(wrapper.find(Secondary).prop('disabled')).toEqual(defaultProps.disabledSecondary);
    expect(wrapper.find(Secondary).prop('onClick')).toEqual(defaultProps.onClickSecondary);
});

it('changes props for desktop screen size', () => {
    global.innerWidth = 1000;
    const wrapperDesktop = mount(<ModalFeedback {...defaultProps} />);
    expect(wrapperDesktop.find(Primary).prop('text')).toEqual('Primary Button');
    expect(wrapperDesktop.find(Secondary).prop('text')).toEqual('Secondary Button');
    expect(wrapperDesktop.find(Secondary).length).toEqual(1);
    expect(wrapperDesktop.find(Primary).length).toEqual(1);
    expect(wrapperDesktop.find(ModalParagraph).length).toEqual(1);
    expect(wrapperDesktop.find(Close).simulate('click'));
    expect(mockClose.mock.calls.length).toEqual(1);
});

it('changes props for desktop screen size', () => {
    jest.resetAllMocks();
    global.innerWidth = 400;
    const wrapperDesktop = mount(<ModalFeedback {...defaultProps} />);
    expect(wrapperDesktop.find(Primary).prop('text')).toEqual('Primary Button');
    expect(wrapperDesktop.find(Secondary).prop('text')).toEqual('Secondary Button');
    expect(wrapperDesktop.find(ModalTitle).prop('text')).toEqual('My title');
    expect(wrapperDesktop.find(Secondary).length).toEqual(1);
    expect(wrapperDesktop.find(Primary).length).toEqual(1);
    expect(wrapperDesktop.find(ModalParagraph).length).toEqual(1);
    expect(wrapperDesktop.find(Close).simulate('click'));
    expect(mockClose.mock.calls.length).toEqual(1);
});

it('Passes loading props to buttons', () => {
    const wrapperUndefined = mount(<ModalFeedback {...defaultProps} />);
    expect(wrapperUndefined.find(Primary).prop('loading')).toEqual(undefined);
    expect(wrapperUndefined.find(Secondary).prop('loading')).toEqual(undefined);
    const wrapperFalse = mount(<ModalFeedback loadingPrimary={false} loadingSecondary={false} {...defaultProps} />);
    expect(wrapperFalse.find(Primary).prop('loading')).toEqual(false);
    expect(wrapperFalse.find(Secondary).prop('loading')).toEqual(false);
    const wrapperLoading = mount(<ModalFeedback loadingPrimary={true} loadingSecondary={true} {...defaultProps} />);
    expect(wrapperLoading.find(Primary).prop('loading')).toEqual(true);
    expect(wrapperLoading.find(Secondary).prop('loading')).toEqual(true);
});

it(' onClick buttons function called correctly', () => {
    jest.resetAllMocks();
    const wrapper = shallow(<ModalFeedback {...defaultProps} />);
    
    wrapper.find('button').simulate('click');
    expect(defaultProps.onClickClose).toBeCalledTimes(1);
    wrapper.find(Primary).simulate('click');
    expect(defaultProps.onClickPrimary).toBeCalledTimes(1);
    wrapper.find(Secondary).simulate('click');
    expect(defaultProps.onClickSecondary).toBeCalledTimes(1);
});
