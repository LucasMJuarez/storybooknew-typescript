import React from 'react';
import { shallow } from 'enzyme';
import Paragraph14LinkTerm from './Paragraph14LinkTerm';
import styles from './Paragraph14LinkTerm.styles';

const defaultProps = {
    text: 'Yeaah',
    type: 'text_secondary',
    href: 'https://www.google.com/',
    textLink: 'link',
}

const wrapperExternalLinkTrue = shallow(<Paragraph14LinkTerm {...defaultProps} openExternalLink />);
const wrapperExternalLinkFalse = shallow(<Paragraph14LinkTerm {...defaultProps} />);

it('is truthy', () => {
    expect(Paragraph14LinkTerm).toBeTruthy();
});

it('open link in new tab', () => {
    expect(wrapperExternalLinkTrue.find('a')).toHaveLength(1);
    expect(wrapperExternalLinkTrue.children().at(1).text()).toEqual(' ' + defaultProps.textLink);
    expect(wrapperExternalLinkTrue.children().at(1).getElement()).toEqual(
        <a className={styles.link} target='_blank' href={defaultProps.href}>{' ' + defaultProps.textLink}</a>
    );
});

it('open link in the same tab', () => {
    expect(wrapperExternalLinkFalse.find('a')).toHaveLength(1);
    expect(wrapperExternalLinkFalse.children().at(1).text()).toEqual(' ' + defaultProps.textLink);
    expect(wrapperExternalLinkFalse.children().at(1).getElement()).toEqual(
        <a className={styles.link} target='_self' href={defaultProps.href}>{' ' + defaultProps.textLink}</a>
    );
});
