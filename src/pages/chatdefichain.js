import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import QA from "../components/QA";

export default function Home() {
  return (
    <Layout description="Wiki for the DeFiChain blockchain and it's ecosystem. Explanations and information around topics like DEX, Liquidity Mining, Staking, Vaults, Wallets and more.">
      <QA />
    </Layout>
  );
}
