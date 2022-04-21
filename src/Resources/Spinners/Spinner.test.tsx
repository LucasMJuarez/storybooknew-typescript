import * as React from 'react';
import Spinner from './Spinner';
import Spinner72 from './72/Spinner72';
import Spinner24 from './24/Spinner24';
import {shallow} from 'enzyme';
import styles from './Spinner.styles';

it('size is rendered ok', () => {
    const wrapper = shallow(<Spinner inverse size={24} />);
    expect(wrapper.props().height).toContain('24');
    expect(wrapper.props().width).toContain('24');
});
it('color is rendered ok', () => {
    const wrapper = shallow(<Spinner inverse size={24} />);
    const circle = wrapper.props().children[1];
    expect(circle.props.stroke).toEqual(styles.inverse);
});
it('Spinner 72-color is rendered ok', () => {
    const wrapper = shallow(<Spinner size={72} />);
    expect(wrapper.props().height).toContain('72');
    expect(wrapper.props().width).toContain('72');
    const circle = wrapper.props().children[1];
    expect(circle.props.stroke).toEqual(styles.color);
});
it('Spinner72 and Spinner24 is rednered ok', () => {
    expect(() => shallow(<Spinner72 />)).not.toThrow();
    expect(() => shallow(<Spinner72 inverse />)).not.toThrow();
    expect(() => shallow(<Spinner24 />)).not.toThrow();
    expect(() => shallow(<Spinner24 inverse />)).not.toThrow();
});

it('Spinner color is rendered blue', () => {
    const wrapper = shallow(<Spinner size={24} blue />);
    expect(wrapper.props().height).toContain('24');
    expect(wrapper.props().width).toContain('24');
    const circle = wrapper.props().children[1];
    expect(circle.props.stroke).toEqual(styles.colorBlue);
});
