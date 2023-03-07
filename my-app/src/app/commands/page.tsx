import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../../styles/commands/command_page.module.css'
import fetch from 'node-fetch'
import { Navbar, NavLinks } from '../navbar/navbar';
import Link from "next/link";

export default async function CommandsPage() {
    const res = await fetch('https://api.skyndalex.xyz/v1/bot/commands');
    const commands = await res.json();
    console.log(commands)

    return (
        <main className={styles.container}>
            <Navbar>
                <NavLinks>
                    <li> <p> skyndalex.xyz </p> </li>
                    <li> <a href="https://docs.skyndalex.xyz"> Documentation [Soon] </a> </li>
                    <li> <a href="https://status.skyndalex.xyz"> Status </a> </li>
                    <li> <a href="https://dg.skyndalex.xyz"> Datadog </a> </li>
                    <li> <a href="https://discord.gg/RkUYDx5bhM"> Discord </a> </li>
                    <li> <Link href="./commands/page.tsx"> Command list </Link> </li>
                </NavLinks>
            </Navbar>


            <h1 className={styles.site_title}>Commands</h1>

            <ul className={styles.commands_list}>
                {commands.commands.map((command, index) => (
                    <li key={index} className={styles.command_item}>
                        <h2 className={styles.command_name}>{command.name}</h2>
                        <p className={styles.command_description}>{command.description}</p>
                        <ul className={styles.options_list}>
                            {command.options.map((option, index) => (
                                <li key={index} className={styles.option_item}>
                                    <h3 className={styles.command_options_title}> Options: </h3>

                                    <p className={styles.option_item}>
                                        <span className={styles.option_name}>{option.name}: </span>
                                        <span className={styles.option_description}>{option.description}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </main>
    )
}
