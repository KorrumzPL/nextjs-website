import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/home/page.module.css'
import styles2 from '../styles/about/about.module.css'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
import { Navbar, NavLinks } from './navbar/navbar';
import { SiteLogo, SiteTitle, SiteDescription } from './home/home';
import { AboutUsGrid, AboutUsTitle, GridItemTitle, GridItemDescription } from './about/about';

export default function Home() {
  return (
    <main className={styles.main}>
        <Head>
            <title> Skyndalex </title>
            <link rel="icon" href="https://cdn.discordapp.com/avatars/1059594156839809074/f2ed3c7590d834ed2d86912124c4ee1e.png?size=128" />
        </Head>

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

        <div className={styles.container}>
            <div className={styles.SiteLogoContainer}>
                <SiteLogo/>

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
    </main>
  )
}
