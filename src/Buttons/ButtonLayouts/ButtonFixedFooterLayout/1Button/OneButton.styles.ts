import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles: {[className: string]: string} = {
    button: style({
        backgroundColor: colors.android_controls_tab_selected,
        height: 48,
        width: '100%',
        border: 'none',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: colors.android_buttons_primary_button_prima,
            },
            '&:disabled': {
                backgroundColor: colors.android_buttons_primary_button_pri_2 + '!important',
            },
        },
    }),
    container: style({
        display: 'flex',
        padding: '10px 16px',
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
};

export default styles;
