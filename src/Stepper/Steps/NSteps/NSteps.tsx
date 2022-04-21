import React from 'react';
import Check from '../../../Assets/16/Check';
import LiquidAccentBullet from '../../LiquidAccentBullet';
import styles from './NSteps.styles';

export default function NSteps(props: { totalSteps: number, currentStep: number }) {

    const mapNumbers = () => {
        let numeros = [];
        for (let index = 1; index < props.totalSteps - 1; index++) {
            numeros.push(
                <div key={index} className={styles.stepsStyle(props.totalSteps, index)}>
                    {index + 1}
                </div>
            )
        }
        return numeros;
    }

    return (
        <>
            <span className={styles.hideSpan}  >
                {`Paso ${props.currentStep} de ${props.totalSteps}`}
            </span>
            <div className={styles.stepperBackground}>
                <div className={styles.containerStep} aria-hidden>
                    <div className={styles.firtsStep}>1</div>
                    {mapNumbers()}
                    <div className={styles.lastStep}><Check /></div>
                </div>
                <div className={styles.containerLiquid}>
                    <LiquidAccentBullet
                        totalSteps={props.totalSteps}
                        currentStep={props.currentStep}
                    />
                </div>
            </div>
        </>

    )
}
