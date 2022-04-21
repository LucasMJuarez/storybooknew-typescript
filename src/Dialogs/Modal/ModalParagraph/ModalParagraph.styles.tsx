import { style } from 'typestyle';

const styles = {
    text: style({
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 300,
        lineHeight: '24px',
        letterSpacing: 0,
        color: '#757575',
        $nest: {
            '@media only screen and (max-width: 435px)': {
                fontSize: 16,
                fontWeight: 'normal',
            },
        },
    }),
    container: style({
        padding: '6px 32px 18px 16px',
        $nest: {
            '@media only screen and (max-width: 435px)': {
                fontSize: 16,
                fontWeight: 'normal',
                padding: '6px 16px 10px 16px',
            },
        },
    }),
}

export default styles;