import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '104px',
        maxWidth: '104px',
        height: '104px',
        padding: '8px',
        border: '1px solid #EEEEEE',
        borderRadius: '4px',
        boxSizing: 'border-box',
        overflow: 'hidden'
        
    }),
    asset :style({
        height: '32px',
        marginBottom: '8px'
    }),
    text: style({
        margin: 0,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: '20px',
        letterSpacing: 'normal',
        color: '#2a2a3c'
    }),
    pointer :style({
        cursor: 'pointer'
    }),
};

export default styles;
