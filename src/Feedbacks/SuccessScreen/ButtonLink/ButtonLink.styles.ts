import { style } from 'typestyle';
import { colors } from '../../../styles'; 

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0 30px',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                backgroundColor: colors.android_bars_primary_primary,
                minHeight: '100%',
                padding: 0,
            },
        },
    }),
    buttonContainer: style({
        width: '60%',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                width: '100%',
            },
            '@media only screen and (min-width: 768px)': {
                paddingLeft: '2px',
                width: '360px'
            },
        },
    }),
    wrapper: style({
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 24px 24px 24px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                padding: '64px 24px 22px 18px',
                width: '76%',
            },
        },
    }),
    title: style({
        paddingTop: '24px',
        paddingBottom: '16px',
        marginBlockStart: 0,
        marginBlockEnd: 0,
        fontWeight: 'unset',
    }),
    childrenContainer: style({
        display: 'block',
    }),
    footerContainer: style({
        height: '40px',
        margin: '13px 30px 11px 31px',
        
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.43,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: colors.white
   }),
   wrapperButtonLink: style({ 
        height: '128px',
        display: 'grid',
   }),

};

export default styles;
