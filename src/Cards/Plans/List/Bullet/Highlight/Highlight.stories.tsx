import React from 'react';
import Highlight, { HighlightProps } from './Highlight';
import { assetEnum } from '../../../../../Assets/24/AssetOrchester/AssetOrchester';

export default {
  title: 'Plans/List/Bullet/Highlight',
  component: Highlight,
};

export const HighlightDefault = (args: HighlightProps) => (
  <Highlight text={args.text} asset={args.asset} isBackground={args.isBackground} />
);

HighlightDefault.args = {
  text: 'Navegá 5GB incluidos',
  asset: 'BulletActive',
  isBackground: false
}
