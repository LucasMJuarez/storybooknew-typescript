import React from 'react';
import {shallow} from 'enzyme';
import RightInactive from './RightInactive';

it('RightInactive is an svg', () => {
    const wrapper = shallow(<RightInactive />);
    expect(wrapper.type()).toEqual('svg');
});

it('RightInactive is 24x24', () => {
    const wrapper = shallow(<RightInactive />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
