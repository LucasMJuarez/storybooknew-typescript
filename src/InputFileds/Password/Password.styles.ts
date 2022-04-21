import { style } from 'typestyle';
import { colors } from '../../styles';

const styles = {
    containerExplore: style({
        alignContent: 'flex-end',
        padding: '16px',
        paddingBottom: '11px'
    }),
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
        justifyContent: 'flex-end',
    }),
    adornmentPositionStart: style({
        margin: '15px 8px 0 8px'
    }),
    adornmentContent: style({
        height: '0.01em',
        display: 'flex',
        maxHeight: '2em',
        alignItems: 'center',
        whiteSpace: 'nowrap'
    }),
    adornmentText: style({
        fontSize: '1.1rem',
        fontFamily: "Roboto",
        fontWeight: 400,
        lineHeight: '1.5',
        letterSpacing: '0.00938em',
        margin: 0,
        color: colors.android_icons_icon_primary
    }),

    adornmentactiveInput: style({
        height: 'calc(100% - 22px)',
        padding: '12px 0 0 22px',
    }),

    input: style({
        position: 'absolute',
        width: 'calc(100% - 72px)',
        paddingRight: '10px',
        marginRight: '50px',
        height: '100%',
        border: 'none',
        padding: '12px 0 0 22px',
        backgroundColor: 'transparent',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        caretColor: colors.android_charts_progress_chart_prog_2,
        $nest: {
            '&:focus': {
                outline: 'none !important',
            },
            '&::-ms-reveal': {
                display: 'none'
            }
        },
    }),
    activeInput: style({
        height: 'calc(100% - 12px)'
    }),
    label: style({
        position: 'absolute',
        zIndex: -1,
        width: 'calc(100% - 12px)',
        paddingLeft: '11px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontWeight: 400,
        color: '#757575',
        transition: 'all 0.4s',
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
};

export default styles;
