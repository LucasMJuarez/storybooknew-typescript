import { style } from 'typestyle';


const styles = {
    container: style({
        display: 'flex',
        width: 'auto',
    }),
    subContainerData: style({
        alignItems: 'center',
        display: 'flex',        
        justifyContent: 'center',
        padding: '8px 0px 8px 16px',
        height: '24px',
        width: '24px'
    }),
    subContainerSub: style({
        alignItems: 'center',
        display: 'flex',
        padding: '10px 14px 10px 8px',
    })
};

export default styles;
