import Link from 'next/link';
import {nav, SiteLogoContainer, SiteTitleAndDescription} from '../components/layout.js'
import styles from '../components/layout.module.css';
import { Navbar, NavLinks, SiteTitle, SiteDescription, Feature1Logo, SiteLogo } from '../components/layout.js';
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title> Skyndalex </title>
                <link rel="icon" href="https://cdn.discordapp.com/avatars/1059594156839809074/f2ed3c7590d834ed2d86912124c4ee1e.png?size=128" />
            </Head>

            <main>
                <Navbar>
                    <NavLinks>
                        <li> <p> skyndalex.xyz </p> </li>
                        <li> <a href="https://docs.skyndalex.xyz"> Documentation [Soon] </a> </li>
                        <li> <a href="https://status.skyndalex.xyz"> Status </a> </li>
                        <li> <a href="https://dg.skyndalex.xyz"> Datadog </a> </li>
                        <li> <a href="https://discord.gg/RkUYDx5bhM"> Discord </a> </li>
                        <li> <a href=""> Command list </a> </li>
                    </NavLinks>
                </Navbar>

                ## Site title

                <div className={styles.container}>
                    <div className={styles.SiteLogoContainer}>
                        <SiteLogo> </SiteLogo>

                        <div className={styles.SiteTitleAndDescription}>
                            <SiteTitle> Skyndalex </SiteTitle>
                            <SiteDescription>
                                Build your discord server with Skyndalex. BETA version, so may have issues.
                            </SiteDescription>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
