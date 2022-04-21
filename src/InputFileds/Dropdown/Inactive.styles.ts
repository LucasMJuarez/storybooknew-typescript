import {style} from 'typestyle';
import {colors} from '../../styles';

const styles = {
    wrapper: style({
        padding: '0 16px 12px 16px',
    }),
    container: style({
        position: 'relative',
        height: '56px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        display : 'flex',
        alignItems : 'center'
    }),

    adornmentPositionStart : style({
        margin : '15px 8px 0 8px'
    }),
    adornmentContent : style({
        height: '0.01em',
        display: 'flex',
        maxHeight: '2em',
        alignItems: 'center',
        whiteSpace: 'nowrap'
    }),
    adornmentText : style({
        fontSize: '1.1rem',
        fontFamily: "Roboto",
        fontWeight: 400,
        lineHeight: '1.5',
        letterSpacing: '0.00938em',
        margin : 0,
        color: colors.android_icons_icon_primary
    }),

    adornmentactiveInput: style({
        height: 'calc(100% - 22px)',
        padding: '12px 0 0 22px',
    }),

    input: style({ 
        width: 'calc(100% - 12px)',
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
        },
    }),
    activeInput: style({
        height: 'calc(100% - 12px)',
        padding: '12px 0 0 11px',
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
    list: style({ 
        marginTop: '172px',
        borderRadius: '4px',
        display: 'block',
        height: 'auto', 
        width: '84vw', 
        backgroundColor: 'white',
        boxShadow: '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14);', 
        marginLeft: '-32px',
    }),


    
    listItem: style({
        padding: '16px',
        margin: '0px',
        border: 'none',
        backgroundColor: 'transparent',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        caretColor: colors.android_charts_progress_chart_prog_2,
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        $nest: {
            '&:hover': {
                backgroundColor: '#f5f5f5',
            },
        },
    }),

    containerDrop: style({ 
    }),

    containerIcon: style({ 
        width: 'calc(100% - 12px)',
        height: '100%',
        border: 'none',
        padding: '12px 14px 0 22px',
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
    }),
};

export default styles;
