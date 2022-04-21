import React from 'react';
import ModalDesactive from './Modal';

export default {
    title: 'Dialogs/Modal',
    component: ModalDesactive,
};

export const Modal = (args: {
    title?: string;
    description?: string;
    labelPrimary: string;
    labelSecondary?: string;
    onClickPrimary: Function;
    onClickSecondary?: Function;
    onClickClose: Function;
    loadingPrimary?: boolean;
    loadingSecondary?: boolean;
    disabledPrimary?: boolean;
    disabledSecondary?: boolean;
}) => <ModalDesactive {...args} />;

Modal.args = {
    title: '¡Elegiste conservar tu plan con xx% de descuento por 12 meses!  ',
    description: 'No te recargaremos crédito de forma automática a menos que vuelvas a activar el servicio',
    labelPrimary: 'Primary Button',
    labelSecondary: 'Secondary Button',
    onClickPrimary: () => {
        alert('My Primary Button');
    },
    onClickSecondary: () => {
        alert('My Secondary Button');
    },
    onClickClose: () => {
        alert('My Close Button');
    },
};

export const ModalOneButton = (args: {
    title: string;
    description: string;
    labelPrimary: string;
    onClickPrimary: Function;
    onClickClose: Function;
}) => <ModalDesactive labelSecondary={''} onClickSecondary={undefined} {...args} />;

ModalOneButton.args = {
    title: '¡Elegiste conservar tu plan con xx% de descuento por 12 meses!  ',
    description: 'No te recargaremos crédito de forma automática a menos que vuelvas a activar el servicio',
    labelPrimary: 'Primary Button',
    onClickPrimary: () => {
        alert('My Primary Button');
    },
    onClickClose: () => {
        alert('My Close Button');
    },
};

export const ModalNoTitle = (args: {
    title?: string;
    description?: string;
    labelPrimary: string;
    labelSecondary?: string;
    onClickPrimary: Function;
    onClickSecondary?: Function;
    onClickClose: Function;
    loadingPrimary?: boolean;
    loadingSecondary?: boolean;
    disabledPrimary?: boolean;
    disabledSecondary?: boolean;
}) => <ModalDesactive {...args} />;

ModalNoTitle.args = {
    description: 'No te recargaremos crédito de forma automática a menos que vuelvas a activar el servicio',
    labelPrimary: 'Primary Button',
    onClickPrimary: () => {
        alert('My Primary Button');
    },
    onClickClose: () => {
        alert('My Close Button');
    },
};

export const ModalNoDescription = (args: {
    title?: string;
    description?: string;
    labelPrimary: string;
    labelSecondary?: string;
    onClickPrimary: Function;
    onClickSecondary?: Function;
    onClickClose: Function;
    loadingPrimary?: boolean;
    loadingSecondary?: boolean;
    disabledPrimary?: boolean;
    disabledSecondary?: boolean;
}) => <ModalDesactive {...args} />;

ModalNoDescription.args = {
    title: '¡Elegiste conservar tu plan con xx% de descuento por 12 meses!  ',
    labelPrimary: 'Primary Button',
    labelSecondary: 'Secondary Button',
    onClickPrimary: () => {
        alert('My Primary Button');
    },
    onClickSecondary: () => {
        alert('My Secondary Button');
    },
    onClickClose: () => {
        alert('My Close Button');
    },
};

