import React from 'react';
import ModuleInformativeIconAndText from './ModuleInformativeIconAndText';

export default {
    title: 'Cards/ModuleInformativeIconAndText',
    component: ModuleInformativeIconAndText,
};

export const Message = (args: {title: string; description: string; icon: any}) => (
    <ModuleInformativeIconAndText title={args.title} description={args.description} icon={args.icon} />
);

Message.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    icon: {options: ['Message', 'OpenIssues'], control: {type: 'select'}},
};

Message.args = {
    title: 'Estamos trabajando en tu caso de manera remota',
    description: 'Enviaremos a una persona del área técnica si es necesario resolverlo en tu domicilio.',
};

export const OpenIssues = (args: {title: string; description: string; icon: any}) => (
    <ModuleInformativeIconAndText title={args.title} description={args.description} icon={args.icon} />
);

OpenIssues.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    icon: {options: ['Message', 'OpenIssues'], control: {type: 'select'}},
};

OpenIssues.args = {
    title: 'Una persona del área técnica va a estar trabajando fuera de tu domicilio',
    description: 'Si necesita ingresar para resolver tu caso, se contactará con vos.',
    icon: 'OpenIssues',
};
