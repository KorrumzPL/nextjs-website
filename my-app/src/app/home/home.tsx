import React, { ReactNode } from "react";
import styles from "../../styles/home/page.module.css";

interface NavProps {
  children: ReactNode;
}

export function SiteTitle({ children }: NavProps) {
  return <div className={styles.site_title}>{children}</div>;
}
export function SiteDescription({ children }: NavProps) {
  return <p className={styles.site_description}>{children}</p>;
}
export function SiteTitleAndDescription({ children }: NavProps) {
  return (
    <div className={styles.site_title_and_description}>
      <SiteTitle>{children}</SiteTitle>
      <SiteDescription>{children}</SiteDescription>
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

export function SiteStats({ children }: NavProps) {
  return <div className={styles.site_stats}>{children}</div>;
}

export function SiteStatsItem({ children }: NavProps) {
  return (
    <div className={`${styles.site_stats_item} ${styles.inline}`}>
      {children}
    </div>
  );
}
export function FetchFailed({ children }: NavProps) {
  return <div className={styles.fetch_failed}>{children}</div>;
}
