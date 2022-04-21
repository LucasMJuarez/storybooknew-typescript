import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import InfoButton, { InfoButtonProps } from './InfoButton';

let mockButton = jest.fn();

const textCaption: string = 'My Caption';
const textTitle: string = 'My Title';
const textSub: string = 'My Sub';
const buttonLabel: string = 'Button Label';
const defaultProps: InfoButtonProps = {
    textCaption: textCaption,
    textTitle: textTitle,
    textSub: textSub,
    buttonLabel: buttonLabel,
    onClick: mockButton,
    tabIndex: 1,
};

const wrapper: ShallowWrapper = shallow(<InfoButton {...defaultProps} />);

describe('test for InforButton', () => {

    beforeEach(() => {
        mockButton.mockClear();
    })

    it('is truthy', () => {
        expect(InfoButton).toBeTruthy();
    });

    it('renders every component', () => {
        expect(wrapper.find('Caption')).toHaveLength(1);
        expect(wrapper.find('Title')).toHaveLength(1);
        expect(wrapper.find('Sub')).toHaveLength(1);
        expect(wrapper.find('Primary')).toHaveLength(1);
    });

    it('Caption hast props text', () => {
        expect(wrapper.find('Caption').prop('text')).toEqual(textCaption);
    })
    it('Title hast props text', () => {
        expect(wrapper.find('Title').prop('text')).toEqual(textTitle);
    })
    it('Sub hast props text', () => {
        expect(wrapper.find('Sub').prop('text')).toEqual(textSub);
    })
    it('Primary hast props text', () => {
        expect(wrapper.find('Primary').prop('text')).toEqual(buttonLabel);
    })

    it('clicks on button works', () => {
        expect(mockButton).toHaveBeenCalledTimes(0);
        expect(wrapper.find('Primary').simulate('click'));
        expect(mockButton).toHaveBeenCalledTimes(1);
    });
});
