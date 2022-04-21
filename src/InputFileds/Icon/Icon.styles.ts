import { style } from 'typestyle';
import { colors } from '../../styles';

const styles = {
    wrapper: style({
        padding: '0 16px 12px 16px',
    }),
    container: style({
        position: 'relative',
        height: '56px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),

    adornmentPositionStart: style({
        margin: '15px 8px 0 8px',
    }),
    adornmentContent: style({
        height: '0.01em',
        display: 'flex',
        maxHeight: '2em',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    }),
    adornmentText: style({
        fontSize: '1.1rem',
        fontFamily: 'Roboto',
        fontWeight: 400,
        lineHeight: '1.5',
        letterSpacing: '0.00938em',
        margin: 0,
        color: colors.android_icons_icon_primary,
    }),

    adornmentx1: style({
        paddingTop: '15px',
        width: 'calc(100% - 48px)',
        border: 'none',
        backgroundColor: 'transparent',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        caretColor: colors.android_charts_progress_chart_prog_2,
        $nest: {
            '&:focus': {
                outline: 'none !important',
            },
        },
        height: 'calc(100% - 22px)',
    }),

    adornmentx2: style({
        paddingTop: '15px',
        width: 'calc(100% - 48px)',
        border: 'none',
        backgroundColor: 'transparent',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        caretColor: colors.android_charts_progress_chart_prog_2,
        $nest: {
            '&:focus': {
                outline: 'none !important',
            },
        },
        height: 'calc(100% - 22px)',
    }),

    adornmentx3: style({
        paddingTop: '15px',
        width: 'calc(100% - 48px)',
        border: 'none',
        backgroundColor: 'transparent',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        caretColor: colors.android_charts_progress_chart_prog_2,
        $nest: {
            '&:focus': {
                outline: 'none !important',
            },
        },
        height: 'calc(100% - 22px)',
    }),

    input: style({
        position: 'absolute',
        width: 'calc(100% - 48px)',
        height: '100%',
        border: 'none',
        padding: '12px 0 0 48px',
        backgroundColor: 'transparent',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        caretColor: colors.android_charts_progress_chart_prog_2,
        $nest: {
            '&:focus': {
                outline: 'none !important',
            },
            '&input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: '0'
            },
            '&[type=number]': {
                '-moz-appearance': 'textfield'
            }
        }
    }),
    activeInput: style({
        height: 'calc(100% - 12px)',
        padding: '12px 0 0 11px',
        paddingLeft: '48px'
    }),
    label: style({
        position: 'absolute',
        width: 'calc(100% - 48px)',
        paddingLeft: '48px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontWeight: 400,
        color: '#757575',
        transition: 'all 0.4s',
        cursor: 'text',
    }),
    labelIndex: style({
        zIndex: -1,
    }),
    activeLabel: style({
        transform: 'translate(0, -12px)',
        fontSize: '12px',
        color: `${colors.android_bars_primary_primary}!important`,
    }),
    inactiveLabel: style({
        transform: 'translate(0, -12px)',
        fontSize: '12px',
        color: '#757575',
    }),
    error: style({
        color: '#ff374a !important',
    }),
    helpContainer: style({
        padding: '4px 12px 0',
    }),
    iconContainer: style({
        marginTop: '16px',
        marginBottom: '16px',
        marginLeft: '11.5px',
    }),
    inputContainer: style({
        marginRight: '12.5px'
    }),
};

export default styles;
