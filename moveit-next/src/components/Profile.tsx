import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Daniels-hc.png" alt="Daniel Silva" />

            <div>
             <strong>Daniel Silva</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                 Level {level}
            </p>
            </div>
        </div>
    );
}