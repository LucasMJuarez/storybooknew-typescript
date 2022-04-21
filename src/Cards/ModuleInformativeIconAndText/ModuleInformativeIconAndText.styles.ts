import { style } from 'typestyle';

const styles = {

container: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    padding: '8px 24px 16px 24px',
    width:'auto',
    height:'204px',  
    backgroundColor:'#ffffff',
}),
iconContainer: style({
    marginBottom: '12px',
}),
titleContainer: style({
    width:'auto',
    fontFamily:'Roboto',
    fontSize:'18px',
    fontWeight: 300,
    fontStretch:'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing:'normal',
    textAlign:'center',
    color: '#2a2a3c',
}),
descriptionContainer: style({
    width:'auto',
    height:'40px',
    margin:'8px 0px 0 0',
    fontFamily:'Roboto',
    fontSize:'14px',
    fontWeight: 'normal',
    fontStretch:'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing:'normal',
    textAlign:'center',
    color: '#757575',
}),
};

export default styles;
