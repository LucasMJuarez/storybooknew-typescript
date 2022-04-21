import React from 'react';
import Button from '.';
import { EmptyStateIconStateIconEnum } from './Button';
import { TypeDescriptionEnum } from './Button';

export default {
    title: 'Empty States/Icon/Button',
    component: Button,
};

export const MySuperTest = (args: {
    title: string;
    description: string;
    icon: EmptyStateIconStateIconEnum;
    bulletList?: string[],
    typeDescription?: TypeDescriptionEnum,
    labelButton: string,
    onClick: Function,
}) => (
    <Button
        icon={args.icon}
        description={args.description}
        title={args.title}
        bulletList={args.bulletList}
        typeDescription={args.typeDescription}
        labelButton={args.labelButton}
        onClick={args.onClick}
    />
);

MySuperTest.argTypes = {
    title: { control: 'text' },
    description: { control: 'text' },
    bulletList: { control: 'array' },
    typeDescription: { control: 'text' },
    labelButton: { control: 'text' }
};

MySuperTest.args = {
    title: 'Crédito de recargas',
    description:
        'Podés usar tu saldo de Recarga para llamar, navegar y mensajear a donde quieras: comprar packs, servicios y contenidos y pasarle saldo a otro Movistar. También podes Multiplicar el día que quieras.',
    icon: 'NotificationInfo',
    bulletList: ['Se dará de baja el servicio, incluyendo los servicios adicionales asociados a este, sin posibilidad de reconexión.', 'Item 2'],
    typeDescription: 'text_primary',
    labelButton: 'Primary Button',
    onClick: () => alert('Primary Button'),
};
