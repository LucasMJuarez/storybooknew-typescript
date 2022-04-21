import {style} from 'typestyle';
import {colors} from '../../styles';

const styles: {[className: string]: string} = {
    button: style({
        backgroundColor: 'transparent',
        height: '32px',
        padding: '6px 8px',
        border: 'none',
        transition: 'background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        $nest: {
            '&:hover': {
                backgroundColor: 'rgba(255,195,200,0.2)',
            },
            '&:disabled': {
                backgroundColor: 'transparent',
            },
        },
    }),
    anchor: style({
        color: colors.android_buttons_danger_button_danger,
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        letterSpacing: '0',
        lineHeight: '20px',
        textAlign: 'center',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        height: '32px',
        padding: '6px 8px',
        border: 'none',
        transition: 'background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
            },
            '&:disabled': {
                cursor: 'default',
                backgroundColor: 'transparent',
            },
        },
    }),
};

export default styles;
