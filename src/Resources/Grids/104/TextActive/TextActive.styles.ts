import {style} from 'typestyle';
import {colors} from '../../../../styles';
const styles = {
    
    container: style({
        width: '104px',
        height: '104px',
        boxSizing: 'border-box',
        position:'relative'
        
    }),
    option: style({
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: `1px ${colors.android_backgrounds_background_cha_2} solid`,
        borderRadius: '4px',
        textDecoration: 'none',
        $nest: {
            '&:active': {
                borderColor: colors.android_charts_progress_chart_prog_2,
            },
            '&:hover': {
                userSelect: 'none',
                cursor: 'pointer',
            },
        },
    }),
    text: style({
        fontWeight: 300,
        fontSize: '20px',
        lineHeight: 1.2,
        fontFamily: 'Roboto',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
    }),
};
export default styles;