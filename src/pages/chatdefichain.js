import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import QA from "../components/QA";

export default function Home() {
  return (
    <Layout description="Ask questions about DeFiChain which will get answered.">
      <QA />
    </Layout>
  );
}
