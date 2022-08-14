import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Community driven",
    Svg: require("@site/static/features/community.svg").default,
    description: (
      <>Everyone is invited to contribute and help maintain the wiki.</>
    ),
  },
  {
    title: "Open Source",
    Svg: require("@site/static/features/opensource.svg").default,
    description: (
      <>
        Every page, image and even the wiki-code is completely open sourced on
        GitHub.
      </>
    ),
  },
  {
    title: "Searchable",
    Svg: require("@site/static/features/searchable.svg").default,
    description: (
      <>
        The whole wiki is indexed and every content can be found in an instant.
      </>
    ),
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
