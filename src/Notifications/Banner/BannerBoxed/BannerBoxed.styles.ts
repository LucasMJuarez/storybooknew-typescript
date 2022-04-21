import {style} from 'typestyle';
import { colors } from '../../../styles';


const styles={
    outContainer:style({
        padding: '1px',
        backgroundColor: colors.android_backgrounds_background_cha_2,
        width:'400px',
        height: '75px',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                width: '95%',
            },
        },
    }),
    container: style({
        backgroundColor: 'white',
        padding: '10px 15px',
        borderRadius: '4px',
        height:'55px',
    }),
    contentContainer: style({
        display: 'flex',
        flexDirection: 'row',
    }),
    assetContainer: style({
        margin: '4px 6px 0 4px',
    }),
    textContainer: style({
        display: 'flex',
        flexDirection: 'column',
        margin: '6px',
        width: '100%',
        color: '#808080',
    }),
    buttonContainer: style({
        width: '60%',
        display: 'flex',
        justifyContent: 'flex-end',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                width: '80%',
            },
            '@media only screen and (min-width: 768px)': {
                paddingLeft: '2px',
                width: '360px'
            },
        },
    }),


}

export default styles;