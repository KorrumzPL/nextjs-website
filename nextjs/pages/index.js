import { SiteLogoContainer, SiteTitleAndDescription } from '../components/home/intro.js'
import Link from 'next/link';
import Head from 'next/head'
import styles from '../components/home/intro.module.css';
import styles2 from '../components/about/about.module.css'
import styles3 from '../components/features/features.module.css';
import { SiteTitle, SiteDescription , SiteLogo } from '../components/home/intro.js';
import { Navbar, NavLinks } from '../components/navbar/navbar.js';
import { AboutUsGrid, AboutUsTitle, GridItemTitle, GridItemDescription } from '../components/about/about.js';
import { FeatureGrid, FeatureTitle } from '../components/features/features.js';

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
                        <li> <Link href="https://docs.skyndalex.xyz"> Documentation [Soon] </Link> </li>
                        <li> <Link href="https://status.skyndalex.xyz"> Status </Link> </li>
                        <li> <Link href="https://dg.skyndalex.xyz"> Datadog </Link> </li>
                        <li> <Link href="https://discord.gg/RkUYDx5bhM"> Discord </Link> </li>
                        <li> <Link href=""> Command list </Link> </li>
                    </NavLinks>
                </Navbar>

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

                <div className={styles2.container}>
                    <AboutUsTitle> About Us </AboutUsTitle>

                    <AboutUsGrid>
                        <div className={styles2['grid-item']}>
                            <GridItemTitle> Safe </GridItemTitle>
                            <GridItemDescription> With us you can sleep peacefully! </GridItemDescription>
                        </div>
                        <div className={styles2['grid-item']}>
                            <GridItemTitle> Open-Source </GridItemTitle>
                            <GridItemDescription> All our projects are published on github </GridItemDescription>
                        </div>
                        <div className={styles2['grid-item']}>
                            <GridItemTitle> 24/7 </GridItemTitle>
                            <GridItemDescription> We're working on making the bot 24/7, pretty much! It is possible to put the bot on your own server </GridItemDescription>
                        </div>
                    </AboutUsGrid>
                </div>

                <div className={styles3.container}>
                    <AboutUsTitle> Features </AboutUsTitle>
                </div>
            </main>
        </div>
    )
}
