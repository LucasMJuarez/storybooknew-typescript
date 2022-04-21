import { style } from "typestyle";
import {colors} from '../../../styles';

const styles = {
  bulletText: style({
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
    color: colors.android_icons_icon_primary,
    margin: '2px 0 0 12px',
  }),
  bulletIconContainer: style({
    minHeight: '24px',
    minWidth: '24px',
  }),
  bulletContainer: style({
    backgroundColor: colors.android_icons_icon_navigation_bar,
    display: 'flex',
    flexDirection: 'row',
    margin: '12px 0 0 30px',
  })
}

export default styles;