import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles: {[className: string]: string} = {
    button: style({
        backgroundColor: colors.android_controls_tab_selected,
        height: 48,
        width: 328,
        $nest: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: colors.android_buttons_primary_button_prima,
            },
        },
    }),
    container: style({
        display: 'flex',
        maxWidth: '360px',
        flexDirection: 'column',
        padding: '16px',
        gap: 16,
    }),

    contain: style({
        display: 'flex',
        maxWidth: '320px',
        flexDirection: 'row-reverse',
        padding: '16px 0px 16px 16px',
        gap: 16,
    }),
};

export default styles;
