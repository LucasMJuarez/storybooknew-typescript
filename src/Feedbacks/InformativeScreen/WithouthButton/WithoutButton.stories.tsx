import React from 'react';
import WithoutButtonFeedback from '.';

export default {
    title: 'Feedbacks/InformativeScreen/WithoutButton',
    component: WithoutButtonFeedback,
};

export const WithoutButtonScreen = (args: {title: string; description: string; loading: true}) => (
    <WithoutButtonFeedback title={args.title} description={args.description} loading={args.loading} />
);

WithoutButtonScreen.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
};

WithoutButtonScreen.args = {
    title: '¡Hola!',
    description: 'Estamos preparando todo para mostrarte tus servicios y consumos.',
};
