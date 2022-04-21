import React from 'react';
import BulletOneRowLinkTerm, { BulletOneRowLinkTermProps } from './BulletOneRowLinkTerm';

export default {
  title: 'Resources/EmptyStates/BulletOneRowLinkTerm',
  component: BulletOneRowLinkTerm,
};

export const BulletOneRowLinkTermScreen = (args: BulletOneRowLinkTermProps) => BulletOneRowLinkTerm(args);

BulletOneRowLinkTermScreen.args = {
  text: 'Volvé a enchufarlo y espera algunos<br> minutos hasta que las luces queden fijas.<br>¡Listo!<br>¿Necesitás más ayuda?',
  checkboxColor: '#5BC500',
  type: 'text_secondary',
  href: '',
  textLink: 'Ver video tutorial',
  openExternalLink: true
};

const bulletOneRowLinkTerm = (args: BulletOneRowLinkTermProps) => {
  return (
    <BulletOneRowLinkTerm {...args} />
  );
};