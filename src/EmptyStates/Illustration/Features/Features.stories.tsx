import React from 'react';
import Features from './Features';
import Bullet from '../../../Cards/Plans/List/Bullet/Bullet';

export default {
    title: 'EmptyStates/Features',
    component: Features,
};

export const FeaturesStory = (args: {
    title: string;
    children: React.ReactNode;
    textPrimaryButton: string;
    textSecondaryButton: string;
    onClickPrimaryButton: Function;
    onClickSecondaryButton: Function
}) => <Features
        title={args.title}
        children={args.children}
        textPrimaryButton={args.textPrimaryButton}
        textSecondaryButton={args.textSecondaryButton}
        onClickPrimaryButton={args.onClickPrimaryButton}
        onClickSecondaryButton={args.onClickSecondaryButton}
    />;

FeaturesStory.args = {
    title: '¡Con tu nuevo plan estás más conectado!',
    children: (
        <Bullet
            text='Mira películas y series gratis con Movistar Play'
            asset='BulletActive'
            isActive={true}
        />
    ),
    textPrimaryButton: 'Ingresar email para factura digital',
    textSecondaryButton: 'Volver a mi linea',
    onClickPrimaryButton: () => alert('Click me!'),
    onClickSecondaryButton: () => alert('Click me!')
};

