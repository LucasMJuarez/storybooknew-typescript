import React from 'react';
import BulletListEmptyState from './';

export default {
  title: 'Resources/EmptyStates/BulletList',
  component: BulletListEmptyState,
};

export const BulletListScreen = (args: {
  title: string;
  description: string;
  items: string[];
  checkboxColor?: string;
}) => (
  <BulletListEmptyState
    title={args.title}
    description={args.description}
    items={args.items}
    checkboxColor={args.checkboxColor}
  />
);

BulletListScreen.argTypes = {
  title: {control: 'text'},
  description: {control: 'text'},
  items: {control: 'array'},
  checkboxColor: {control: 'text'}
};

BulletListScreen.args = {
  title: 'Pantalla Bullet List',
  description: 'Exampla grata de elementos itemizados:',
  items: ['Se dará de baja el servicio, incluyendo los servicios adicionales asociados a este, sin posibilidad de reconexión.', 'Item 2'],
  checkboxColor: '#5BC500'
};