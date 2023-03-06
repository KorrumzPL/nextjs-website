import styles2 from './about.module.css';

export function AboutUsGrid({ children }) {
    return (
        <div className={styles2.container}>
            <div className={styles2['grid-container']}>
                {children}
            </div>
        </div>
    );
};
export function AboutUsTitle({ children }) {
    return <div className={styles2.about_us_title}>{children}</div>;
}
export function GridItemTitle({ children }) {
    return <h3 className={styles2.grid_item_title}>{children}</h3>;
}
export function  GridItemDescription({ children }) {
    return <p className={styles2.grid_item_description}>{children}</p>;
}