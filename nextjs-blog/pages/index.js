import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Navbar, NavLinks } from '../components/layout.js';
import { nav } from '../components/layout.js'

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
                        <li><p> skyndalex.xyz </p></li>
                        <li><a href="https://docs.skyndalex.xyz"> Documentation [Soon] </a></li>
                        <li><a href="https://status.skyndalex.xyz"> Status </a></li>
                        <li><a href="https://discord.gg/RkUYDx5bhM"> Discord </a></li>
                    </NavLinks>
                </Navbar>
            </main>
        </div>
    )
}
