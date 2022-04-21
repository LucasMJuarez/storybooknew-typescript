import React from 'react';
import { shallow } from 'enzyme';
import Password from './Password';
import styles from './Password.styles';
import Caption from '../../TextCatalog/CAPTION';
import Explore_Active from '../../Assets/24/Explore_Active';
import Explore from '../../Assets/24/Explore';

it('is truthy', () => {
    expect(Password).toBeTruthy();
});

it('children is type form', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' />);
    expect(wrapper.children().type()).toEqual('form');
});

it('input name is equal to title prop', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' />);
    expect(wrapper.children().children().first().type()).toEqual('input');
    expect(wrapper.children().children().first().prop('name')).toEqual('Yeaah');
});

it('input onChange executes onChange prop', () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<Password onChange={() => mockOnChange()} placeholder='Placeholder' title='Yeaah' />);
    wrapper
        .children()
        .children()
        .first()
        .simulate('change', { target: { value: 'a' } });
    expect(mockOnChange.mock.calls.length).toEqual(1);
    wrapper
        .children()
        .children()
        .first()
        .simulate('change', { target: { value: 'e' } });
    wrapper
        .children()
        .children()
        .first()
        .simulate('change', { target: { value: 'i' } });
    expect(mockOnChange.mock.calls.length).toEqual(3);
});

it('input onKeyDown executes onKeyDown prop', () => {
    const mockOnKeyDown = jest.fn();
    const wrapper = shallow(<Password onKeyDown={() => mockOnKeyDown()} placeholder='Placeholder' title='Yeaah' />);
    wrapper.children().children().first().simulate('keydown', { keyCode: 13, getModifierState: () => { } });
    expect(mockOnKeyDown.mock.calls.length).toEqual(1);
    wrapper.children().children().first().simulate('keydown', { keyCode: 13, getModifierState: () => { } });
    wrapper.children().children().first().simulate('keydown', { keyCode: 13, getModifierState: () => { } });
    expect(mockOnKeyDown.mock.calls.length).toEqual(3);
});

it('input placeholder is equal to "" default', () => {
    const wrapper = shallow(<Password placeholder='My Super Placeholder' title='Yeaah' />);
    expect(wrapper.children().children().first().prop('placeholder')).toEqual('');
});

it('input placeholder is equal to placeholder prop on focus', () => {
    const wrapper = shallow(<Password placeholder='My Super Placeholder' title='Yeaah' />);
    wrapper.children().simulate('focus');
    expect(wrapper.children().children().first().prop('placeholder')).toEqual('My Super Placeholder');
});

it('input placeholder is equal to placeholder prop on blur and input value', () => {
    const wrapper = shallow(<Password placeholder='My Super Placeholder' title='Yeaah' />);
    wrapper.children().simulate('focus');
    expect(wrapper.children().children().first().prop('placeholder')).toEqual('My Super Placeholder');
    wrapper
        .children()
        .children()
        .first()
        .simulate('change', { target: { value: 'i' } });
    wrapper.children().simulate('blur');
    expect(wrapper.children().children().first().prop('placeholder')).toEqual('My Super Placeholder');
});

it('label is equal to title prop', () => {
    const wrapper = shallow(<Password placeholder='My Super Placeholder' title='Yeaah' />);
    expect(wrapper.children().children().last().prop('children')).toEqual('Yeaah');
});

it('label is red on error prop', () => {
    const wrapper = shallow(<Password error={true} placeholder='My Super Placeholder' title='Yeaah' />);
    expect(wrapper.children().children().last().prop('className')).toContain(styles.error);
});

it('render help text on help prop', () => {
    const wrapper = shallow(<Password help='My Super Help' placeholder='My Super Placeholder' title='Yeaah' />);
    expect(wrapper.children().length).toEqual(2);
    expect(wrapper.children().last().children().type()).toEqual(Caption);
    expect(wrapper.children().last().children().prop('text')).toEqual('My Super Help');
    expect(wrapper.children().last().children().prop('type')).toEqual('text_secondary');
});

