import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Daniels-hc.png" alt="Daniel Silva" />

            <div>
             <strong>Daniel Silva</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                 Level 1
            </p>
            </div>
        </div>
    );
}