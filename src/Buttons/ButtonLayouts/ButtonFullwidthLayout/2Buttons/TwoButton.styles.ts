import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles: {[className: string]: string} = {
    button: style({
        backgroundColor: colors.android_controls_tab_selected,
        height: 48,
        width: '100%',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: colors.android_buttons_primary_button_prima,
            },
        },
    }),
    container: style({
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        justifyContent: 'space-between',
        height: '112px'
    }),
};

export default styles;
