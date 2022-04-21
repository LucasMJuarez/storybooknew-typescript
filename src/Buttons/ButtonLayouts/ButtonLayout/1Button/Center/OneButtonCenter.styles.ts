import {style} from 'typestyle';
import {colors} from '../../../../../styles';

const styles: {[className: string]: string} = {
    button: style({
        width: 152,
        height: 48,
        padding: '11px 53px 13px 56px',
        border: 'solid 1px #419af9fc',
        borderRadius: 4,
        background: colors.android_icons_icon_navigation_bar,
        $nest: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: colors.android_charts_stacked_bar_chart_sta,
            },
            '&:focus': {
                outline: 'none',
            },
            '&:disabled': {
                cursor: 'auto',
                backgroundColor: colors.android_icons_icon_navigation_bar,
            },
        },
    }),
};

export default styles;
