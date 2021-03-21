import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faGooglePlusSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from '../img/logo';
import Redirect from "../components/Redirect";
import { signIn, useSession } from "next-auth/client";
import styles from '../styles/pages/Login.module.css';
library.add(faGithubSquare, faGooglePlusSquare, faFacebookSquare, faLinkedin );

export default function Login() {
    const [session] = useSession();
    if (session) {
      return <Redirect to="/" />;
    }
    return (
          <div className={styles.authContainer}>
          <div className={styles.authContainerBackGround}>
            <div className={styles.authLogoBckGrd}></div>
            <div className={styles.authLogoBckGrdIn}></div>
            <div className={styles.authLogoBckGrd}></div>
          </div>
          <div className={styles.authNameApp}>
            <div className={styles.authContainerLogo}>
              <div className={styles.authNameAppLogo}>
              <Logo />
                  <span>Premium</span>
              </div>
            </div>
            <div className={styles.authNameWcm}> <h2>Welcome</h2></div>
            <div className={styles.authBtn}>
              <button className={styles.authBtnGit} type='button' onClick={() => signIn("github")}>
                <p><FontAwesomeIcon icon={['fab', 'github-square']} /></p>
                <span>Login with Github</span>
              </button>
            </div>
            <div className={styles.authBtn}>
              <button className={styles.authBtnGoogle} type='button' onClick={() => signIn("google")}>
                <p><FontAwesomeIcon icon={['fab', 'google-plus-square']} /></p>
                <span>Login with Google</span>
              </button>
            </div>
              <div className={styles.authBtn}>
                <button className={styles.authBtnface} type='button' onClick={() => signIn("facebook")}>
                  <p><FontAwesomeIcon icon={['fab', 'facebook-square']} /></p>
                  <span>Login with Facebook</span>
                </button>
              </div>
              <div className={styles.authSocialMedia}>
            </div>
          </div>
      </div>
      );
}