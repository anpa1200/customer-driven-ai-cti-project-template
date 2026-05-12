import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/">
            Open the Template
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Customer-driven AI CTI project template for intelligence, hunting, detection engineering, and delivery.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className="container">
          <div className={styles.grid}>
            <Link className={styles.card} to="/docs/project-template/foundations">
              <h2>Part 1: Foundations</h2>
              <p>Analytic standards, AI governance, scoring, roles, artifacts, and detection readiness levels.</p>
            </Link>
            <Link className={styles.card} to="/docs/project-template/phase-by-phase-execution-guide">
              <h2>Part 2A: Execution Guide</h2>
              <p>A phase-by-phase delivery workflow with activities, exit criteria, and validation tests.</p>
            </Link>
            <Link className={styles.card} to="/docs/project-template/reference-toolkit">
              <h2>Part 2B: Reference Toolkit</h2>
              <p>AI workflows, LLM task cards, strict quality gates, registers, and a worked example.</p>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
