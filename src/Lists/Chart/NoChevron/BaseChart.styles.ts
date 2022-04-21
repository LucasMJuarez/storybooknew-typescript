import {style} from 'typestyle';

const styles = {
    card: style({
        padding: '0px 16px 0;',
        background : "#fff"
    }),
    boxedRowAccordion : style({
        borderColor: "#DDDDDD",
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: '16px',
        display: 'flex',
        padding: '16px 16px',
    }),
    imageContainer : style({
        position : 'relative',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        minWidth : '48px',
        height : '48px',
        width : '48px'
    }),
    circle : style({
        position : 'absolute',
        top : '0',
        left : '0',
        transform : 'translate3d(0,0,0)'
    }),
    icon : style({
        width : '34px',
        height : '34px',
        borderRadius : '50%',
        margin : '0 auto'
    }),
    textContainer : style({
        paddingLeft : '16px'
    }),
    quantity : style({
        display : 'flex',
        alignItems : 'flex-start',
        color : '#757575',
        lineHeight : '1.42857142',
        fontSize : '14px'
    }),
    info : style({
        display : 'flex',
        alignItems : 'flex-start',
        color: '#757575',
        lineHeight: '1.42857142',
        fontSize: '14px'
    }),
    expiration : style({
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: '4px',
        paddingTop: '4px',
        color: '#757575',
        lineHeight: '1.42857142',
        fontSize: '14px'
    })
};

export default styles;