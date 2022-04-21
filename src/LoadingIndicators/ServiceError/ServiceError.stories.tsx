import React from 'react';
import ServiceError from './ServiceError';

export default {
    title: 'LoadingIndicators/ServiceError',
    component: ServiceError,
};

export const ServiceErrorStory = (args: { description: string, onClick: Function, title: string, buttonText: string }) => (
    <ServiceError description={args.description} onClick={args.onClick} title={args.title} buttonText={args.buttonText} />
);

ServiceErrorStory.args = {
    description: 'Tenés un Error',
    title: 'Ups Error',
    buttonText: 'Reintentar',
    onClick: () => alert('Button pressed!')
};
