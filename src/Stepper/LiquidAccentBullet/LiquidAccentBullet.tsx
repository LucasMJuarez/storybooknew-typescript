import React from 'react'
import styles from './LiquidAccentBullet.styles';

export default function LiquidAccentBullet(props: { totalSteps: number, currentStep: number }) {

    const mapAccentBullet = () => {
        let numeros = [];
        for (let index = 1; index < props.totalSteps - 1; index++) {
            numeros.push(
                <div key={index} className={styles.accentStyle(props.totalSteps, index, props.currentStep)}></div>
            )
        }
        return numeros;
    }

    return (
        <>
            <div className={styles.progressBackground}>
                <div className={styles.progress(props.totalSteps, props.currentStep)}>
                    <div className={styles.containerStep}>
                        {mapAccentBullet()}
                    </div>
                </div>
            </div>
        </>
    )
}
