import React, { ChangeEvent } from 'react';
import styles from './Form.module.css';

interface InputFieldsProps {
    setWeight: React.Dispatch<React.SetStateAction<number>>;
    setHeight: React.Dispatch<React.SetStateAction<number>>;
}

function InputFields({ setWeight, setHeight }: InputFieldsProps) {
    const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value));
    };

    const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value));
    };

    return (
    <>
        <div className={styles.formContainer}>
            <div className={styles.valuesContainer}>
                <label htmlFor="Weight">Peso (kg)</label>
                <input className={styles.input} type="number" id='Weight' placeholder='Digite o seu peso (Kg)' onBlur={handleWeightChange}/>
            </div>
            <div className={styles.valuesContainer}>
                <label htmlFor="Height">Altura (cm)</label>
                <input className={styles.input} type="number" id='Height' placeholder='Digite a sua Altura (cm)' onBlur={handleHeightChange}/> 
            </div>
            
        </div>
    </>
    );
}

export default InputFields;