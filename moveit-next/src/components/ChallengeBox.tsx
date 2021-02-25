import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    return(
        <div className={styles.challengeBoxCotainer}>
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
            </div>
        </div>
    );
}