import * as React from 'react';
import {shallow} from 'enzyme';
import Menu from '.';
import styles from './Menu.styles';

const {no_disabled, disabled} = styles;
const mockFn = jest.fn();
it('normal prop renders no_disabled styles ', () => {
    const wrapper = shallow(<Menu disabled={false} onClick={mockFn} text='Item' />);
    expect(wrapper.childAt(0).hasClass(no_disabled));
});

it('disabled prop renders disabled styles', () => {
    const wrapper = shallow(<Menu disabled={true} onClick={mockFn} text='Item' />);
    expect(wrapper.childAt(0).hasClass(disabled));
});

it('renders text ok', () => {
    const text = 'Item Prueba';
    const wrapper = shallow(<Menu disabled={false} onClick={mockFn} text={text} />);

    expect(wrapper.props().children.props.text).toContain('Item Prueba');
});

it('triggers passed function onClick', () => {
    const wrapper = shallow(<Menu disabled={false} onClick={mockFn} text='Item' />);
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
});
