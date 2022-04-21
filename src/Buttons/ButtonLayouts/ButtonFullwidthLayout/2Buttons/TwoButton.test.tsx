import * as React from 'react';
import {shallow} from 'enzyme';
import TwoButton from '.';
import styles from './TwoButton.styles';
import Primary from '../../../Primary';
import Secondary from '../../../Secondary';
let {container, button, button_inverse} = styles;
const mockPri = jest.fn();
const mockSec = jest.fn();

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
        expect(wrapper.hasClass(container)).toBeTruthy();
    });

    it('triggers each function ok', () => {
        wrapper.find(Primary).simulate('click');
        expect(mockPri).toHaveBeenCalledTimes(1);
        wrapper.find(Secondary).simulate('click');
        expect(mockSec).toHaveBeenCalledTimes(1);
    });
});
