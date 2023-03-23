import React, { ReactNode } from "react";
import styles3 from "../../styles/features/features.module.css";
import Image from "next/image";
import cn from "classnames";

interface NavProps {
  children: ReactNode;
}

export function FeaturesGrid({ children }: NavProps) {
  return (
    <div className={styles3.container}>
      <div className={styles3["grid-container"]}>{children}</div>
    </div>
  );
}
export function FeatureTitle({ children }: NavProps) {
  return <div className={styles3.features_title}>{children}</div>;
}
export function FeatureGridItemTitle({ children }: NavProps) {
  return (
    <h3 className={cn(styles3.grid_item_title, "grid-item-container")}>
      {children}
    </h3>
  );
}

export function FeatureGridItemDescription({ children }: NavProps) {
  return (
    <p className={cn(styles3.grid_item_description, "grid-item-container")}>
      {children}
    </p>
  );
}
// @ts-ignore
export function FeatureLogo({ src, alt }: NavProps) {
  return (
    <div className={styles3.feature_logo_container}>
      <Image
        className={styles3.feature_logo}
        src={src}
        alt={alt}
        width={500}
        height={200}
      />
    </div>
  );
}
