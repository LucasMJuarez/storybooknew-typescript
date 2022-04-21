import React from 'react';
import IconActive from '.';
import AmountContainer from '../../../../Grids/Selectors/104/AmountContainer';
import {IconActiveProps} from './IconActive';

export default {
    title: 'Resources/Grids/104/IconActive',
    component: IconActive,
    argTypes: {
        asset: {control: 'select'},
    },
};

export const IconActiveStory = (args: IconActiveProps) => (
    <AmountContainer>
        <IconActive
            text={args.text}
            asset={args.asset}
            onClick={args.onClick}
            tabIndex={args.tabIndex}
            role={args.role}
            ariaLabel={args.ariaLabel}
            onKeyPress={args.onKeyPress}
        />
    </AmountContainer>
);

IconActiveStory.args = {
    text: 'Movistar TV',
    asset: 'Television',
    onClick: () => alert('click me!'),
    tabIndex: 0,
    onKeyPress: () => alert('click me!'),
};
