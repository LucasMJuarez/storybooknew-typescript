import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ModalItems, { ItemsProps } from './Items';

import Title20 from '../../Texts/Basics/Left/Titles/Title20';
import Close from '../../Assets/24/Close';
import Small from '../../Buttons/Primary/Small';
import Primary from '../../Buttons/Primary';

import Paragraph16 from '../../Texts/Basics/Left/Paragraph16'
import SlimLineCentered from '../../Dividers/SlimLineCentered'

let mockButton = jest.fn();
let mockCloseButton = jest.fn();

const defaultProps: ItemsProps = {
    title: 'My title',
    buttonLabel: 'Primary Button',
    tabIndex: 1,
    onClick: mockButton,
    onClickClose: mockCloseButton,
};

const wrapper: ShallowWrapper = shallow(
    <ModalItems {...defaultProps}>
        <Paragraph16 text={'Some text.'} />
        <SlimLineCentered />
        <Paragraph16 text={'Other text. '} />
    </ModalItems>
);

describe('test for Items', () => {

    beforeEach(() => {
        mockButton.mockClear();
        mockCloseButton.mockClear();
    });

    it('is truthy', () => {
        expect(ModalItems).toBeTruthy();
    });

    it('renders every component', () => {
        expect(wrapper.find(Title20)).toHaveLength(1);
        expect(wrapper.find(Close)).toHaveLength(1);
        expect(wrapper.find(Small)).toHaveLength(1);
        expect(wrapper.find(Primary)).toHaveLength(1);
    });
    
    it('renders children', () => {
        expect(wrapper.find(Paragraph16)).toHaveLength(2);
        expect(wrapper.find(SlimLineCentered)).toHaveLength(1);
    });
    
    it('button hast props text', () => {
        expect(wrapper.find(Small).prop('text')).toEqual('Primary Button');
        expect(wrapper.find(Primary).prop('text')).toEqual('Primary Button');
    });

    it('clicks on buttons in desktop view mode', () => {
        global.innerWidth = 1000;
        const wrapperDesktop: ShallowWrapper = shallow(
            <ModalItems {...defaultProps}>
                <Paragraph16 text={'Some text.'} />
                <SlimLineCentered />
                <Paragraph16 text={'Other text. '} />
            </ModalItems>
        );
        expect(mockButton).toHaveBeenCalledTimes(0);
        expect(wrapperDesktop.find(Primary).simulate('click'));
        expect(mockButton).toHaveBeenCalledTimes(1);
        expect(mockCloseButton).toHaveBeenCalledTimes(0);
        expect(wrapperDesktop.find('[data-testid="wrapper-close"]').simulate('click'));
        expect(mockCloseButton).toHaveBeenCalledTimes(1);
    });

    it('clicks on buttons in mobile view mode', () => {
        global.innerWidth = 400;
        const wrapperMovile = shallow(
            <ModalItems {...defaultProps}>
                <Paragraph16 text={'Some text.'} />
                <SlimLineCentered />
                <Paragraph16 text={'Other text. '} />
            </ModalItems>
        );
        expect(mockButton).toHaveBeenCalledTimes(0);
        expect(wrapperMovile.find(Small).simulate('click'));
        expect(mockButton).toHaveBeenCalledTimes(1);
    });

});