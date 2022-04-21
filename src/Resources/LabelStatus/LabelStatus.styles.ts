import {style} from 'typestyle';

const styles = {
    container: style({
      width:'100%',
    }),
    subContainer: style({
        display: 'flex',
        padding:'5px 15px 5px 0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'50%',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                width: '90%',
                padding:'5px'
            },
        },
    }),
    label:style({
        marginTop: '17px',
    })
};

export default styles;
