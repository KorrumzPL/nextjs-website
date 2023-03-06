import React, { ReactNode } from 'react';
import styles2 from "../../styles/about/about.module.css";

interface NavProps {
    children: ReactNode;
}

export function AboutUsGrid ({ children }: NavProps) {
    return (
        <div className={styles2.container}>
            <div className={styles2['grid-container']}>
                {children}
            </div>
        </div>
    );
}
export function AboutUsTitle ({ children }: NavProps) {
    return <div className={styles2.about_us_title}>{children}</div>;
}
export function GridItemTitle ({ children }: NavProps) {
    return <h3 className={styles2.grid_item_title}>{children}</h3>;
}
export function  GridItemDescription ({ children }: NavProps) {
    return <p className={styles2.grid_item_description}>{children}</p>;
}