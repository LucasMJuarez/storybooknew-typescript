import React from 'react';
import { style } from 'typestyle';
import ModalItems, { ItemsProps } from './Items';
import Paragraph16 from '../../Texts/Basics/Left/Paragraph16';
import SlimLineCentered from '../../Dividers/SlimLineCentered';
import Link from '../../Buttons/Link';
import Sms from '../../Assets/36/Sms';

export default {
    title: 'Dialogs/Items',
    component: ModalItems,
};

const styles = {
    slimLineCentered: style({
        padding: '7px 0px',
    }),
};

export const Items = (args: ItemsProps) => <ModalItems {...args} children={args.children} />

Items.args = {
    title: 'ModalItems\'s title!',
    buttonLabel: 'Close',
    onClick: () => {
        alert('Button \"Close\" clicked!');
    },
    onClickClose: () => {
        alert('Buttonn \"X\" clicked!');
    },
    children: <div>
        <Paragraph16 text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} />
        <div className={styles.slimLineCentered}>
            <SlimLineCentered />
        </div>
        <Paragraph16 text={'Eligendi numquam fugit officiis iusto beatae quo vel molestiae.'} />
        <div style={{display: 'flex', paddingLeft: '8px'}}>
            <Link text='Link' onClick={() => alert('Link clicked!')} />
            <Sms />
            <Paragraph16 text={'... With more components, will use the sroll bars.'} />
        </div>
    </div>
};