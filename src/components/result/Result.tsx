import styles from './Result.module.css';

interface ResultProps {
    weight: number;
    height: number;
    calcIMC: () => JSX.Element;
}

export default function Result({weight, height, calcIMC}: ResultProps) {

    return (
        <>
            <div className={styles.resultContainer}>
                {!(weight && height) ? (
                    <span>Preencha os campos de peso e altura</span>
                ) : (
                    <div>
                        {calcIMC()}
                    </div>
                )}
            </div>
        </>
    )
}