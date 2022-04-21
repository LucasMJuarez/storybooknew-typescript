import { style } from 'typestyle';
import { colors } from '../../../styles';

const styles = {
    stepperBackground: style({
        backgroundColor: colors.white,
        padding: '12px 16px 26px',
    }),

    stepsStyle(totalSteps: number, currentStep: number) {

        const marginLeft = `calc(${currentStep / (totalSteps - 1) * 100}% - 6px)`;

        return style({
            marginLeft: marginLeft,
            width: '16px',
            height: '16px',
            fontFamily: 'Roboto',
            fontSize: '12px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.33,
            letterSpacing: 'normal',
            textAlign: 'center',
            color: colors.grey_1,
            position: 'absolute',
        })
    },

    firtsStep: style({
        marginLeft: '0px',
        width: '16px',
        height: '16px',
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        textAlign: 'left',
        color: colors.movistar_green,
        position: 'absolute',
    }),

    lastStep: style({
        marginLeft: 'calc((100% - 16px))',
        display: 'flex',
        flexDirection: 'row',
        objectFit: 'contain',
    }),

    containerLiquid: style({
        marginTop: '12px',
        paddingBottom: '6px',
    }),

    containerStep: style({
        display: 'flex',
        minHeight: '16px',
        position: 'relative',
    }),

    hideSpan: style({
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: 0,
        userSelect: 'none',
        boxSizing: 'border-box',
    })
}

export default styles;