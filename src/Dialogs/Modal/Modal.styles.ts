import { style } from 'typestyle';
import { colors } from '../../styles';

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
        maxWidth: '680px',
        minHeight: '245px',
        height: 'min-content',
        flexDirection: 'column',
        padding: '46px 27px 8px 18px',
        boxSizing: 'border-box',
        borderRadius: '8px',
        backgroundColor: 'white',
        marginTop: '25vh',
        boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 2px 4px 0 rgba(0, 0, 0, 0.5)',
        $nest: {
            '@media only screen and (max-width: 435px)': {
                borderRadius: '5px',
                padding: '43px 8px 8px 8px',
                marginTop: '15vh',
                width: '90%',
                boxShadow: '0 24px 24px 0 rgba(0, 0, 0, 0.3), 0 0 24px 0 rgba(0, 0, 0, 0.22)',
            },
        },
    }),

    buttonContainer: style({
        position: 'relative',
        paddingRight: 10,
        marginTop: 21,
        marginBottom: '31px',
        display: 'flex',
        justifyContent: 'end',
        $nest: {
            '@media only screen and (max-width: 435px)': {
                justifyContent: 'center',
                padding: '16px',
                flexDirection: 'column-reverse',
                marginBottom: 0,
                marginTop: 8,
                paddingRight: 16
            },
        },
    }),

    secondary: style({
        marginRight: '18px',
        $nest: {
            ' @media only screen and (max-width: 435px)': {
                marginRight: '0',
                $nest: {
                    ' & > button': {
                        display: 'block',
                        width: '100%',
                        marginTop: '16px'
                    }
                }
            }
        }
    }),

    close: style({
        position: 'absolute',
        top: '25px',
        right: '29px',
        background: 'transparent',
        border: 'unset',
        padding: 'unset',
        margin: 'unset',
        cursor: 'pointer',
        $nest: {
            ' @media only screen and (max-width: 435px)': {
                top: '19px',
                right: '18px'
            }
        }
    }),
};

export default styles;
