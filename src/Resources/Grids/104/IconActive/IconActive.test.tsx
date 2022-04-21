import React from 'react';
import {shallow} from 'enzyme';
import IconActive from '.';
import styles from './IconActive.styles'

const mockFn = jest.fn();

test( 'Should IconActive render OK',() => {
    expect(() => shallow(<IconActive text={'Whatsapp gratis'} asset={'Whatsapp'}/>)).not.toThrow();
});

test('Should IconActive have the follow classNames', () => {
    const wrapper = shallow(<IconActive text={'Whatsapp gratis'} asset={'Whatsapp'}/>);
    expect(wrapper.find('[data-testid="container"]').hasClass(styles.container)).toBeTruthy();
    expect(wrapper.find('[data-testid="asset"]').hasClass(styles.asset)).toBeTruthy();
    expect(wrapper.find('[data-testid="text"]').hasClass(styles.text)).toBeTruthy();
});

test('Should IconActive have classNames pointer when onClick is present', () => {
    const wrapper = shallow(<IconActive text={'Whatsapp gratis'} asset={'Whatsapp'} onClick={mockFn}/>);
    expect(wrapper.find('[data-testid="container"]').hasClass(styles.pointer)).toBeTruthy();
    wrapper.simulate('click');
    expect(mockFn).toBeCalledTimes(1);
});

