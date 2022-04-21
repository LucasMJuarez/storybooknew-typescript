import React from 'react';
import Link from './Link';

export default {
    title: 'Empty States/Icon/Link',
    component: Link,
};

export const Empty_States = (args: {title: string; description: string; icon: string}) => (
    <Link title={args.title} description={args.description} icon={args.icon} />
);

Empty_States.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    icon: {options: ['EmptyData', 'EmptyBills'], control: {type: 'select'}},
};

Empty_States.args = {
    title: 'Aún no has consumido datos',
    description: 'Aquí verás el detalle de consumo de datos durante el ciclo de facturación.',
};

export const Empty_Bills = (args: {title: string; description: string; icon: string}) => (
    <Link title={args.title} description={args.description} icon={args.icon} />
);

Empty_Bills.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    icon: {options: ['EmptyData', 'EmptyBills'], control: {type: 'select'}},
};

Empty_Bills.args = {
    title: 'Aún no has consumido datos',
    description: 'Aquí verás el detalle de consumo de datos durante el ciclo de facturación.',
    icon: 'EmptyBills',
};
