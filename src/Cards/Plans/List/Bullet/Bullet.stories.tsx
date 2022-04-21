import React from 'react';
import Bullet, { BulletProps } from './Bullet';

export default {
  title: 'Plans/List/Bullet',
  component: Bullet,
};


export const BulletDefault = (args: BulletProps) => (
  <Bullet text={args.text} asset={args.asset} isActive={args.isActive} />
);

BulletDefault.args = {
  text: 'Navegá 5GB incluidos',
  asset: 'BulletActive',
  isActive: true
}
