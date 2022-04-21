import React from 'react';
import TwoL from '.';

export default {
    title: 'Notifications/Banner/Permanent/Text',
    component: TwoL,
};

export const TwoLFull = (args: {
    title: string;
    time: string;
    description: string;
    onClick: Function;
    image: string;
    read: boolean;
    permanent: boolean;
}) => (
    <TwoL
        title={args.title}
        time={args.time}
        description={args.description}
        onClick={args.onClick}
        image={args.image}
        read={args.read}
        permanent={args.permanent}
    />
);

TwoLFull.args = {
    title: 'YA PODÉS VER TU FACTURA',
    time: '12:00 hs',
    description: 'Desde la #AppMiMovistar, también podés pagarla con tarjeta.',
    onClick: () => {
        alert('HOLA!');
    },
};
