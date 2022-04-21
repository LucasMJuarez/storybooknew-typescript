import React from 'react';
import ModuleInformative from './ModuleInformative';
import {ModuleInformativeIconEnum} from './ModuleInformative';

export default {
    title: 'Cards/ModuleInformative',
    component: ModuleInformative,
};

export const Message = (args: {
    title: string;
    description: string;
    icon: ModuleInformativeIconEnum;
    onClick: Function;
    labelButton: string;
}) => (
    <ModuleInformative
        title={args.title}
        description={args.description}
        icon={args.icon}
        onClick={args.onClick}
        labelButton={args.labelButton}
    />
);

Message.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    icon: {control: 'text'},
    labelButton: {control: 'text'},
};

Message.args = {
    title: 'Te regalamos $600 en tu plan móvil por 12 meses.',
    description: 'Conectate con un asesor y activá este beneficio',
    icon: 'Gift',
    onClick: () => alert('Primary Button'),
    labelButton: 'Ir a WhastApp',
};
