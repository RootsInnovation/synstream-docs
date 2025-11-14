import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quick Starts',
    caption: 'Launch in hours, not weeks',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description:
      'Follow curated onboarding flows and templates tailored to your team’s goals.',
  },
  {
    title: 'Operational Best Practices',
    caption: 'Built-in guardrails',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description:
      'Implement approvals, alerts, and rollbacks to keep production deployments safe.',
  },
  {
    title: 'End-to-end Visibility',
    caption: 'Know what is happening',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description:
      'Track flow executions, debug faster, and surface insights with real-time telemetry.',
  },
];

function Feature({Svg, title, caption, description}) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Svg role="img" />
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <span className={styles.cardCaption}>{caption}</span>
      <p className={styles.cardBody}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures({features = FeatureList}) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
