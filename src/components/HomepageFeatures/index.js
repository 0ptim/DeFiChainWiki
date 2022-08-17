import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: translate({ id: "Homepage.Feature.Community.Title" }),
    Svg: require("@site/static/features/community.svg").default,
    description: translate({ id: "Homepage.Feature.Community.Description" }),
  },
  {
    title: translate({ id: "Homepage.Feature.OpenSource.Title" }),
    Svg: require("@site/static/features/opensource.svg").default,
    description: translate({ id: "Homepage.Feature.OpenSource.Description" }),
  },
  {
    title: translate({ id: "Homepage.Feature.Searchable.Title" }),
    Svg: require("@site/static/features/searchable.svg").default,
    description: translate({ id: "Homepage.Feature.Searchable.Description" }),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
