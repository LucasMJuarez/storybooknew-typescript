import React from 'react';
import { shallow } from 'enzyme';
import ModuleInformativeIconAndText from './ModuleInformativeIconAndText';
import Title from '../../TextCatalog/TITLE';
import Sub from '../../TextCatalog/SUB';
import Label from '../../Labels/Background/Label';
import Message from '../../Assets/64/Message';

const defaultProps = {
    title: 'Estamos trabajando en tu caso de manera remota',
    description: 'Enviaremos a una persona del área técnica si es necesario resolverlo en tu domicilio.',
};

it('renders every component', () => {
    const wrapper = shallow(<ModuleInformativeIconAndText {...defaultProps} />);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Sub)).toHaveLength(1);
    expect(wrapper.find(Message)).toHaveLength(1);
});
it('Have defaults', () => {
    const wrapper = shallow(<ModuleInformativeIconAndText />);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Sub)).toHaveLength(1);
    expect(wrapper.find(Message)).toHaveLength(1);
});
