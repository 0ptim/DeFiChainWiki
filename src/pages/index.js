import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";
import { BackgroundAnimation } from "../components/Animation";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.mapBackground} />

      {/* <BackgroundAnimation /> */}

      <div className={clsx("container", styles.container)}>
        <div className={styles.logo} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate>Homepage.Subtitle_beginning</Translate>
          <span className={styles.bubble}>
            <span className={styles.bubbleText}>
              <Translate>Homepage.Subtitle_highlight</Translate>
            </span>
          </span>
          <Translate>Homepage.Subtitle_ending</Translate>
        </p>
        <div className={styles.buttonHolder}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/fundamentals"
            >
              <Translate>Homepage.Button.Get_Started</Translate>
            </Link>
          </div>
        </div>

        <Link className={styles.contribute} to="/docs/auto/Sharing_is_caring">
          <Translate>Homepage.Button.Contribute</Translate>
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Wiki for the DeFiChain blockchain and it's ecosystem. Explanations and information around topics like DEX, Liquidity Mining, Staking, Vaults, Wallets and more.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
