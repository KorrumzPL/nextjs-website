import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '../styles/home/page.module.css'
import styles2 from '../styles/about/about.module.css'
import styles3 from '../styles/features/features.module.css'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
import { Navbar, NavLinks } from './navbar/navbar';
import { SiteLogo, SiteTitle, SiteDescription, SiteStats, SiteStatsItem, FetchFailed } from './home/home';
import { AboutUsGrid, AboutUsTitle, GridItemTitle, GridItemDescription } from './about/about';
import { FeaturesGrid, FeatureTitle, FeatureGridItemTitle, FeatureGridItemDescription, FeatureLogo } from './features/features';
import ghManagerFeatureLogo from "../public/github_manager_feature.svg"
import embedBuilderFeatureLogo from "../public/embed_builder_feature.svg"
import customBotsFeatureLogo from "../public/custom_bot_feature.svg"
import fetch from 'node-fetch'

export default async function Home() {
    // @ts-ignore

    try {
        const res = await fetch('https://api.skyndalex.xyz/v1/bot/info');

        if (!res.ok) {
            throw new Error("Error while fetching data")
        }

        const botInfo = await res.json() || 0;

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
                        <li> <Link href="http://localhost:3000/commands"> Command list </Link> </li>
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

                    <SiteStats>
                        We are currently serving
                        <SiteStatsItem>{botInfo.guilds} &nbsp;</SiteStatsItem>
                        guilds,
                        <SiteStatsItem>{botInfo.users} &nbsp;</SiteStatsItem>
                        users,
                        <SiteStatsItem>{botInfo.channels} &nbsp;</SiteStatsItem>
                        channels with ping
                        <SiteStatsItem>{botInfo.ping}ms &nbsp;</SiteStatsItem>
                    </SiteStats>
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
                    <FeatureTitle> Features </FeatureTitle>
                    <FeaturesGrid>
                        <div className={styles3['grid-item']}>

                            <FeatureGridItemTitle> Embed builders </FeatureGridItemTitle>

                            <div className={styles3['grid-item-content']}>
                                <div className={styles3['grid-item-description']}>
                                    <FeatureGridItemDescription>
                                        With embed builders you are able to create beautiful and more readable ads with a simple configurator for buttons
                                    </FeatureGridItemDescription>
                                </div>

                                <FeatureLogo src={embedBuilderFeatureLogo} alt={"Feature"} />
                            </div>
                        </div>
                        <div className={styles3['grid-item']}>
                            <FeatureGridItemTitle> Github Manager </FeatureGridItemTitle>
                            <div className={styles3['grid-item-content']}>
                                <div className={styles3['grid-item-description']}>
                                    <FeatureGridItemDescription>
                                        Integrate your server with Github. You can create a forum channel with the latest events from your repository,
                                        or just make classic notifications.
                                    </FeatureGridItemDescription>
                                </div>

                                <FeatureLogo src={ghManagerFeatureLogo} alt={"Feature"}/>
                            </div>
                        </div>
                        <div className={styles3['grid-item']}>
                            <FeatureGridItemTitle> Custom Bots </FeatureGridItemTitle>
                            <div className={styles3['grid-item-content']}>
                                <div className={styles3['grid-item-description']}>
                                    <FeatureGridItemDescription>
                                        Fully customize your server. You can create other bot, and connect it to skyndalex client! [ONLY FOR REQUEST]
                                    </FeatureGridItemDescription>
                                </div>

                                <FeatureLogo src={customBotsFeatureLogo} alt={"Feature"} />
                            </div>
                        </div>
                    </FeaturesGrid>
                </div>
            </main>
        )
    } catch (error) {
        return <FetchFailed> Failed to fetch data from API. Try refresh the page. </FetchFailed>
    }
}
