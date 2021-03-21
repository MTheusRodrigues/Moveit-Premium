import Head from "next/head";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { SideBar} from '../components/SideBar';
import {ChallengesProvider,} from "../contexts/ChallengesContext";
import Redirect from "../components/Redirect";
import { useSession, session } from "next-auth/client";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const [session]: any = useSession();
  if (!session) {
    return <Redirect to="/login" />;
  }

    return (
          <ChallengesProvider>
            <SideBar />
              <div className={styles.container}>
                <Head>
                  <title>Moveit | Premium</title>
                </Head>
                <ExperienceBar /> 
                <CountdownProvider>
                  <section>
                    <div>
                      <Profile />
                      <CompletedChallenges />
                      <Countdown />
                      </div>
                        <div>
                          <ChallengeBox />
                        </div>
                  </section>
                </CountdownProvider>
              </div>
          </ChallengesProvider>
    );
}

