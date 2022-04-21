import React from 'react';
import { shallow } from 'enzyme';
import BulletInactive from './BulletInactive';

it('is an svg', () => {
    const wrapper = shallow(<BulletInactive />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<BulletInactive />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('25');
});