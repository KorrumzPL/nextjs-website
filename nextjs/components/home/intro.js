import styles from './intro.module.css';

export function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
};
export function SiteTitle({ children }) {
    return <div className={styles.site_title}>{children}</div>;
}
export function SiteDescription({ children }) {
    return <p className={styles.site_description}>{children}</p>;
}
export function SiteTitleAndDescription() {
    return (
        <div className={styles.site_title_and_description}>
            <SiteTitle />
            <SiteDescription />
        </div>
    );
}
export function SiteLogo() {
    return (
        <img
            className={styles.site_logo}
            src="https://cdn.discordapp.com/avatars/1059594156839809074/f2ed3c7590d834ed2d86912124c4ee1e.webp"
            alt="Skyndalex"
            width="200"
        />
    );
}
export function SiteLogoContainer() {
    return (
        <div className={styles.site_logo_container}>
            <SiteLogo />
        </div>
    );
}