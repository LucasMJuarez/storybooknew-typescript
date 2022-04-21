import React from 'react';
import State from '.';
import {labelCategoryEnum} from '../../../Labels/Background/Label/Label';
import {EmptyStateIconStateIconEnum} from './State';

export default {
    title: 'Empty States/Icon/State',
    component: State,
};

export const MySuperTest = (args: {
    title: string;
    description: string;
    labelText: string;
    labelCategory: labelCategoryEnum;
    icon: EmptyStateIconStateIconEnum;
}) => (
    <State
        labelText={args.labelText}
        labelCategory={args.labelCategory}
        icon={args.icon}
        description={args.description}
        title={args.title}
    />
);

MySuperTest.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    labelText: {control: 'text'},
};

MySuperTest.args = {
    title: 'Crédito de recargas',
    description:
        'Podés usar tu saldo de Recarga para llamar, navegar y mensajear a donde quieras: comprar packs, servicios y contenidos y pasarle saldo a otro Movistar. También podes Multiplicar el día que quieras.',
    labelText: 'VENCIDO',
    labelCategory: 'Fourth',
    icon: 'NotificationInfo',
};
