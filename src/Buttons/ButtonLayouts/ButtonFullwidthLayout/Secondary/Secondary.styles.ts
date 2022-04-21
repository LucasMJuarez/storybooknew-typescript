import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles: {[classname: string]: string} = {
    button: style({
        backgroundColor: 'transparent',
        opacity: 1,
        transition: 'border-color 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        height: 48,
        width: 328,
        border: 'solid 1.5px',
        borderColor: colors.android_charts_progress_chart_prog_2,
        //borderRadius: '4px',
        margin: '16px',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
                borderColor: colors.android_buttons_primary_button_prima,
            },
            '@media only screen and (max-width: 767px)': {
                width: '100%',
            },
            '&:disabled': {
                borderColor: colors.android_buttons_primary_button_pri_2,
            },
            '&:focus': {
                outline: 'none', //TODO: ver si sacar esto
            },
        },
    }),
    container: style({
        display: 'flex',
        padding: '16px 0',
        $nest: {
                '@media only screen and (max-width: 767px)': {
                    justifyContent: 'unset',
                },
            },
    }),
    button_full_width: style({
        backgroundColor: 'transparent',
        opacity: 1,
        transition: 'border-color 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        height: 48,
        width: '100%',
        border: 'solid 1.5px',
        borderColor: colors.android_charts_progress_chart_prog_2,
        margin: '16px 0',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
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
                cursor: 'pointer',
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
    button_flex_end: style({
        display: 'flex',
        padding: '16px 0',
        justifyContent: 'flex-end',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                justifyContent: 'unset',
            },
        },
    }),
};

export default styles;