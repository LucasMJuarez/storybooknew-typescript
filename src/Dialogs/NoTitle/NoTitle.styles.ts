import {style} from 'typestyle';
import {colors} from '../../styles';

const styles = {
    overlayWrapper: style({
        position: 'fixed',
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        top: '0px',
        left: '0px',
        backgroundColor: colors.android_backgrounds_background_opaci,
        zIndex: 1,
    }),

    wrapper: style({
        display: 'flex',
        position: 'relative',
        maxWidth: '280px',
        height: 'min-content',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '21px 16px 14px',
        boxSizing: 'border-box',
        borderRadius: '2px',
        backgroundColor: 'white',
        marginTop: '25vh',
    }),

    buttonContainerMobile: style({
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
    }),
};

export default styles;
