import {style} from 'typestyle';
import {colors} from '../../../styles';

const styles: {[className: string]: string} = {
    button: style({
        backgroundColor: 'transparent',
        opacity: 1,
        transition: 'border-color 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        height: 32,
        minWidth: '104px',
        padding: '5px 10px 7px',
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
    buttonInverse: style({
        borderColor: colors.android_icons_icon_navigation_bar + '!important',
        $nest: {
            '&:hover': {
                borderColor: colors.android_buttons_primary_button_pri_3 + '!important',
            },
            '&:disabled': {
                borderColor: colors.android_buttons_primary_button_pri_3 + '!important',
            },
        },
    }),
};

export default styles;
