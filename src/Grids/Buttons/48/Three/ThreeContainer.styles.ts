import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles = {
    container: style({
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0px 16px',
        objectFit: 'contain',
        height: '100px',
        alignItems: 'center',
        width: '100%',
        background: colors.android_bars_primary_primary,
        $nest: {
            '@media screen and (min-width: 768px)': {
                width: '816px',
                margin: 'auto',
            },
        },
    }),
    icon_container: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
            },
        },
    }),
    text_container: style({
        margin: '10px 0',
        fontFamily: 'Roboto',
        fontSize: 12,
        color: colors.android_buttons_tertiary_button_tert,
    }),
};

export default styles;
