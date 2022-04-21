import React from 'react';
import InfoButton, { InfoButtonProps } from './InfoButton';


export default {
    title: 'Buttons/ButtonLayouts/ButtonFixedFooterLayout/InfoButton',
    component: InfoButton,
};

export const Items = (args: InfoButtonProps) => infoButton(args);

Items.args = {
    textCaption: '$1350.00',
    textTitle: '$945.00',
    textSub: '/mes',
    buttonLabel: 'Quiero este plan',
    onClick: () => {
        alert('Botón \"Quiero este plan\" clickeado!');
    },
    decorateCaption: false,
    tabIndex: 1,
 };

const infoButton = (args: InfoButtonProps) => {
    return (
        <InfoButton {...args} />
    );
}

