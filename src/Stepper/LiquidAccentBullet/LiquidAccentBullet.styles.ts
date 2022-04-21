import { style } from 'typestyle'
import { colors } from './../../styles';

const styles = {
    progressBackground: style({
        width: '100%',
        height: '8px',
        borderRadius: '4px',
        backgroundColor: colors.android_backgrounds_background_alter,
        position: 'relative'
    }),

    progress(totalSteps: number, currentStep: number) {

        const calcProgress = () => {
            if (currentStep === 1) {
                return `${Math.round(((currentStep) / (totalSteps - 1)) / 2 * 100)}%`;
            }
            if (currentStep === totalSteps)
                return '100%';
            return `calc(${(currentStep - 1) / (totalSteps - 1) * 100}% + 6px)`;
        }

        return style({
            width: calcProgress(),
            height: '8px',
            borderRadius: '4px',
            backgroundColor: colors.android_charts_progress_chart_prog_2
        })
    },

    accentStyle(totalSteps: number, index: number, currentStep: number) {

        const margin = `2px 0 2px ${index / (totalSteps - 1) * 100}%`;

        const color = index >= currentStep ? colors.movistar_green : colors.white;

        return style({
            backgroundColor: color,
            margin: margin,
            minHeight: '4px',
            minWidth: '4px',
            width: '4px',
            height: '4px',
            borderRadius: '4px',
            position: 'absolute'
        })
    },

    containerStep: style({
        display: 'flex',
        minHeight: '16px',
    }),

}

export default styles;