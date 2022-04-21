import { shallow } from "enzyme";
import React from "react";
import BulletOneRowLinkTerm, { BulletOneRowLinkTermProps } from './BulletOneRowLinkTerm';
import Checkbox from "../../../Controls/Checkbox";
import styles from "./BulletOneRowLinkTerm.styles";

const text = 'Test title';
const color = 'red';
const defaultProps: BulletOneRowLinkTermProps = {
    text: text,
    checkboxColor: color,
    textLink: 'link',
    href: '',
}

describe('BulletOneRowLinkTerm tests', () => {

    const wrapper = shallow(<BulletOneRowLinkTerm {...defaultProps} />);

    it('renders every component', () => {
        expect(wrapper.find(Checkbox)).toHaveLength(1);
    });

    it('Checkbox hast a specific color', () => {
        expect(wrapper.find('Checkbox').prop('checkboxColor')).toEqual(color);
    })

    it('open link in the same tab', () => {
        expect(wrapper.find('a').getElement()).toEqual(
            <a className={styles.link} target='_self' href={defaultProps.href}>{' ' + defaultProps.textLink}</a>
        );
    });

    it('open link in new tab', () => {
        const wrapperExternal = shallow(<BulletOneRowLinkTerm {...defaultProps} openExternalLink />);
        expect(wrapperExternal.find('a').getElement()).toEqual(
            <a className={styles.link} target='_blank' href={defaultProps.href}>{' ' + defaultProps.textLink}</a>
        );
    });

})