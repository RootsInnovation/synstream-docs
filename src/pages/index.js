import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import heroLogo from '@site/static/img/icon.png';
import homepageContent from '@site/src/data/homepageContent';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const hero = {
    ...homepageContent.hero,
    title: homepageContent.hero.title ?? siteConfig.title,
    subtitle: homepageContent.hero.subtitle ?? siteConfig.tagline,
  };

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroContent}>
          {hero.badge ? <span className={styles.heroBadge}>{hero.badge}</span> : null}
          <Heading as="h1" className={styles.heroTitle}>
            {hero.title}
          </Heading>
          {hero.subtitle ? <p className={styles.heroSubtitle}>{hero.subtitle}</p> : null}
          {Array.isArray(hero.bullets) && hero.bullets.length > 0 ? (
            <ul className={styles.heroBullets}>
              {hero.bullets.map((bullet) => (
                <li key={bullet} className={styles.heroBullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
          <div className={styles.heroActions}>
            {hero.primaryAction ? (
              <Link className="button button--secondary button--lg" to={hero.primaryAction.to}>
                {hero.primaryAction.label}
              </Link>
            ) : null}
            {hero.secondaryAction ? (
              <Link className={clsx('button button--lg', styles.secondaryButton)} to={hero.secondaryAction.to}>
                {hero.secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>
        {hero.card ? (
          <div className={styles.heroIllustration}>
            <div className={styles.heroCard}>
              <img src={heroLogo} alt="Synstream logo" className={styles.heroLogo} />
              {hero.card.description ? <p>{hero.card.description}</p> : null}
              {Array.isArray(hero.card.stats) && hero.card.stats.length > 0 ? (
                <div className={styles.heroStatGroup}>
                  {hero.card.stats.map((stat) => (
                    <div key={`${stat.label}-${stat.value}`}>
                      <span className={styles.heroStatLabel}>{stat.label}</span>
                      <span className={styles.heroStatValue}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function HomepageMetrics() {
  if (!Array.isArray(homepageContent.metrics) || homepageContent.metrics.length === 0) {
    return null;
  }

  return (
    <section className={styles.metricsSection}>
      <div className="container">
        <div className={styles.metricsGrid}>
          {homepageContent.metrics.map((metric) => (
            <div key={metric.label} className={styles.metricCard}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
              {metric.caption ? <p className={styles.metricCaption}>{metric.caption}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageCta() {
  const {cta} = homepageContent;
  if (!cta) {
    return null;
  }

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div>
            <Heading as="h2" className={styles.ctaTitle}>
              {cta.title}
            </Heading>
            {cta.subtitle ? <p className={styles.ctaSubtitle}>{cta.subtitle}</p> : null}
          </div>
          <div className={styles.ctaActions}>
            {cta.primaryAction ? (
              <Link className="button button--secondary button--lg" to={cta.primaryAction.to}>
                {cta.primaryAction.label}
              </Link>
            ) : null}
            {cta.secondaryAction ? (
              <Link className="button button--outline button--lg" to={cta.secondaryAction.to}>
                {cta.secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Home`}
      description="Synstream Docs centralizes product guides, tutorials, and operational best practices.">
      <HomepageHeader />
      <main>
        <HomepageMetrics />
        <HomepageFeatures features={homepageContent.features} />
        <HomepageCta />
      </main>
    </Layout>
  );
}

