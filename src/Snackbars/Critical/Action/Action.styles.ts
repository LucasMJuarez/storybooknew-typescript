import { style } from 'typestyle';
import { colors } from '../../../styles';

const styles = {
    wrapper: style({
        padding: ' 14px 16px ',
        borderRadius: '4px',
        backgroundColor: colors.android_buttons_danger_button_danger,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    button: style({
        padding: '0',
        margin: '0',
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        cursor: 'pointer',
    }),
    textContainer: style({
        padding: ' 0px 12px 0px 0px ',
    }),

};

export default styles;
