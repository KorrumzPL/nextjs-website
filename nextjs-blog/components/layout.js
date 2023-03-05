import styles from './layout.module.css';

export function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
};
export function nav({ children }) {
    return <nav className={styles.navbar}> {children} </nav>
}
export function Navbar({ children }) {
    return <nav className={styles.navbar}>{children}</nav>;
}

export function NavLinks({ children }) {
    return <ul className={styles.nav_links}> {children} </ul>
}