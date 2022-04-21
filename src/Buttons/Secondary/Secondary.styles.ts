import {style} from 'typestyle';
import {colors} from '../../styles';

const styles: {[className: string]: string} = {
    button: style({
        backgroundColor: 'transparent',
        opacity: 1,
        transition: 'border-color 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        height: 48,
        minWidth: '152px',
        padding: '0 16px 0 16px',
        border: 'solid 1.5px ',
        borderColor: colors.android_charts_progress_chart_prog_2,
        $nest: {
            '&:hover': {
                borderColor: colors.android_buttons_primary_button_prima,
            },
            '&:disabled': {
                borderColor: colors.android_buttons_primary_button_pri_2,
            },
        },
    }),
    button_inverse: style({
        borderColor: colors.android_icons_icon_navigation_bar,
        $nest: {
            '&:hover': {
                borderColor: colors.android_buttons_primary_button_pri_3,
            },
            '&:disabled': {
                borderColor: colors.android_buttons_primary_button_pri_3,
            },
        },
    }),
    inverse_loading: style({
        borderColor: colors.android_icons_icon_navigation_bar,
        $nest: {
            '&:disabled': {
                borderColor: colors.android_icons_icon_navigation_bar,
            },
        },
    }),
};

export default styles;