it('render red help text on help prop and error prop', () => {
    const wrapper = shallow(<Password error help='My Super Help' placeholder='My Super Placeholder' title='Yeaah' />);
    expect(wrapper.children().last().children().prop('type')).toEqual('text_input_label_error');
});

it('add activeInput and activeLabel to input an label on focus, and remove them on blur', () => {
    const wrapper = shallow(<Password placeholder='My Super Placeholder' title='Yeaah' />);
    wrapper.children().simulate('focus');
    expect(wrapper.children().children().first().prop('className')).toContain(styles.activeInput);
    expect(wrapper.children().children().last().prop('className')).toContain(styles.activeLabel);
    wrapper.children().simulate('blur');
    expect(wrapper.children().children().first().prop('className')).not.toContain(styles.activeInput);
    expect(wrapper.children().children().last().prop('className')).not.toContain(styles.activeLabel);
});

it('input onKeyDown passes event arg', () => {
    const mockOnKeyDown = jest.fn();
    const wrapper = shallow(<Password onKeyDown={(e: any) => mockOnKeyDown(e)} placeholder='Placeholder' title='Yeaah' />);
    wrapper.children().children().first().simulate('keydown', { keyCode: 13, getModifierState: () => { } });
    expect(mockOnKeyDown.mock.calls.length).toEqual(1);
    expect(mockOnKeyDown.mock.calls[0][0].keyCode).toEqual(13);
});

it('input onKeyDown dont throw on prop onKeyDown = null', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' />);
    expect(() => wrapper.children().children().first().simulate('keydown', { keyCode: 13, getModifierState: () => { } })).not.toThrow();
});

it('value is My Value', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' value='My Value' />);
    expect(wrapper.children().children().first().prop('value')).toEqual('My Value');
});

it('value is empty', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' />);
    expect(wrapper.children().children().first().prop('value')).toEqual('');
});

it('pattern is passed to input', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' pattern='[0-9]*' />);
    expect(wrapper.children().children().first().prop('pattern')).toEqual('[0-9]*');
});

it('maxLength is passed to input', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' maxLength={16} />);
    expect(wrapper.children().children().first().prop('maxLength')).toEqual(16);
});

it('value fire useEffect', () => {
    const mock = jest.spyOn(React, 'useEffect');
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' value='My Value' />);
    mock.mock.calls[0][0]();
    expect(wrapper.children().children().first().prop('className')).toContain(styles.activeInput);
    expect(wrapper.children().children().last().prop('className')).toContain(styles.inactiveLabel);
});

it('see explore do not display password', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' />);
    expect(wrapper.find(Explore_Active)).toHaveLength(0);
    expect(wrapper.find(Explore)).toHaveLength(1);
});

it('see explore display password', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' />);
    wrapper.find(Explore).parent().simulate('click');
    expect(wrapper.find(Explore_Active)).toHaveLength(1);
    expect(wrapper.find(Explore)).toHaveLength(0);
});

it('useCapsLockWarning then display warning {Bloq Mayús activado.} if is pressed CapsLock key with prop type {text_secondary}', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' capsLockWarning />);
    wrapper.find('input').simulate('keyDown', { key: 'CapsLock', getModifierState: (key: string) => key === 'CapsLock' });
    expect(wrapper.find(Caption)).toHaveLength(1);
    expect(wrapper.find(Caption).prop('text')).toBe('Bloq Mayús activado.');
    expect(wrapper.find(Caption).prop('type')).toBe('text_secondary');
});

it('Not useCapsLockWarning then display warning {Bloq Mayús activado.} if is pressed CapsLock key with prop type {text_secondary}', () => {
    const wrapper = shallow(<Password placeholder='Placeholder' title='Yeaah' />);
    wrapper.find('input').simulate('keyDown', { key: 'CapsLock', getModifierState: (key: string) => key === 'CapsLock' });
    expect(wrapper.find(Caption)).toHaveLength(0);
});