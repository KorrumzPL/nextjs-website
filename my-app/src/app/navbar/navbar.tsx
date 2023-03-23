import React, { ReactNode } from "react";
import styles from "../../styles/navbar/navbar.module.css";

interface NavProps {
  children: ReactNode;
}

export function Nav({ children }: NavProps) {
  return <nav className={styles.navbar}> {children} </nav>;
}

export function Navbar({ children }: NavProps) {
  return <nav className={styles.navbar}>{children}</nav>;
}

export function NavLinks({ children }: NavProps) {
  return <ul className={styles.nav_links}> {children} </ul>;
}
