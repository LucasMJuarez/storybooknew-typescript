import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles: {[className: string]: string} = {
    button: style({
        backgroundColor: colors.android_controls_tab_selected,
        height: 48,
        width: 328,
        border: 'none',
        borderRadius: '4px',
        margin: '16px',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: colors.android_buttons_primary_button_prima,
            },
            '@media only screen and (max-width: 767px)': {
                width: '100%',
            },
            '&:disabled': {
                backgroundColor: colors.android_buttons_primary_button_pri_2,
            }
        },
    }),
    anchor: style({
        backgroundColor: colors.android_controls_tab_selected,
        height: 48,
        width: 328,
        border: 'none',
        borderRadius: '4px',
        margin: '16px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        textDecoration:'none',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: colors.android_buttons_primary_button_prima,
            },
            '@media only screen and (max-width: 767px)': {
                width: '100%',
            },
            '&:disabled': {
                backgroundColor: colors.android_buttons_primary_button_pri_2,
            }
        },
    }),
    container: style({
        display: 'flex',
        padding: '0',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                justifyContent: 'unset',
            },
        },
    }),
    button_full_width: style({
        backgroundColor: colors.android_controls_tab_selected,
        height: 48,
        width: '100%',
        border: 'none',
        margin: '16px 0',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        textDecoration:'none',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: colors.android_buttons_primary_button_prima,
            },
            '&:disabled': {
                backgroundColor: colors.android_buttons_primary_button_pri_2,
            },
        },
    }),
    button_inverse: style({
        backgroundColor: colors.android_icons_icon_navigation_bar + '!important',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: colors.android_buttons_link_button_link_bac + '!important',
            },
        },
    }),
    button_flex_end: style({
        display: 'flex',
        padding: '0',
        justifyContent: 'flex-end',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                justifyContent: 'unset',
            },
        },
    }),
};

export default styles;
