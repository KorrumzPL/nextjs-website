import styles3 from './features.module.css';

export function FeatureGrid({ children }) {
    return <div className={styles3.container}>{children}</div>;
};
export function FeatureTitle ({ children }) {
    return <div className={styles3.features_title}>{children}</div>;
}