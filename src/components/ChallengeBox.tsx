import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);
    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }
    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }
    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>{activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>New challenge</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            I completed
                        </button>
                        <button 
                            type="button" 
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            I failed
                        </button>
                    </footer>
                </div>

            ) : (
                <div className={styles.challengeNotActive}>
                <strong>
                    End a cycle to receive a challenge
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Level up by completing challenges.
                </p>
                </div>
            )}
        </div>
    );
}