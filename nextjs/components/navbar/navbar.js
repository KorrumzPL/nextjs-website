import styles from "./navbar.module.css";

export function nav({ children }) {
    return <nav className={styles.navbar}> {children} </nav>
}
export function Navbar({ children }) {
    return <nav className={styles.navbar}>{children}</nav>;
}

export function NavLinks({ children }) {
    return <ul className={styles.nav_links}> {children} </ul>
}