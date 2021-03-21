import { signOut } from "next-auth/client";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from '../styles/components/SideBar.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAdjust, faHome, faSignOutAlt, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faHome, faTrophy, faSignOutAlt, faAdjust);

export function SideBar() {
    const router = useRouter();
    return (
      <div className={styles.sideBarContainer}>
          <div className={styles.sideBarNav}>
              <div className={styles.sideBarNavLogo}>
                <div className={styles.sideBarNavLogoRectOut}></div>
                <div className={styles.sideBarNavLogoRectIn}></div>
                <div className={styles.sideBarNavLogoRectOut}></div>
              </div>
              <div className={styles.sideBarNavIconHome } >
                <div className={router.pathname === "/"
                  ? styles.navContainer
                  : styles.navContainerSelected
                }>
                 <Link href="/">
                  <a>
                    <p><FontAwesomeIcon icon="home" /></p>
                  </a>
                </Link>
               </div>
              </div>
              <div className={styles.sideBarNavIconTrophy}>
                
                <div className={router.pathname === "/ranking"
                  ? styles.navContainer
                  : styles.navContainerSelected
                }>
                <Link href="/ranking">
                  <a><p><FontAwesomeIcon icon="trophy" /></p></a>
                </Link>
                </div>
              </div>
                <div className={styles.sideBarNavIconSingOut}>
                  <div onClick={() => signOut()} className={styles.navContainerSelected}>
                    <p><FontAwesomeIcon icon="sign-out-alt" /></p>
                  </div>
                </div>
          </div>
      </div>
    );
} 
