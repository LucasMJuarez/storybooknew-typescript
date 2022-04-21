import { style } from 'typestyle';
import { colors } from '../../styles';

const styles = {
    overlayWrapper: style({
        backgroundColor: colors.android_backgrounds_background_opaci,
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: '0px',
        position: 'fixed',
        top: '0px',
        width: '100%',
        zIndex: 1,
        alignItems: 'center',
    }),

    wrapper: style({
        backgroundColor: 'white',
        borderRadius: '8px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        height: 'min-content',
        maxWidth: '680px',
        maxHeight: '70%',
        minHeight: '245px',
        minWidth: '150px',
        padding: '6px 0px 14px 0px',
        position: 'relative',
        justifyContent: 'center',
        boxShadow: '0 24px 24px 0 rgba(0, 0, 0, 0.3), 0 0 24px 0 rgba(0, 0, 0, 0.22)',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                borderRadius: '2px',
                width: '77.78%',
            },
            '@media only screen and (min-width: 768px)': {
                padding: '45px 35px 21px 20px',
            },
        },
    }),

    childrenContainer: style({
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowWrap: 'break-word',
    }),

    buttonContainer: style({
        marginTop: '17px',
        paddingRight: '22px',
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                display: 'none',
            },
        },
    }),

    buttonContainerDesktop: style({
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                display: 'none',
            },
        },
    }),

    close: style({
        position: 'absolute',
        top: '11px',
        right: '11px',
        background: 'transparent',
        border: 'unset',
        padding: 'unset',
        margin: 'unset',
        cursor: 'pointer',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                display: 'none'
            },
        },
    }),
};

export default styles;