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
        minWidth: '150px',
        minHeight: '245px',
        height: 'min-content',
        flexDirection: 'column',
        padding: '46px 36px 8px',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        borderRadius: '8px',
        backgroundColor: 'white',
        marginTop: '25vh',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                padding: '26px 24px 4px 24px',
                marginTop: '30vh',
                width: '90%',
            },
        },
    }),

    buttonContainer: style({
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        $nest: {
            '@media only screen and (max-width: 435px)': {
                justifyContent: 'center',
                $nest: {
                    '& > div': {
                        padding: '16px',
                        flexDirection: 'column-reverse',
                        width: '100%',
                    },
                },
            },
        },
    }),

    buttonContainerOne: style({
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer',
 
        maxWidth: '320px',
         
        padding: '16px 0px 16px 16px',
        gap: 16,

        $nest: {
            '@media only screen and (max-width: 435px)': {
                $nest: {
                    '& > div': {
                        padding: '16px',
                        flexDirection: 'column-reverse',
                        width: '100%',
                    },
                },
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
    }),
};

export default styles;
