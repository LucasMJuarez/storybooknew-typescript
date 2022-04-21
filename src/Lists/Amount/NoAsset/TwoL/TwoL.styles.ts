import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles = {
    wrapper: style({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.android_icons_icon_navigation_bar,
    }),
    titleAmount: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 16px 0'
    }),
    subtitle: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        padding: '4px 16px 16px',
    }),
};

export default styles;
