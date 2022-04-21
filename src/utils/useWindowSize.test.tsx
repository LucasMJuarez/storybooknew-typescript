/**
 * @jest-environment jsdom
 */
import {shallow} from 'enzyme';
import * as React from 'react';
import {useWindowSize} from '../../src/utils/useWindowSize';

it('returns current window size', () => {
    const MyMockComponent = () => {
        const size = useWindowSize();
        return <div>{`${size && size.height}, ${size && size.width} `}</div>;
    };
    const wrapper = shallow(<MyMockComponent />);
    const height = global.innerHeight;
    const width = global.innerWidth;
    expect(wrapper.text()).toContain(`${height}, ${width}`);
});

it('returns current window size on resize', () => {
    global.innerHeight = 360;
    global.innerWidth = 360;
    const MyMockComponent = () => {
        const size = useWindowSize();
        return <div>{`${size && size.height}, ${size && size.width} `}</div>;
    };
    const wrapper = shallow(<MyMockComponent />);
    expect(wrapper.text()).toContain('360, 360');
});
