import {style} from 'typestyle';
import {colors} from '../../styles';

const styles: {[className: string]: string} = {
    button: style({
        backgroundColor: colors.android_controls_tab_selected,
        transition: 'background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        height: 48,
        border: 'none',
        minWidth: '152px',
        padding: '0 16px 0 16px',
        $nest: {
            '&:hover': {
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
                backgroundColor: colors.android_buttons_primary_button_pri_3,
            },
            '&:disabled': {
                backgroundColor: colors.android_buttons_primary_button_pri_3,
            },
        },
    }),
};

export default styles;
