import { Resolver } from 'dns';
import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';
import { CountdownContext } from '../Contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceede(){
        completedChallenge();
        resetCountdown();
    }

    function handleChanllengeFailed() {
        resetChallenge();
        resetCountdown();
    }


    return(
        <div className={styles.challengeBoxCotainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChanllengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceede}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}
        </div>
    );
}