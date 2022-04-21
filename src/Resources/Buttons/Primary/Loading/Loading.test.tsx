import React from 'react';
import {shallow} from 'enzyme';
import Loading from './Loading';
import Spinner24 from '../../../Spinners/24';
import styles from './Loading.styles';

it('is truthy', () => {
    expect(Loading).toBeTruthy();
});

it('Loading blue Spinner', () => {
    const wrapper = shallow(<Loading inverse={false} blue />);
    expect(wrapper.prop('className')).toEqual(styles.container);
    expect(wrapper.find(Spinner24)).toHaveLength(1);
    expect(wrapper.find(Spinner24).prop('blue')).toBeTruthy;
    expect(wrapper.find(Spinner24).prop('inverse')).toBeFalsy;
});

it('Loading inverse Spinner', () => {
    const wrapper = shallow(<Loading inverse blue={false} />);
    expect(wrapper.prop('className')).toEqual(styles.container);
    expect(wrapper.find(Spinner24)).toHaveLength(1);
    expect(wrapper.find(Spinner24).prop('blue')).toBeFalsy;
    expect(wrapper.find(Spinner24).prop('inverse')).toBeTruthy;
});
